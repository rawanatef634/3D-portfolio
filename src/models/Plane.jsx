import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  // Add constant rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Constant rotation, faster than island
    }
  });

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [isRotating, actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;