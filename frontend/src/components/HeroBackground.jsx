import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshReflectorMaterial, Float, PresentationControls, Image, Environment } from "@react-three/drei";
import carImage from "../assets/car.png"; // Make sure your car image is a transparent PNG

export default function HeroBackground() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 5] }}>
      <color attach="background" args={["#050505"]} />
      
      {/* Cinematic Lighting to make the 2D image feel 3D */}
      <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={2} castShadow />
      <ambientLight intensity={0.2} />

      <Suspense fallback={null}>
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-0.1, 0.1]}
          azimuth={[-0.2, 0.2]}
        >
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            {/* The Image component from Drei renders your car in the 3D scene */}
            <Image 
              url={carImage} 
              scale={[5.5, 3]} // Adjust scale to fit your car's aspect ratio
              transparent 
              toneMapped={false}
            />
          </Float>
        </PresentationControls>

        {/* This creates the "Professional" floor reflection below the car image */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}