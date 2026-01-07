import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { FloatingText } from "./FloatingText";
import { useCameraConfig } from "../hooks/useCameraConfig";

/// Define the props type
interface ExperienceProps {
  setShowGallery: (value: boolean) => void;
}

function Experience({ setShowGallery }: ExperienceProps) {
  const cameraConfig = useCameraConfig('main');

  return (
    <>

      <OrbitControls
        makeDefault
        target={cameraConfig.target}
        enablePan={cameraConfig.controls.enablePan}
        minDistance={cameraConfig.controls.minDistance}
        maxDistance={cameraConfig.controls.maxDistance}
        minPolarAngle={cameraConfig.controls.minPolarAngle}
        maxPolarAngle={cameraConfig.controls.maxPolarAngle}
        minAzimuthAngle={cameraConfig.controls.minAzimuthAngle}
        maxAzimuthAngle={cameraConfig.controls.maxAzimuthAngle}
      />

      {/* Lighting: Essential for seeing the 3D models and colors. */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={5} />

      {/* 3D Models and Text elements */}
      <Model />
      <FloatingText onClick={() => setShowGallery(true)} />


    </>
  );
};

export default Experience;
