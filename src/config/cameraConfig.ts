/**
 * Camera Configuration
 * 
 * Centralized camera settings for all Views.
 * Easy to tweak and maintain - all parameters in one place.
 */

export interface CameraControlsConfig {
    enablePan: boolean;
    minDistance: number;
    maxDistance: number;
    minPolarAngle?: number;
    maxPolarAngle?: number;
    minAzimuthAngle?: number;
    maxAzimuthAngle?: number;
}

export interface CameraViewConfig {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
    controls: CameraControlsConfig;
    transition: {
        lerpFactor: number; // 0-1, higher = faster transition
    };
}

export type ViewName = 'main' | 'gallery';

/**
 * Camera configurations for each view
 */
export const CAMERA_CONFIGS: Record<ViewName, CameraViewConfig> = {
    main: {
        position: [0, 4, 15],
        target: [0, 3, 0],
        fov: 45,
        controls: {
            enablePan: false,
            minDistance: 5,
            maxDistance: 25,
            minPolarAngle: Math.PI / 6,
            maxPolarAngle: Math.PI / 2,
            minAzimuthAngle: -Math.PI / 10,
            maxAzimuthAngle: Math.PI / 1.6,
        },
        transition: {
            lerpFactor: 0.05, // Smooth, slow transition
        },
    },
    gallery: {
        position: [0, 0, 5],
        target: [0, 0, 0],
        fov: 45,
        controls: {
            enablePan: false,
            minDistance: 3,
            maxDistance: 10,
        },
        transition: {
            lerpFactor: 0.08, // Slightly faster transition
        },
    },
};
