import { View, OrbitControls } from '@react-three/drei';

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
                zIndex: 2000, // Ensure it's on top
                overflow: 'hidden' // Ensure content stays within rounded corners
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: '100%',
                }}
                frames={1} // Optimize: view doesn't move
            >
                {/* 3D content inside the gallery view */}
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

                {/* Independent camera controls just for this view */}
                <OrbitControls
                    enablePan={false}
                    minDistance={3}
                    maxDistance={10}
                    makeDefault // This view has its own camera controls
                />
            </View>

            {/* HTML Close Button (overlays on top of 3D) */}
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