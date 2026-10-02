import type { GLTF } from 'three/addons/loaders/GLTFLoader.js';

export const DEFAULT_MODEL_URL = '/models/om-avatar.glb';

// Cache promises so multiple components (Hero + Journey) share the same download
const modelCache = new Map<string, Promise<GLTF>>();

/**
 * Checks if the model asset actually exists on the server before invoking GLTFLoader.
 * This prevents GLTFLoader from parsing HTML 404 pages as JSON/GLTF when the file is absent.
 * Uses lightweight HEAD request with zero Three.js dependencies.
 */
export async function checkModelAvailability(url: string = DEFAULT_MODEL_URL): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const contentType = res.headers.get('content-type') || '';
    // Must be 200 OK and not an HTML fallback page from SPA router
    return res.ok && !contentType.includes('text/html');
  } catch {
    return false;
  }
}

/**
 * Loads and caches a GLTF model. Dynamically imports GLTFLoader so Three.js
 * is never bundled into the initial critical render path.
 */
export async function loadGLTFModel(url: string = DEFAULT_MODEL_URL): Promise<GLTF> {
  const cached = modelCache.get(url);
  if (cached) {
    return cached;
  }

  const promise = (async () => {
    const available = await checkModelAvailability(url);
    if (!available) {
      throw new Error(`3D model not found at ${url}`);
    }

    const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
    const loader = new GLTFLoader();

    return new Promise<GLTF>((resolve, reject) => {
      loader.load(
        url,
        (gltf) => resolve(gltf),
        undefined,
        (error) => reject(error instanceof Error ? error : new Error(String(error)))
      );
    });
  })();

  modelCache.set(url, promise);
  return promise;
}
