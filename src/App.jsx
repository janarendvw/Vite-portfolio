import "./app.scss";
import Box from "./components/three/box/Box";
import { Html, useProgress} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cursor from "./components/cursor/Cursor";
import Welcome from "./components/welcome/Welcome";
import Socials from "./components/socials/Socials";
import Scroll from "./components/scroll_indicator/Scroll";
import About from "./components/about/About";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom
} from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'
import Section from "./components/ux/section/Section";
import { Suspense } from "react";
import BottomBar from "./components/ux/bottom_bar/BottomBar";
import ProgressBar from "./components/ux/progress_bar/ProgressBar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
export default function App() {
  return (
    <>
    <BottomBar/>
    <Scroll/>
<Welcome/>
<Socials/>
      <Canvas className="canvas"
      > 

            <Suspense fallback={<Loader/>}>
          <EffectComposer multisampling={0} disableNormalPass={true} >

      </EffectComposer>
      <Box />
      
      <OrbitControls enabled={false}/>
        </Suspense>
      </Canvas>
      <Section content={<About/>}/>
      <Section content={<Skills/>}/>
      <Section content={<Projects/>}/>
    </>
  );
}
