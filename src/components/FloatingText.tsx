import { Text3D, Float } from "@react-three/drei";
import * as THREE from 'three';

/**
 * Text Configuration Interface
 * Defines how each 3D text object should be placed and colored.
 */
interface TextConfig {
  text: string;
  position: [number, number, number];
  rotation: [number, number, number];
  fontSize: number;
  color: string;
}

/**
 * Static Text Data
 * Pre-defined positions and rotations for the labels in the scene.
 */
const texts: TextConfig[] = [
  {
    text: "Postres",
    position: [0, 3.6, 2.5],
    rotation: [0.0, 0.0, 0.0],
    fontSize: 0.7,
    color: "rgba(72, 6, 148, 1)"
  },
  {
    text: "Snacks",
    position: [5, 3.3, 1.8],
    rotation: [0.0, 1.6, 0.0],
    fontSize: 0.7,
    color: "rgba(72, 6, 148, 1)"
  },
  {
    text: "Personalizados",
    position: [6.0, 1.2, -2.7],
    rotation: [0.0, 1.6, 0.0],
    fontSize: 0.7,
    color: "rgba(72, 6, 148, 1)"
  },
  {
    text: "Clases",
    position: [2.4, 3.6, -5.4],
    rotation: [0.0, 0.0, 0.0],
    fontSize: 0.7,
    color: "rgba(72, 6, 148, 1)"
  },
  {
    text: "Redes",
    position: [-5.8, 4.9, 1.3],
    rotation: [0.0, 1.6, 0.0],
    fontSize: 0.7,
    color: "rgba(72, 6, 148, 1)"
  }
];

// Define props for the FloatingText component
interface FloatingTextProps {
  onClick?: (e: any) => void; // Using 'any' for the event type for simplicity, or utilize ThreeEvent

}

/**
 * FloatingText Component
 * Renders a collection of 3D text objects that gently float up and down.
 */
export const FloatingText = ({ onClick }: FloatingTextProps) => {
  return (
    <>
      {texts.map((config, index) => (
        /* Float: Adds a gentle animation to its children */
        <Float
          key={index}
          speed={7} // speed of the floating animation
          rotationIntensity={0} // degree of rotation during float
          floatIntensity={0.8} // height of the floating motion
          position={config.position}
          rotation={config.rotation}
        >
          {/* Text3D: Renders the actual 3D geometry of the text */}
          <Text3D
            font="/fonts/mochalate_Regular.json"
            size={config.fontSize}
            height={0.04}
            onClick={onClick}

          >
            {config.text}
            {/* meshBasicMaterial: High color intensity for visibility */}
            <meshBasicMaterial
              color={new THREE.Color(config.color).multiplyScalar(40)}
              toneMapped={false}
            />
          </Text3D>
        </Float>
      ))}
    </>
  );
};
