import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Suspense } from "react";
import Postres from "./components/Postres";
import { View } from "@react-three/drei";
import { useRef, useState } from "react";

/**
 * Main Application Component
 * Sets up the 3D Canvas and the core scene components.
 * 
 * CAMERA CONFIGURATION:
 * To tweak the camera, adjust the 'camera' prop on the <Canvas> component below.
 */
function App() {

  // State to show/hide the gallery view
  const [showGallery, setShowGallery] = useState<boolean>(false);

  // Ref for the main container (helps with mouse events over HTML + 3D)
  const containerRef = useRef<HTMLDivElement>(null!);

  return (

    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%', height: '100vh' }}>

      <Canvas
        eventSource={containerRef} // Makes clicks work on both HTML and 3D
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 4, 15] // Consolidated camera position
        }}
      >
        <Suspense fallback={null}>

          <Experience setShowGallery={setShowGallery} />

          <View.Port />
        </Suspense>
      </Canvas>

      {/* Conditional gallery view - appears when showGallery is true */}
      {showGallery && (
        <Postres onClose={() => setShowGallery(false)} />
      )}
    </div>
  );
}

export default App;
