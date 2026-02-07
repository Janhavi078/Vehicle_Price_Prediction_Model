import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Environment, Html, useProgress } from "@react-three/drei";

// Simple Loading screen so you know it's working
function Loader() {
  const { progress } = useProgress();
  return <Html center style={{ color: 'white' }}>{progress.toFixed(0)}% loaded</Html>;
}

function CarModel() {
  // IMPORTANT: "car.glb" must be in your /public folder!
  const { scene } = useGLTF("/car.glb"); 
  return <primitive object={scene} scale={1.5} />;
}

export default function Features3D() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.5} />
        
        {/* Suspense prevents the site from breaking during load */}
        <Suspense fallback={<Loader />}>
          <PresentationControls 
            speed={1.5} 
            global 
            zoom={0.8} 
            polar={[-0.1, Math.PI / 4]} 
          >
            <Stage environment="city" intensity={0.6} contactShadow={true}>
              <CarModel />
            </Stage>
          </PresentationControls>
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}