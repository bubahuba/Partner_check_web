#!/usr/bin/env python3
"""Capture mapy.cz 3D aerial views of Třebíč Zámostí from multiple camera angles."""

from __future__ import annotations

import asyncio
import json
from pathlib import Path

from playwright.async_api import async_playwright

# Jewish quarter (Zámostí) center
CENTER_LAT = 49.2175
CENTER_LON = 15.8795

# Camera positions: orbit around the quarter at low altitude for building detail
CAMERA_VIEWS = [
    {"name": "north", "yaw": 0, "pitch": -40, "height": 120},
    {"name": "northeast", "yaw": 45, "pitch": -42, "height": 110},
    {"name": "east", "yaw": 90, "pitch": -40, "height": 120},
    {"name": "southeast", "yaw": 135, "pitch": -42, "height": 110},
    {"name": "south", "yaw": 180, "pitch": -40, "height": 120},
    {"name": "southwest", "yaw": 225, "pitch": -42, "height": 110},
    {"name": "west", "yaw": 270, "pitch": -40, "height": 120},
    {"name": "northwest", "yaw": 315, "pitch": -42, "height": 110},
    {"name": "overview_high", "yaw": 35, "pitch": -55, "height": 220},
    {"name": "street_level", "yaw": 120, "pitch": -18, "height": 35},
    {"name": "synagogue_view", "yaw": 200, "pitch": -30, "height": 65},
    {"name": "river_view", "yaw": 300, "pitch": -35, "height": 90},
]

OUTPUT_DIR = Path(__file__).resolve().parent.parent / "screenshots"
METADATA_PATH = OUTPUT_DIR / "camera_metadata.json"


def build_url(yaw: float, pitch: float, height: float) -> str:
    return (
        f"https://mapy.cz/zakladni?"
        f"x={CENTER_LON:.6f}&y={CENTER_LAT:.6f}&z=18"
        f"&m3d=1&yaw={yaw}&pitch={pitch}&height={height}"
        f"&source=base&id=2231da0a-da89-11e8-a76e-9a8f7c2e3b0d"
    )


async def capture() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    metadata = {
        "center": {"lat": CENTER_LAT, "lon": CENTER_LON},
        "area": "Třebíč Zámostí (Jewish Quarter)",
        "source": "mapy.cz 3D aerial view",
        "views": [],
    }

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1920, "height": 1080},
            device_scale_factor=1,
            locale="cs-CZ",
        )
        page = await context.new_page()

        for view in CAMERA_VIEWS:
            outfile = OUTPUT_DIR / f"{view['name']}.png"
            if outfile.exists() and outfile.stat().st_size > 100_000:
                print(f"Skipping {view['name']} (already captured)")
                metadata["views"].append({**view, "file": outfile.name, "skipped": True})
                continue

            url = build_url(view["yaw"], view["pitch"], view["height"])
            print(f"Capturing {view['name']} ...")
            await page.goto(url, wait_until="domcontentloaded", timeout=60000)
            await page.wait_for_timeout(10000)

            await page.screenshot(path=str(outfile), full_page=False, timeout=60000)

            metadata["views"].append(
                {
                    **view,
                    "url": url,
                    "file": outfile.name,
                }
            )
            print(f"  -> {outfile}")

        await browser.close()

    METADATA_PATH.write_text(json.dumps(metadata, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Saved metadata to {METADATA_PATH}")


if __name__ == "__main__":
    asyncio.run(capture())
