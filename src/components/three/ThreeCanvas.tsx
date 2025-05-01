import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ 
  url, 
  scale = 1, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}) => {
  const modelRef = useRef<THREE.Group>(null!);
  
  // Attempt to load the model, but fallback gracefully if it fails
  const { scene } = useGLTF(url, true);
  
  useFrame(({ clock }) => {
    if (modelRef.current) {
      // Gentle rotation animation
      modelRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2 + rotation[1];
    }
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={scale} 
      position={position}
      rotation={rotation}
    />
  );
};

interface ThreeCanvasProps {
  modelUrl: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  backgroundColor?: string;
  enableControls?: boolean;
  height?: string;
  autoRotate?: boolean;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  modelUrl,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  backgroundColor = 'transparent',
  enableControls = false,
  height = '300px',
  autoRotate = true
}) => {
  return (
    <div style={{ width: '100%', height, backgroundColor }}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]} // Performance optimization
      >
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[5, 10, 7.5]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <Model 
          url={modelUrl} 
          scale={scale} 
          position={position} 
          rotation={rotation}
        />
        {enableControls && <OrbitControls autoRotate={autoRotate} />}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;