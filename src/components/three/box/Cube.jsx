import { MeshDistortMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";
import { angleToRadians } from "../../../utils/angle";
import * as THREE from "three";
import variables from '../../../utils/color-schemes.module.scss';
export default function Cube(){

    return (
        <>
         <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={90} />
           
        <OrbitControls autoRotate />
        <mesh position={[0,0,0]} rotation={[0,0,0]}>
            <sphereBufferGeometry attach={'geometry'} args={[4,20,20]} />
            <MeshDistortMaterial
            wireframeLinecap wireframeLinejoin 
            attach="material" 
            wireframe
            distort={0.46}
            color={variables.pLight}/>
        </mesh>
        <mesh position={[0,0,0]}>
        <ambientLight color={variables.secondary} intensity={1} />
        </mesh>
        </>
    )
} 