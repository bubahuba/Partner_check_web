# Třebíč Zámostí — 3D Collada Model

Game-ready **Collada (.dae)** model of the historic Jewish Quarter (*Zámostí*) in Třebíč, Czech Republic (UNESCO site).

## Output files

| File | Description |
|------|-------------|
| `output/trebic_zamosti.dae` | Main Collada model (613 buildings, terrain, landmarks) |
| `output/game_metadata.json` | Spawn points, named landmarks, coordinate system |
| `screenshots/` | Reference views captured from mapy.cz 3D aerial mode |
| `reference/terrain_texture.jpg` | Aerial orthophoto for the area |
| `reference/osm_zamosti.json` | Cached OpenStreetMap building data |

## Model stats

- **613 buildings** extruded from OSM footprints
- **~14,900 triangles** (low-poly, suitable for adventure games)
- **Y-up**, **meters**, origin at quarter center (49.217°N, 15.8795°E)
- Named landmark nodes (synagogue, hotels, galleries, etc.)

## How it was built

mapy.cz does **not** publish downloadable 3D mesh data. This pipeline reconstructs the area using:

1. **mapy.cz 3D screenshots** — 12 camera angles around Zámostí (reference + visual style)
2. **OpenStreetMap** — building footprints, heights, and landmark names (ODbL)
3. **Elevation** — Open-Meteo API with synthetic fallback
4. **Aerial texture** — Esri World Imagery tiles (reference orthophoto)

Geometry is extruded from OSM polygons; colors follow a warm historic palette informed by the mapy.cz views.

## Regenerate

```bash
pip install -r requirements.txt
python -m playwright install chromium

# Optional: refresh mapy.cz reference screenshots (~5 min)
python scripts/capture_mapy_screenshots.py

# Build Collada model
python scripts/build_collada_model.py
```

## Using in an adventure game

### Blender
`File → Import → Collada (.dae)` → open `output/trebic_zamosti.dae`

### Unity
Import the `.dae` or re-export as FBX from Blender. Scale is 1 unit = 1 meter.

### Godot 4
Use `Import 3D Scene` on the `.dae` file.

### Spawn / quest markers
Load `output/game_metadata.json` for landmark positions in local meters:

```json
"recommended_spawn": { "x": 0, "y": 2, "z": 0 }
```

## Licensing & attribution

- **OSM geometry**: © OpenStreetMap contributors, [ODbL](https://www.openstreetmap.org/copyright)
- **mapy.cz screenshots**: Seznam.cz — reference only; do not redistribute commercially without permission
- **Esri imagery**: Esri World Imagery — check [Esri terms](https://www.esri.com/en-us/legal/terms/full-master-agreement) for your use case
- **Generated mesh**: You may use the exported `.dae` in your game; respect upstream data licenses

For production-quality facades, use the screenshots as art reference and paint/replace materials in your engine.

## Limitations

- Building heights are estimated from OSM tags (`building:levels`, `height`) where available
- No interior geometry; exterior shells only
- Not photogrammetry-grade — optimized for adventure-game walkable exteriors
- Street-level mapy.cz capture may be incomplete when WebGL tiles load slowly

## Area bounds

Approximate bounding box (WGS84):

- SW: 49.2145, 15.8755
- NE: 49.2195, 15.8835

Centered on the Jewish Quarter near the Rear Synagogue and Jihlava river.
