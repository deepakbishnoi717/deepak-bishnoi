import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, TorusKnot, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GeometricShape({ position, color, ...props }: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.15;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <TorusKnot ref={mesh} args={[1, 0.3, 128, 16]} position={position} {...props}>
        <MeshDistortMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          distort={0.2}
          speed={2}
        />
      </TorusKnot>
    </Float>
  );
}

function ParticleField({ count = 400 }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#B600A8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ pointerEvents: 'none' as any }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} />
        <GeometricShape position={[-3, 1.5, -2]} color="#B600A8" scale={0.5} />
        <GeometricShape position={[3.5, -1, -3]} color="#7621B0" scale={0.4} />
        <GeometricShape position={[0, 3, -5]} color="#BE4C00" scale={0.35} />
        <GeometricShape position={[-2.5, -2.5, -4]} color="#646973" scale={0.3} />
        <ParticleField count={500} />
      </Canvas>
    </div>
  );
}
