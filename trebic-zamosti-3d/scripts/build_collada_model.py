#!/usr/bin/env python3
"""
Build a game-ready Collada (.dae) model of Třebíč Zámostí from OSM building data,
terrain elevation, and aerial imagery. Geometry is derived from OpenStreetMap;
visual style is informed by mapy.cz 3D reference screenshots.
"""

from __future__ import annotations

import json
import math
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

import numpy as np
from collada import Collada, geometry, material, scene, source
from PIL import Image
from pyproj import Transformer
from shapely.geometry import Polygon

ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = ROOT / "output"
REFERENCE_DIR = ROOT / "reference"

# Zámostí bounding box (Jewish quarter + immediate surroundings)
BBOX = {
    "min_lat": 49.2145,
    "min_lon": 15.8755,
    "max_lat": 49.2195,
    "max_lon": 15.8835,
}

CENTER_LAT = (BBOX["min_lat"] + BBOX["max_lat"]) / 2
CENTER_LON = (BBOX["min_lon"] + BBOX["max_lon"]) / 2

# Local metric CRS centered on the quarter
TRANSFORMER = Transformer.from_crs("EPSG:4326", f"+proj=tmerc +lat_0={CENTER_LAT} +lon_0={CENTER_LON} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs", always_xy=True)

OVERPASS_QUERY = f"""
[out:json][timeout:90];
(
  way["building"]({BBOX['min_lat']},{BBOX['min_lon']},{BBOX['max_lat']},{BBOX['max_lon']});
  relation["building"]({BBOX['min_lat']},{BBOX['min_lon']},{BBOX['max_lat']},{BBOX['max_lon']});
);
out body;
>;
out skel qt;
"""


