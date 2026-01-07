import { View } from '@react-three/drei';
import { GalleryScene } from './GalleryScene';

// Props for the Postres gallery view
interface PostresProps {
    onClose: () => void;
}

function Postres({ onClose }: PostresProps) {
    return (
        <div
            style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '80%',
                height: '80%',
                background: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '16px',
                border: '2px solid white',
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                zIndex: 2000,
                overflow: 'hidden'
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                {/* 3D content with camera hooks - safely inside Canvas via View */}
                <GalleryScene />
            </View>

            {/* HTML Close Button */}
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '25px',
                    padding: '10px 20px',
                    background: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    zIndex: 2001,
                }}
            >
                ✕ Close
            </button>
        </div>
    );
}

export default Postres;