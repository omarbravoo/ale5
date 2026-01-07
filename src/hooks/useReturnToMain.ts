import { useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useCameraConfig } from './useCameraConfig';

/**
 * Hook: useReturnToMain
 * 
 * Automatically returns camera to main view position when component unmounts.
 * Used to ensure smooth transition back when closing a view.
 */
export function useReturnToMain() {
    const { camera } = useThree();
    const mainConfig = useCameraConfig('main');

    useEffect(() => {
        // Cleanup function runs on unmount
        return () => {
            // Create target vectors
            const targetPosition = new Vector3(...mainConfig.position);
            const targetLookAt = new Vector3(...mainConfig.target);

            // Smooth transition back to main view
            let frame = 0;
            const maxFrames = 60; // ~1 second at 60fps

            const animate = () => {
                if (frame < maxFrames) {
                    frame++;
                    const progress = frame / maxFrames;

                    // Lerp back to main position
                    camera.position.lerp(targetPosition, mainConfig.transition.lerpFactor);

                    // Lerp look-at
                    const currentLookAt = new Vector3();
                    camera.getWorldDirection(currentLookAt);
                    currentLookAt.add(camera.position);
                    currentLookAt.lerp(targetLookAt, mainConfig.transition.lerpFactor);
                    camera.lookAt(currentLookAt);

                    requestAnimationFrame(animate);
                }
            };

            animate();
        };
    }, [camera, mainConfig]);
}
