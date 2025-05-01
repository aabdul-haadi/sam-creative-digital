'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; // Optional: import your GLTF model

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <OrbitControls />
      {/* Optional 3D Model */}
      <Model />
    </Canvas>
  );
}
