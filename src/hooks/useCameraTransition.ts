import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useCameraConfig } from './useCameraConfig';
import { ViewName } from '../config/cameraConfig';

/**
 * Hook: useCameraTransition
 * 
 * Smoothly transitions camera position and target using lerp interpolation.
 * Runs every frame for buttery-smooth movement.
 * 
 * @param viewName - Name of the view to transition to
 * @param isActive - Whether this view is currently active
 */
export function useCameraTransition(viewName: ViewName, isActive: boolean) {
    const { camera } = useThree();
    const config = useCameraConfig(viewName);

    // Target position and look-at point
    const targetPosition = useRef(new Vector3(...config.position));
    const targetLookAt = useRef(new Vector3(...config.target));

    // Update targets when config changes or view becomes active
    useEffect(() => {
        if (isActive) {
            targetPosition.current.set(...config.position);
            targetLookAt.current.set(...config.target);
        }
    }, [isActive, config, viewName]);

    // Smoothly lerp camera every frame
    useFrame(() => {
        if (isActive) {
            // Lerp camera position
            camera.position.lerp(targetPosition.current, config.transition.lerpFactor);

            // Lerp camera look-at (using a temporary vector)
            const currentLookAt = new Vector3();
            camera.getWorldDirection(currentLookAt);
            currentLookAt.add(camera.position);

            currentLookAt.lerp(targetLookAt.current, config.transition.lerpFactor);
            camera.lookAt(currentLookAt);
        }
    });

    return config;
}