def fetch_osm() -> dict[str, Any]:
    cache = ROOT / "reference" / "osm_zamosti.json"
    if cache.exists():
        return json.loads(cache.read_text(encoding="utf-8"))

    data = urllib.parse.urlencode({"data": OVERPASS_QUERY}).encode()
    req = urllib.request.Request(
        "https://overpass-api.de/api/interpreter",
        data=data,
        headers={"User-Agent": "trebic-zamosti-3d/1.0 (adventure-game-model)"},
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        payload = json.loads(resp.read().decode())
    cache.parent.mkdir(parents=True, exist_ok=True)
    cache.write_text(json.dumps(payload), encoding="utf-8")
    return payload


def parse_height(tags: dict[str, str]) -> float:
    if "height" in tags:
        raw = tags["height"].replace("m", "").strip()
        try:
            return float(raw.split()[0])
        except ValueError:
            pass
    if "building:levels" in tags:
        try:
            return float(tags["building:levels"]) * 3.2
        except ValueError:
            pass
    # Historic Jewish quarter: mostly 2-3 story houses
    building_type = tags.get("building", "yes")
    defaults = {
        "church": 18.0,
        "cathedral": 22.0,
        "synagogue": 14.0,
        "school": 10.0,
        "garage": 3.5,
        "shed": 3.0,
        "roof": 4.0,
        "apartments": 12.0,
        "house": 8.5,
        "residential": 9.0,
        "yes": 9.0,
    }
    return defaults.get(building_type, 9.0)


def wall_color(tags: dict[str, str]) -> tuple[float, float, float]:
    """Warm historic palette suited to Zámostí adventure-game aesthetic."""
    building = tags.get("building", "yes")
    palette = {
        "synagogue": (0.82, 0.72, 0.55),
        "church": (0.78, 0.76, 0.72),
        "school": (0.85, 0.80, 0.70),
        "garage": (0.55, 0.52, 0.48),
        "shed": (0.60, 0.55, 0.45),
    }
    if building in palette:
        return palette[building]
    # Slight variation from OSM id hash for visual diversity
    seed = hash(tags.get("name", building)) % 100
    base = 0.72 + (seed % 15) * 0.01
    return (base, base - 0.06, base - 0.14)


def roof_color(tags: dict[str, str]) -> tuple[float, float, float]:
    building = tags.get("building", "yes")
    if building in ("church", "synagogue"):
        return (0.35, 0.32, 0.30)
    seed = hash(tags.get("ref", building)) % 100
    r = 0.42 + (seed % 10) * 0.015
    return (r, r - 0.05, r - 0.08)


def latlon_to_local(lon: float, lat: float) -> tuple[float, float]:
    x, y = TRANSFORMER.transform(lon, lat)
    return x, y


def build_nodes(osm: dict[str, Any]) -> dict[int, tuple[float, float]]:
    return {n["id"]: latlon_to_local(n["lon"], n["lat"]) for n in osm["elements"] if n["type"] == "node"}


def extract_buildings(osm: dict[str, Any], nodes: dict[int, tuple[float, float]]) -> list[dict[str, Any]]:
    buildings = []
    for el in osm["elements"]:
        if el["type"] != "way" or "building" not in el.get("tags", {}):
            continue
        coords = []
        for nid in el["nodes"]:
            if nid in nodes:
                coords.append(nodes[nid])
        if len(coords) < 3:
            continue
        poly = Polygon(coords)
        if not poly.is_valid:
            poly = poly.buffer(0)
        if poly.is_empty or poly.area < 4:
            continue
        tags = el["tags"]
        buildings.append(
            {
                "id": el["id"],
                "polygon": poly,
                "height": parse_height(tags),
                "tags": tags,
                "wall": wall_color(tags),
                "roof": roof_color(tags),
            }
        )
    return buildings


def lonlat_to_tile(lon: float, lat: float, zoom: int) -> tuple[int, int]:
    lat_rad = math.radians(lat)
    n = 2**zoom
    x = int((lon + 180.0) / 360.0 * n)
    y = int((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n)
    return x, y


def tile_bounds(x: int, y: int, zoom: int) -> tuple[float, float, float, float]:
    n = 2**zoom
    lon_min = x / n * 360.0 - 180.0
    lon_max = (x + 1) / n * 360.0 - 180.0
    lat_max = math.degrees(math.atan(math.sinh(math.pi * (1 - 2 * y / n))))
    lat_min = math.degrees(math.atan(math.sinh(math.pi * (1 - 2 * (y + 1) / n))))
    return lon_min, lat_min, lon_max, lat_max


def fetch_terrain_texture(zoom: int = 18) -> tuple[Image.Image, dict[str, float]]:
    """Download Esri World Imagery tiles (free for non-commercial / attribution required)."""
    min_x, max_y = lonlat_to_tile(BBOX["min_lon"], BBOX["min_lat"], zoom)
    max_x, min_y = lonlat_to_tile(BBOX["max_lon"], BBOX["max_lat"], zoom)

    tile_w, tile_h = 256, 256
    cols = max_x - min_x + 1
    rows = max_y - min_y + 1
    canvas = Image.new("RGB", (cols * tile_w, rows * tile_h))

    for tx in range(min_x, max_x + 1):
        for ty in range(min_y, max_y + 1):
            url = (
                "https://server.arcgisonline.com/ArcGIS/rest/services/"
                f"World_Imagery/MapServer/tile/{zoom}/{ty}/{tx}"
            )
            try:
                with urllib.request.urlopen(url, timeout=30) as resp:
                    tile = Image.open(resp).convert("RGB")
                canvas.paste(tile, ((tx - min_x) * tile_w, (ty - min_y) * tile_h))
            except Exception as exc:
                print(f"  tile {tx},{ty} failed: {exc}")

    lon_min, lat_min, _lon_max, _lat_max = tile_bounds(min_x, max_y, zoom)
    _lon_min2, _lat_min2, lon_max, lat_max = tile_bounds(max_x, min_y, zoom)

    bounds = {"lon_min": lon_min, "lat_min": lat_min, "lon_max": lon_max, "lat_max": lat_max}
    tex_path = REFERENCE_DIR / "terrain_texture.jpg"
    REFERENCE_DIR.mkdir(parents=True, exist_ok=True)
    canvas.save(tex_path, quality=90)
    return canvas, bounds


def fetch_elevation_grid(step: int = 8) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Sample elevation via Open-Meteo, with cached fallback to gentle terrain."""
    cache = REFERENCE_DIR / "elevation_grid.json"
    if cache.exists():
        data = json.loads(cache.read_text(encoding="utf-8"))
        return np.array(data["xs"]), np.array(data["ys"]), np.array(data["zs"])

    lats = np.linspace(BBOX["min_lat"], BBOX["max_lat"], step)
    lons = np.linspace(BBOX["min_lon"], BBOX["max_lon"], step)

    xs, ys, zs = [], [], []
    for lat in lats:
        for lon in lons:
            lx, ly = latlon_to_local(lon, lat)
            elev = 392.0 + 0.8 * math.sin(lx / 120.0) + 0.5 * math.cos(ly / 90.0)
            try:
                url = (
                    "https://api.open-meteo.com/v1/elevation?"
                    f"latitude={lat:.6f}&longitude={lon:.6f}"
                )
                with urllib.request.urlopen(url, timeout=10) as resp:
                    elev = json.loads(resp.read())["elevation"][0]
            except Exception:
                pass
            xs.append(lx)
            ys.append(ly)
            zs.append(elev)

    payload = {"xs": xs, "ys": ys, "zs": zs}
    REFERENCE_DIR.mkdir(parents=True, exist_ok=True)
    cache.write_text(json.dumps(payload), encoding="utf-8")
    return np.array(xs), np.array(ys), np.array(zs)


def extrude_building(poly: Polygon, height: float, base_z: float) -> tuple[list[tuple[float, float, float]], list[int]]:
    """Create a simple extruded mesh: walls + roof cap."""
    coords = list(poly.exterior.coords)[:-1]
    n = len(coords)
    verts: list[tuple[float, float, float]] = []
    faces: list[int] = []

    # Bottom ring
    for x, y in coords:
        verts.append((x, base_z, -y))  # Collada Y-up: flip Y for right-handed feel
    # Top ring
    for x, y in coords:
        verts.append((x, base_z + height, -y))

    # Wall quads (two triangles each)
    for i in range(n):
        j = (i + 1) % n
        b0, b1 = i, j
        t0, t1 = i + n, j + n
        faces.extend([b0, t0, b1, b1, t0, t1])

    # Roof fan from centroid
    cx = sum(c[0] for c in coords) / n
    cy = sum(c[1] for c in coords) / n
    ci = len(verts)
    verts.append((cx, base_z + height, -cy))
    for i in range(n):
        j = (i + 1) % n
        faces.extend([i + n, ci, j + n])

    return verts, faces


def color_key(color: tuple[float, float, float]) -> str:
    return f"{int(color[0]*100):03d}_{int(color[1]*100):03d}_{int(color[2]*100):03d}"


def add_mesh_to_collada(
    collada_doc: Collada,
    geom_id: str,
    geom_name: str,
    vertices: list[tuple[float, float, float]],
    faces: list[int],
    mat: material.Material,
) -> scene.Node:
    vert_src = source.FloatSource(f"{geom_id}_positions", np.array(vertices, dtype=float).flatten(), ("X", "Y", "Z"))
    geom = geometry.Geometry(collada_doc, geom_id, geom_name, [vert_src])

    input_list = source.InputList()
    input_list.addInput(0, "VERTEX", f"#{geom_id}_positions")

    triset = geom.createTriangleSet(np.array(faces, dtype=int), input_list, mat.id)
    geom.primitives.append(triset)
    collada_doc.geometries.append(geom)

    geom_node = scene.GeometryNode(geom, [mat])
    return scene.Node(geom_name, children=[geom_node])


def get_or_create_material(
    collada_doc: Collada,
    cache: dict[str, material.Material],
    color: tuple[float, float, float],
    label: str,
) -> material.Material:
    key = color_key(color)
    if key in cache:
        return cache[key]

    eff = material.Effect(f"effect_{key}", [], "phong", diffuse=color, specular=(0.08, 0.08, 0.08))
    mat = material.Material(f"material_{key}", label, eff)
    collada_doc.effects.append(eff)
    collada_doc.materials.append(mat)
    cache[key] = mat
    return mat


def merge_mesh_batch(
    batch: list[tuple[list[tuple[float, float, float]], list[int]]],
) -> tuple[list[tuple[float, float, float]], list[int]]:
    all_verts: list[tuple[float, float, float]] = []
    all_faces: list[int] = []
    offset = 0
    for verts, faces in batch:
        all_verts.extend(verts)
        all_faces.extend(i + offset for i in faces)
        offset += len(verts)
    return all_verts, all_faces


def build_terrain_mesh(xs: np.ndarray, ys: np.ndarray, zs: np.ndarray, tex_bounds: dict[str, float]) -> tuple[list[tuple[float, float, float]], list[int], list[tuple[float, float]]]:
    """Build a gridded terrain from elevation samples."""
    step = int(math.sqrt(len(xs)))
    verts: list[tuple[float, float, float]] = []
    uvs: list[tuple[float, float]] = []
    faces: list[int] = []

    lon_span = tex_bounds["lon_max"] - tex_bounds["lon_min"]
    lat_span = tex_bounds["lat_max"] - tex_bounds["lat_min"]

    for i in range(step):
        for j in range(step):
            idx = i * step + j
            lx, ly, lz = xs[idx], ys[idx], zs[idx]
            verts.append((lx, lz, -ly))

            # UV from geographic position (approximate inverse of local transform)
            lon = tex_bounds["lon_min"] + (j / (step - 1)) * lon_span
            lat = tex_bounds["lat_min"] + (i / (step - 1)) * lat_span
            u = (lon - tex_bounds["lon_min"]) / lon_span
            v = 1.0 - (lat - tex_bounds["lat_min"]) / lat_span
            uvs.append((u, v))

    for i in range(step - 1):
        for j in range(step - 1):
            v0 = i * step + j
            v1 = v0 + 1
            v2 = v0 + step
            v3 = v2 + 1
            faces.extend([v0, v2, v1, v1, v2, v3])

    return verts, faces, uvs


def export_collada(
    buildings: list[dict[str, Any]],
    terrain_verts: list[tuple[float, float, float]],
    terrain_faces: list[int],
    output_path: Path,
) -> None:
    collada_doc = Collada()
    collada_doc.assetInfo.upaxis = "Y_UP"
    mat_cache: dict[str, material.Material] = {}
    scene_nodes: list[scene.Node] = []

    if terrain_verts:
        terrain_mat = get_or_create_material(collada_doc, mat_cache, (0.45, 0.50, 0.38), "terrain")
        scene_nodes.append(
            add_mesh_to_collada(collada_doc, "terrain", "terrain", terrain_verts, terrain_faces, terrain_mat)
        )

    # Batch regular buildings by wall color to keep Collada manageable
    batches: dict[str, list[tuple[list[tuple[float, float, float]], list[int]]]] = {}
    landmark_nodes: list[scene.Node] = []

    for b in buildings:
        verts, faces = extrude_building(b["polygon"], b["height"], 0.0)
        tags = b["tags"]
        is_landmark = bool(tags.get("name")) or tags.get("building") in ("synagogue", "church")

        if is_landmark:
            label = tags.get("name") or tags.get("building", "landmark")
            safe_id = f"landmark_{b['id']}"
            mat = get_or_create_material(collada_doc, mat_cache, b["wall"], label)
            landmark_nodes.append(add_mesh_to_collada(collada_doc, safe_id, label, verts, faces, mat))
            continue

        key = color_key(b["wall"])
        batches.setdefault(key, []).append((verts, faces))

    for idx, (key, batch) in enumerate(batches.items()):
        merged_verts, merged_faces = merge_mesh_batch(batch)
        sample_color = (
            int(key.split("_")[0]) / 100.0,
            int(key.split("_")[1]) / 100.0,
            int(key.split("_")[2]) / 100.0,
        )
        mat = get_or_create_material(collada_doc, mat_cache, sample_color, f"buildings_{key}")
        scene_nodes.append(
            add_mesh_to_collada(
                collada_doc,
                f"buildings_{idx}",
                f"buildings_batch_{idx}",
                merged_verts,
                merged_faces,
                mat,
            )
        )

    scene_nodes.extend(landmark_nodes)

    main_scene = scene.Scene("ZamostiScene", scene_nodes)
    collada_doc.scenes.append(main_scene)
    collada_doc.scene = main_scene
    collada_doc.write(str(output_path))


def write_game_metadata(buildings: list[dict[str, Any]], output_path: Path) -> None:
    """Export spawn points and landmarks for adventure game integration."""
    landmarks = []
    for b in buildings:
        tags = b["tags"]
        name = tags.get("name") or tags.get("addr:housename")
        if name or tags.get("building") in ("synagogue", "church"):
            cx, cy = b["polygon"].centroid.x, b["polygon"].centroid.y
            landmarks.append(
                {
                    "name": name or tags.get("building", "building"),
                    "type": tags.get("building"),
                    "osm_id": b["id"],
                    "position": {"x": cx, "y": b["height"] / 2, "z": -cy},
                    "tags": {k: v for k, v in tags.items() if k.startswith(("name", "historic", "tourism", "building"))},
                }
            )

    meta = {
        "title": "Třebíč Zámostí",
        "description": "Historic Jewish Quarter (UNESCO) — game-ready Collada export",
        "coordinate_system": {
            "origin": {"lat": CENTER_LAT, "lon": CENTER_LON},
            "units": "meters",
            "up_axis": "Y",
        },
        "bounds_meters": {
            "note": "Local TMerc centered on quarter",
        },
        "building_count": len(buildings),
        "landmarks": sorted(landmarks, key=lambda x: x.get("name") or ""),
        "recommended_spawn": {"x": 0, "y": 2, "z": 0, "note": "Center of Jewish quarter"},
        "attribution": {
            "geometry": "OpenStreetMap contributors (ODbL)",
            "elevation": "Open-Meteo elevation API",
            "imagery_reference": "mapy.cz 3D screenshots + Esri World Imagery",
        },
    }
    output_path.write_text(json.dumps(meta, indent=2, ensure_ascii=False), encoding="utf-8")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    REFERENCE_DIR.mkdir(parents=True, exist_ok=True)

    print("Fetching OSM building data ...")
    osm = fetch_osm()
    nodes = build_nodes(osm)
    buildings = extract_buildings(osm, nodes)
    print(f"  {len(buildings)} buildings extracted")

    print("Fetching terrain texture ...")
    _tex, tex_bounds = fetch_terrain_texture(zoom=18)

    print("Fetching elevation grid ...")
    xs, ys, zs = fetch_elevation_grid(step=10)
    base_offset = float(np.min(zs))
    zs = zs - base_offset  # normalize so ground ~0

    terrain_verts, terrain_faces, _uvs = build_terrain_mesh(xs, ys, zs, tex_bounds)

    dae_path = OUTPUT_DIR / "trebic_zamosti.dae"
    print(f"Exporting Collada to {dae_path} ...")
    export_collada(buildings, terrain_verts, terrain_faces, dae_path)

    meta_path = OUTPUT_DIR / "game_metadata.json"
    write_game_metadata(buildings, meta_path)
    print(f"Game metadata -> {meta_path}")
    print("Done.")


if __name__ == "__main__":
    main()
