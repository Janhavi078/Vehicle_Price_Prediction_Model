import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  // reduced particles for performance
  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <Points positions={positions}>
      <PointMaterial
        transparent
        color="#2563eb"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function BackgroundScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      gl={{ alpha: true }}   // IMPORTANT (no black bg)
    >
      <Particles />
    </Canvas>
  );
}
