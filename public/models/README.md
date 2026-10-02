# 3D Avatar Models Directory

Place the real 3D model asset in this directory as:

```
public/models/om-avatar.glb
```

## Model Requirements

* **Filename**: `om-avatar.glb`
* **Format**: Binary glTF (`.glb`)
* **Geometry**: Stylized bust / upper-torso mascot matching Om Joshi's illustrated identity:
  * Wavy dark hair
  * Dark rectangular glasses
  * Dark tech hoodie (`#151922` / `#1C212B`)
  * Electric pink / magenta details (`#FF4FA3`)
* **Triangles**: 12,000 – 25,000 tris
* **Textures**: Embedded PBR atlas (1024×1024 or 2048×2048)
* **Mesh Naming**: If head node or bone is named `Head`, `head`, or `neck`, the renderer will articulate independent head movement.
* **Target Size**: < 1.5MB – 2.5MB (< 800KB with Draco)

## Automatic Detection

The portfolio application automatically detects when `/models/om-avatar.glb` is present.
* If absent: Automatically falls back to the existing 2D animated character.
* If present: Seamlessly loads and renders the genuine 3D model with Three.js studio lighting, pink rim light, and mouse tracking.
