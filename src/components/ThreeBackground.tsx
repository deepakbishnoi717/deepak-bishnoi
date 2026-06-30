import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const NEON_COLORS = ["#FF00FF", "#00FFFF", "#00FF66", "#FF6600", "#AA00FF"];

function createWingShape(): THREE.Shape {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.quadraticCurveTo(0.5, 0.15, 0.55, 0.5);
  s.quadraticCurveTo(0.5, 0.85, 0.2, 1.0);
  s.quadraticCurveTo(0, 1.0, 0, 0.7);
  s.quadraticCurveTo(-0.05, 0.3, 0, 0);
  return s;
}

const wingGeometry = new THREE.ShapeGeometry(createWingShape());

function Butterfly({ position, color, scale = 1 }: any) {
  const groupRef = useRef<THREE.Group>(null!);
  const leftWing = useRef<THREE.Mesh>(null!);
  const rightWing = useRef<THREE.Mesh>(null!);
  const startX = position[0];
  const startY = position[1];
  const speed = 0.8 + Math.random() * 1.2;
  const radius = 1 + Math.random() * 2;
  const phase = Math.random() * Math.PI * 2;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    const flap = Math.sin(t * 4) * 0.6;
    leftWing.current.rotation.z = flap;
    rightWing.current.rotation.z = -flap;

    if (groupRef.current) {
      groupRef.current.position.x = startX + Math.sin(t * 0.5 + phase) * radius;
      groupRef.current.position.y = startY + Math.cos(t * 0.7 + phase) * radius * 0.5;
    }
  });

  const mat = useMemo(
    () => ({
      color,
      emissive: color,
      emissiveIntensity: 0.8,
      metalness: 0.1,
      roughness: 0.3,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    }),
    [color]
  );

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <group position={[0, -0.3, 0]}>
        <mesh ref={leftWing} geometry={wingGeometry} rotation={[0, 0, 0.3]}>
          <meshStandardMaterial {...mat} />
        </mesh>
        <mesh ref={rightWing} geometry={wingGeometry} rotation={[0, 0, -0.3]} scale={[-1, 1, 1]}>
          <meshStandardMaterial {...mat} />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.02, 0.04, 0.25, 6]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      </group>
    </group>
  );
}

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
      <mesh ref={mesh} position={position} {...props}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ count = 400 }: { count?: number }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = new THREE.Color(NEON_COLORS[i % NEON_COLORS.length]);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { pos, colors };
  }, [count]);

  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
      const p = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        p[i * 3 + 1] += Math.sin(clock.getElapsedTime() * 0.3 + i) * 0.0005;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.pos}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={positions.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const butterflyData = [
  { position: [-2.5, 1.2, -1.5], color: NEON_COLORS[0], scale: 0.35 },
  { position: [3, -0.5, -2], color: NEON_COLORS[1], scale: 0.3 },
  { position: [-1, -2, -3], color: NEON_COLORS[2], scale: 0.4 },
  { position: [2.5, 2, -4], color: NEON_COLORS[3], scale: 0.25 },
  { position: [-3.5, -1.5, -2.5], color: NEON_COLORS[4], scale: 0.3 },
  { position: [0.5, 3, -5], color: NEON_COLORS[0], scale: 0.2 },
  { position: [-2, -3, -3.5], color: NEON_COLORS[1], scale: 0.35 },
  { position: [4, 1, -3], color: NEON_COLORS[2], scale: 0.25 },
];

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ background: "#000" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ pointerEvents: "none" as any, background: "#000" }}
        gl={{ antialias: true, alpha: false }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <directionalLight position={[-5, -5, -5]} intensity={0.15} />
        <color attach="background" args={["#000"]} />

        <GeometricShape position={[-3, 1.5, -2]} color="#B600A8" scale={0.5} />
        <GeometricShape position={[3.5, -1, -3]} color="#7621B0" scale={0.4} />
        <GeometricShape position={[0, 3, -5]} color="#BE4C00" scale={0.35} />
        <GeometricShape position={[-2.5, -2.5, -4]} color="#646973" scale={0.3} />

        {butterflyData.map((b, i) => (
          <Butterfly key={i} {...b} />
        ))}

        <ParticleField count={600} />
      </Canvas>
    </div>
  );
}
