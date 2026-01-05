import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Model } from "./Model";
import { FloatingText } from "./FloatingText";

/// Define the props type
interface ExperienceProps {
  setShowGallery: (value: boolean) => void;
}

function Experience({ setShowGallery }: ExperienceProps) {
  return (
    <>

      <OrbitControls
        makeDefault
        target={[0, 3, 0]}
        enablePan={false}
        minDistance={5}
        maxDistance={25}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 10}
        maxAzimuthAngle={Math.PI / 1.6}
      />

      {/* Lighting: Essential for seeing the 3D models and colors. */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={5} />

      {/* 3D Models and Text elements */}
      <Model />
      <FloatingText onClick={() => setShowGallery(true)}
      />

      {/* Post-processing: Adds a 'glow' or bloom effect to the emissive materials. */}
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.2}
          luminanceThreshold={0.5}
        />
      </EffectComposer>
    </>
  );
};

export default Experience;
