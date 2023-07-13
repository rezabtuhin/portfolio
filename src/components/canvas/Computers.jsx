import { Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // // Custom rotation animation using useFrame
  // useFrame(({ clock }) => {
  //   // Get elapsed time from the clock
  //   const elapsedTime = clock.getElapsedTime();
  //   // Calculate rotation angle based on elapsed time
  //   const rotationAngle = elapsedTime * 0.5; // Adjust rotation speed as needed
  //   // Set rotation on the mesh
  //   computer.scene.rotation.x = rotationAngle;
  // });

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={1} />
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.45 : 0.6}
            position={isMobile ? [0, -1.5, -0.5] : [0, -2.4, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </mesh>
      </Suspense>
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default Computers;
