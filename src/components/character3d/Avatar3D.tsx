import React, { Suspense, lazy, useEffect, useState, Component, type ErrorInfo, type ReactNode } from 'react';
import { Avatar3DFallback } from './Avatar3DFallback';
import { checkModelAvailability, DEFAULT_MODEL_URL } from './modelLoader';
import type { Avatar3DProps, ModelStatus } from './avatar3d.types';

// Lazy-load the Three.js Canvas component so Three.js and GLTFLoader
// are kept in a separate asynchronous chunk and never block initial page load
const LazyAvatar3DCanvas = lazy(() => import('./Avatar3DCanvas'));

function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

interface CanvasErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
  onError?: (error: Error) => void;
}

interface CanvasErrorBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<CanvasErrorBoundaryProps, CanvasErrorBoundaryState> {
  constructor(props: CanvasErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): CanvasErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, _info: ErrorInfo): void {
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/**
 * Avatar3D
 * Production 3D avatar wrapper with automatic fallback:
 * - If /models/om-avatar.glb exists and WebGL is supported -> Renders real 3D model
 * - If /models/om-avatar.glb is absent, loading, or fails -> Renders existing 2D character
 */
export const Avatar3D: React.FC<Avatar3DProps> = (props) => {
  const {
    modelUrl = DEFAULT_MODEL_URL,
    onModelLoad,
    onModelError,
    ...rest
  } = props;

  const [status, setStatus] = useState<ModelStatus>('loading');

  useEffect(() => {
    // 1. Verify WebGL support first
    if (!isWebGLSupported()) {
      setStatus('error');
      return;
    }

    // 2. Check if the actual GLB file exists on the server without throwing uncaught errors
    let isCancelled = false;

    checkModelAvailability(modelUrl)
      .then((available) => {
        if (isCancelled) return;
        if (available) {
          setStatus('loaded');
        } else {
          // Model file not found (e.g. 404) -> cleanly fallback to 2D
          setStatus('error');
        }
      })
      .catch(() => {
        if (!isCancelled) setStatus('error');
      });

    return () => {
      isCancelled = true;
    };
  }, [modelUrl]);

  // While checking or if GLB is absent/errored, seamlessly render the 2D character
  if (status !== 'loaded') {
    return <Avatar3DFallback {...props} />;
  }

  // When model availability is confirmed, mount lazy canvas wrapped in ErrorBoundary & Suspense
  return (
    <CanvasErrorBoundary
      fallback={<Avatar3DFallback {...props} />}
      onError={(err) => {
        setStatus('error');
        if (onModelError) onModelError(err);
      }}
    >
      <Suspense fallback={<Avatar3DFallback {...props} />}>
        <LazyAvatar3DCanvas
          modelUrl={modelUrl}
          onModelLoad={onModelLoad}
          onModelError={(err) => {
            setStatus('error');
            if (onModelError) onModelError(err);
          }}
          {...rest}
        />
      </Suspense>
    </CanvasErrorBoundary>
  );
};

export default Avatar3D;
