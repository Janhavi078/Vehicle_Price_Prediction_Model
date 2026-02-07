// import { Canvas } from "@react-three/fiber";
// import { Float } from "@react-three/drei";

// function FloatingSphere() {
//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <mesh>
//         <sphereGeometry args={[1.5, 64, 64]} />
//         <meshStandardMaterial color="#00e0ff" wireframe />
//       </mesh>
//     </Float>
//   );
// }

// export default function Background3D() {
//   return (
//     <Canvas camera={{ position: [0, 0, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 2, 2]} />
//       <FloatingSphere />
//     </Canvas>
//   );
// }
// import { Canvas } from "@react-three/fiber";
// import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sparkles, ContactShadows } from "@react-three/drei";

// function FuturisticObject() {
//   return (
//     <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
//       <mesh>
//         {/* A TorusKnot looks much more "engineered" and professional than a sphere */}
//         <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        
//         {/* Distort material gives it a high-end, "liquid metal" car paint vibe */}
//         <MeshDistortMaterial 
//           color="#00e0ff" 
//           speed={4} 
//           distort={0.4} 
//           metalness={0.8} 
//           roughness={0.2}
//         />
//       </mesh>
//     </Float>
//   );
// }

// export default function Background3D() {
//   return (
//     <Canvas camera={{ position: [0, 0, 5] }}>
//       <ambientLight intensity={0.2} />
      
//       {/* Cinematic Lighting: One blue, one white for depth */}
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#00e0ff" />
//       <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={1} />

//       <FuturisticObject />

//       {/* Adding Sparkles gives it a "premium" polished feel like a car under showroom lights */}
//       <Sparkles count={50} scale={10} size={2} speed={0.4} color="#00e0ff" />
      
//       {/* Adds a shadow on the 'floor' to give the object weight */}
//       <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
//     </Canvas>
//   );
// }
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, ContactShadows } from "@react-three/drei";

/* ===== FUTURISTIC FLOATING OBJECT ===== */
function FuturisticObject() {
  return (
    <Float speed={2.5} rotationIntensity={1.8} floatIntensity={1.4}>
      <mesh>
        {/* Torus Knot = engineered / mechanical premium look */}
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />

        {/* Liquid metal luxury material */}
        <MeshDistortMaterial
          color="#00e0ff"
          speed={2.5}
          distort={0.35}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

/* ===== MAIN BACKGROUND ===== */
export default function Background3D() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Ambient soft base light */}
        <ambientLight intensity={0.15} />

        {/* Cinematic blue showroom light */}
        <spotLight
          position={[5, 5, 5]}
          intensity={1.4}
          angle={0.2}
          penumbra={1}
          color="#00e0ff"
        />

        {/* White fill light for depth */}
        <pointLight position={[-5, -5, -5]} intensity={1.2} />

        {/* Floating Premium Object */}
        <FuturisticObject />

        {/* Sparkle showroom effect */}
        <Sparkles
          count={60}
          scale={10}
          size={2}
          speed={0.4}
          color="#00e0ff"
        />

        {/* Shadow to ground object */}
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4.5}
        />
      </Canvas>
    </div>
  );
}
