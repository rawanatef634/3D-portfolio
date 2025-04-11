import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';

const Sky = ({ isRotating }) => {
  const skyRef = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (skyRef.current) {
      // Constant rotation applied every frame
      skyRef.current.rotation.y += 0.002; // Slow constant rotation

      // Additional rotation when isRotating is true
      if (isRotating) {
        skyRef.current.rotation.y += 0.25 * delta; // Original interactive rotation
      }
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;