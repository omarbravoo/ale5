import { OrbitControls } from '@react-three/drei';
import { useCameraConfig } from '../hooks/useCameraConfig';
import { useCameraTransition } from '../hooks/useCameraTransition';
import { useReturnToMain } from '../hooks/useReturnToMain';

/**
 * GalleryScene Component
 * 
 * 3D content for the gallery view.
 * This component is rendered INSIDE the Canvas (via View),
 * so it can safely use R3F hooks.
 */
export function GalleryScene() {
    const cameraConfig = useCameraConfig('gallery');

    // Smoothly transition camera when this view is active
    useCameraTransition('gallery', true);

    // Return to main view on unmount
    useReturnToMain();

    return (
        <>
            {/* Lighting for gallery */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Example gallery items */}
            <mesh position={[-2, 0, 0]}>
                <boxGeometry args={[1.5, 2, 0.2]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>

            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="skyblue" />
            </mesh>

            <mesh position={[2, 0, 0]}>
                <boxGeometry args={[1.5, 2, 0.2]} />
                <meshStandardMaterial color="lime" />
            </mesh>

            {/* Camera controls for this view */}
            <OrbitControls
                target={cameraConfig.target}
                enablePan={cameraConfig.controls.enablePan}
                minDistance={cameraConfig.controls.minDistance}
                maxDistance={cameraConfig.controls.maxDistance}
                makeDefault
            />
        </>
    );
}
