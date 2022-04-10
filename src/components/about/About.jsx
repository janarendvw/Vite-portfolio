import React from 'react'
import './about.scss'
import { Canvas } from 'react-three-fiber';
import Cube from '../three/box/Cube';
import Button from '../ux/button/Button'
import Title from '../ux/title/Title';
import {BsFileEarmarkPdfFill} from 'react-icons/bs';
import { ChromaticAberration, Bloom , Glitch, Scanline} from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';
import { KernelSize, GlitchMode, BlendFunction } from 'postprocessing'
export default function About() {
  return (
    <div className='about'>
      <div className='about-picture'><Canvas>
        {/* <EffectComposer multisampling={0} disableNormalPass={true}>
        <Glitch
        delay={[3, 10]}
        duration={[0.6, 1.0]}
        strength={[0.1, 0.3]}
        columns={0}
        mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
        active // toggle on/off
        ratio={0.01}
      />
        </EffectComposer> */}
        <Cube/></Canvas></div>
        <div className='about-content'>
        
        <div className='about-text'>
          <Title content={'About me'}/>
          <p>Hi! my name is <em>Jan Arend van Winsen</em>,
           I am a 21 year old aspiring full-stack developer
            with a big interest in UX/UI design.</p>
            <div>
        <Button invert content='Let&#39;s talk' link={'mailto:janarendvw@gmail.com'}/>
        <Button invert content='Resume &nbsp; ' link={'#'} icon={<BsFileEarmarkPdfFill/>}/>
        </div>
        </div>
        </div>

        </div>
    
  )
}
