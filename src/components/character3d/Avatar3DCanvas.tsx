import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { loadGLTFModel, DEFAULT_MODEL_URL } from './modelLoader';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';
import type { Avatar3DProps } from './avatar3d.types';

const sizeMap = {
  sm: 'w-28 h-28',
  md: 'w-44 h-44',
  lg: 'w-60 h-60',
  hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
};

// Maximum allowed rotational bounds
const MAX_YAW = 20 * (Math.PI / 180);   // ±20 degrees in radians
const MAX_PITCH = 12 * (Math.PI / 180); // ±12 degrees in radians

export const Avatar3DCanvas: React.FC<Avatar3DProps> = ({
  className,
  size = 'hero',
  modelUrl = DEFAULT_MODEL_URL,
  targetOverride = null,
  showPedestal = true,
  showStatusBadge = true,
  customCoordinateText,
  customBadgeText,
  interactive = true,
  onModelLoad,
  onModelError,
  onCharacterClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let isDisposed = false;
    let animationFrameId: number;

    // 1. Scene & Renderer setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 50);
    camera.position.set(0, 0.1, 2.9);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // 2. Lighting Setup
    // Soft clean ambient fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Key light (soft studio white from top-front-right)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(2.0, 2.5, 2.2);
    scene.add(keyLight);

    // Cool fill light (from front-left)
    const fillLight = new THREE.DirectionalLight(0xc7d2fe, 0.5);
    fillLight.position.set(-2.2, 1.2, 1.8);
    scene.add(fillLight);

    // Signature Electric Pink Rim Light (#FF4FA3) from behind/side
    const rimLightPink = new THREE.DirectionalLight(0xff4fa3, 2.6);
    rimLightPink.position.set(2.2, 1.4, -2.0);
    scene.add(rimLightPink);

    // Subtle counter rim light from back-left
    const rimLightLavender = new THREE.DirectionalLight(0xb9a7ff, 1.2);
    rimLightLavender.position.set(-2.0, 1.6, -1.8);
    scene.add(rimLightLavender);

    // 3. Avatar hierarchy container
    const avatarRoot = new THREE.Group();
    scene.add(avatarRoot);

    let headNode: THREE.Object3D | null = null;
    let currentYaw = 0;
    let currentPitch = 0;
    let targetYaw = 0;
    let targetPitch = 0;
    const clock = new THREE.Clock();

    // 4. Load the GLTF model
    loadGLTFModel(modelUrl)
      .then((gltf) => {
        if (isDisposed) return;

        // Clone so multiple instances (Hero and Journey) can use the model independently
        const modelInstance = gltf.scene.clone(true);

        // Normalize bounding box & center geometry
        const box = new THREE.Box3().setFromObject(modelInstance);
        const center = box.getCenter(new THREE.Vector3());
        const sizeBox = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(sizeBox.x, sizeBox.y, sizeBox.z) || 1;
        const scale = 1.9 / maxDim;

        modelInstance.scale.setScalar(scale);
        modelInstance.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

        // Detect separate head node if available for independent articulation
        modelInstance.traverse((child) => {
          const name = child.name.toLowerCase();
          if ((name.includes('head') || name.includes('neck')) && !headNode) {
            headNode = child;
          }
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        avatarRoot.add(modelInstance);
        setIsLoaded(true);
        if (onModelLoad) onModelLoad();
      })
      .catch((err) => {
        if (isDisposed) return;
        if (onModelError) onModelError(err);
      });

    // 5. Mouse / Pointer Tracking
    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive || prefersReduced) return;
      if (targetOverride) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normX = (e.clientX - centerX) / (window.innerWidth / 2);
      const normY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Clamp target rotation within bounds
      targetYaw = THREE.MathUtils.clamp(normX * MAX_YAW, -MAX_YAW, MAX_YAW);
      targetPitch = THREE.MathUtils.clamp(-normY * MAX_PITCH, -MAX_PITCH, MAX_PITCH);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // 6. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // 7. Render & Animation Loop
    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Handle target override if provided (e.g. hovering action buttons)
      if (targetOverride) {
        targetYaw = THREE.MathUtils.clamp(targetOverride.x * MAX_YAW, -MAX_YAW, MAX_YAW);
        targetPitch = THREE.MathUtils.clamp(-targetOverride.y * MAX_PITCH, -MAX_PITCH, MAX_PITCH);
      }

      if (prefersReduced) {
        // Reduced motion: static presentation, zero bobbing or tracking
        avatarRoot.position.y = 0;
        avatarRoot.rotation.set(0, 0, 0);
        if (headNode) headNode.rotation.set(0, 0, 0);
      } else {
        // Smooth interpolation (slerp/lerp with framerate-independent factor)
        const lerpFactor = THREE.MathUtils.clamp(delta * 4.5, 0.01, 0.2);
        currentYaw = THREE.MathUtils.lerp(currentYaw, targetYaw, lerpFactor);
        currentPitch = THREE.MathUtils.lerp(currentPitch, targetPitch, lerpFactor);

        // Gentle floating idle breathing bob
        avatarRoot.position.y = Math.sin(time * 1.6) * 0.035;

        // Apply rotation
        if (headNode) {
          // Independent head articulation + subtle torso counter-balance
          headNode.rotation.y = currentYaw * 0.85;
          headNode.rotation.x = currentPitch * 0.85;
          avatarRoot.rotation.y = currentYaw * 0.15;
          avatarRoot.rotation.x = currentPitch * 0.15;
        } else {
          // Smooth unified rotation of the full avatar
          avatarRoot.rotation.y = currentYaw;
          avatarRoot.rotation.x = currentPitch;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Disposal Cleanup
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      resizeObserver.disconnect();

      // Dispose three.js resources to prevent memory leaks
      avatarRoot.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.geometry?.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else if (mesh.material) {
            mesh.material.dispose();
          }
        }
      });

      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, [modelUrl, interactive, prefersReduced, targetOverride, onModelLoad, onModelError]);

  return (
    <div
      ref={containerRef}
      className={cn('relative flex flex-col items-center select-none group', className)}
    >
      {/* Frame Pedestal matching editorial aesthetic */}
      {showPedestal && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-xl border border-border-lavender bg-surface-lavender shadow-warm -z-10 transition-colors duration-200 group-hover:border-accent/40"
        >
          {/* Coordinate Tag */}
          <div className="absolute -top-2.5 left-6 px-2 py-0.5 rounded-sm bg-surface border border-border text-[9px] font-mono text-muted-subtle uppercase tracking-wider shadow-subtle">
            {customCoordinateText || '3D AVATAR // 18.52° N, 73.85° E'}
          </div>
        </div>
      )}

      {/* WebGL Canvas */}
      <div
        role="button"
        tabIndex={0}
        onClick={onCharacterClick}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onCharacterClick?.()}
        aria-label="Interactive 3D avatar of Om Joshi."
        className={cn(
          'relative flex items-center justify-center p-2 cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-accent',
          sizeMap[size]
        )}
      >
        <canvas
          ref={canvasRef}
          className={cn(
            'w-full h-full object-contain transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>

      {/* Status Beacon */}
      {showStatusBadge && (
        <div
          aria-hidden="true"
          className="mt-2 flex items-center gap-2 px-2.5 py-1 rounded-sm bg-surface border border-border text-[10px] font-mono text-muted-foreground shadow-subtle transition-colors group-hover:border-accent/30"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          <span className="tracking-wider uppercase">
            {customBadgeText || '3D MODEL // ACTIVE'}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar3DCanvas;
