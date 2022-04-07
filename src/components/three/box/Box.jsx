import { MeshDistortMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";
import { angleToRadians } from "../../../utils/angle";
import * as THREE from "three";
import variables from '../../../utils/color-schemes.module.scss';
export default function Box(){
    const orbitControlsRef = useRef(null);
    useFrame((state) => {
        if (orbitControlsRef.current) {
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y+ 1.5) * angleToRadians(90 - 30));
            orbitControlsRef.current.update();
        }

    })
const q = window.innerWidth;
const canvas = document.querySelector('.canvas');
var deviceAngle = 0;
if(window.matchMedia("(pointer: coarse)").matches) {
    canvas.setAttribute('style', 'pointer-events: none;');
    deviceAngle = 50;
}
else{
    deviceAngle = 160;

}
    return (
        <>
         <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={90} />
              <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(20)} maxPolarAngle={angleToRadians(deviceAngle)} enableDamping enabled={false}/>

           
        {/* <OrbitControls /> */}
        <mesh position={[0,0,0]} rotation={[0,0,0]}>
            <torusBufferGeometry attach={'geometry'} args={[5,2,70,100]} />
            <MeshDistortMaterial
            wireframeLinecap wireframeLinejoin 
            attach="material" 
            wireframe
            speed={0.4}
            distort={0.46}
            color={variables.pLight}/>
        </mesh>
        <fog attach="fog" color={variables.secondary} near={5} far={7.5} position={[0,0,0]}/>
        <mesh position={[0,0,0]}>
        <pointLight color={variables.cta} intensity={0.3} position={[0,0,1]} />
        <ambientLight color={variables.secondary} intensity={0.5} />
        </mesh>
        </>
    )
} 