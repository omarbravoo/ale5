import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Suspense } from "react";
import Postres from "./components/Postres";
import { View } from "@react-three/drei";
import { useRef, useState } from "react";
import { CAMERA_CONFIGS } from "./config/cameraConfig";

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

      <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Experience setShowGallery={setShowGallery} />
      </View>

      <Canvas
        className="canvas"
        eventSource={containerRef}
        camera={{
          fov: CAMERA_CONFIGS.main.fov,
          near: 0.1,
          far: 200,
          position: CAMERA_CONFIGS.main.position
        }}
      >
        <Suspense fallback={null}>
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
