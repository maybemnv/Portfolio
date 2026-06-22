'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 60;
const RANGE = 4;
const CONNECT_DIST = 1.8;

function Particles() {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, connections } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * RANGE * 2;
      const y = (Math.random() - 0.5) * RANGE * 2;
      const z = (Math.random() - 0.5) * RANGE;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));
    }

    const lineVerts: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < CONNECT_DIST) {
          lineVerts.push(pts[i].x, pts[i].y, pts[i].z);
          lineVerts.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return { positions: pos, connections: new Float32Array(lineVerts) };
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        </bufferGeometry>
        <pointsMaterial color="#60a5fa" size={0.06} sizeAttenuation transparent opacity={0.9} />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute args={[connections, 3]} attach="attributes-position" />
        </bufferGeometry>
        <lineBasicMaterial color="#60a5fa" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

export default function NeuralCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
