import { CAMERA_CONFIGS, ViewName } from '../config/cameraConfig';

/**
 * Hook: useCameraConfig
 * 
 * Returns camera configuration for a specific view.
 * Simple, clean, reusable.
 * 
 * @param viewName - Name of the view ('main' | 'gallery')
 * @returns Camera configuration object
 */
export function useCameraConfig(viewName: ViewName) {
    return CAMERA_CONFIGS[viewName];
}
