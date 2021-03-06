import React from 'react'
import ProgressBar from '../ux/progress_bar/ProgressBar'
import variables from '../../utils/color-schemes.module.scss'
import Title from '../ux/title/Title'
import Cube from '../three/box/Cube'
import './skills.scss'
import {GrReactjs } from 'react-icons/gr';
import { SiAdobelightroom, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator, SiNodedotjs, SiSass, SiHtml5, SiThreedotjs, SiPython, SiPhp, SiJavascript, SiMysql} from 'react-icons/si';
import { Canvas } from 'react-three-fiber'
var icon_1 = <SiHtml5/>;
var icon_2 = <GrReactjs/>;
var icon_3 = <SiThreedotjs/>;
var icon_4 = <SiPython/>;
var icon_5 = <SiSass/>;
var icon_6 = <SiPhp/>;
var icon_7 = <SiJavascript/>
var icon_8 = <SiMysql/>
var icon_9 = <SiNodedotjs/>
var o_icon_1 = <SiAdobeillustrator/>
var o_icon_2 = <SiAdobeaftereffects/>
var o_icon_3 = <SiAdobephotoshop/>
var o_icon4 = <SiAdobelightroom/>
const prgmLanguages = [
    {
        id: 1,
        icon: icon_1,
        skill: 'HTML',
        progress: 95
    },
    {
        id: 2,
        icon: icon_2,
        skill: 'React.js',
        progress: 50
    },
    {
        id: 3,
        icon: icon_3,
        skill: 'Three.js',
        progress: 20
    },
    {
        id: 4,
        icon: icon_4,
        skill: 'Python',
        progress: 80
    },
    {
        id: 5,
        icon: icon_5,
        skill: 'SASS',
        progress: 95
    },
    {
        id: 6,
        icon: icon_6,
        skill: 'PHP',
        progress: 75
    },
    {
        id: 7,
        icon: icon_7,
        skill: 'JavaScript',
        progress: 55
    },
    {
        id: 8,
        icon: icon_8,
        skill: 'MySQLi',
        progress: 79
    },
    {
        id: 9,
        icon: icon_9,
        skill: 'Node.js',
        progress: 27
    }
]
const other = [
    {
        id: 1,
        icon: o_icon_1,
        skill: 'Illustrator',
        progress: 86
    },
    {
        id: 2,
        icon: o_icon_2,
        skill: 'After Effects',
        progress: 54
    },
    {
        id: 3,
        icon: o_icon_3,
        skill: 'Photoshop',
        progress: 27
    },
    {
        id: 4,
        icon: o_icon4,
        skill: 'Lightroom',
        progress: 74
    }
]
export default function Skills() {
  return (
    <div className='skills'>
        <div className='skills-content'>
        <div className='skills-text'>
            <Title content={'Skills'}/>
            <p>Recently I have been working mainly within the&nbsp;
                 <em className='tooltip'> MERN
                 <span className='tooltiptext'>
                     <code>MySQLi  Express.js  React.js  Node.js</code>
                </span>
                </em> stack, using three.js to give websites
                 that icing on the cake.
                  My python and machine 
                  learning knowledge mainly
                   come from udemy courses, 
                   and I have made an online book store for my 
                   dad using <em>SQLi</em>, <em>HTML</em> and 
                   <em> PHP</em>, which is displayed under the 
                   <a href='#projects'><em style={{color: variables.cta}}> Projects</em></a> tab.  </p>
                    
        </div>
        <div className='skills-img'>
            <Canvas>
            <Cube/>
            </Canvas></div></div>
        <div className='skill-type'>Programming languages</div>
        <div className='skills-progress'>
            
{
    prgmLanguages.map(({id, icon, skill, progress}) =>{
        // var randomColor = Math.floor(Math.random()*16777215).toString(16);
        // var randomColor = 'hsl('+(260 + Math.floor(Math.random()*30)) + ', 100%, 50%)' ;
        return(
            <ProgressBar key={id} name={skill} percent={progress} icon={icon}/>
        );
    })
}
            </div>
            <div className='skill-type'>Other skills</div>
            <div className='skills-progress'>
            {
    other.map(({id, icon, skill, progress}) =>{
        // var randomColor = Math.floor(Math.random()*16777215).toString(16);
        // var randomColor = 'hsl('+(260 + Math.floor(Math.random()*30)) + ', 100%, 50%)' ;
        return(
            <ProgressBar key={id} name={skill} percent={progress} icon={icon}/>
        );
    })
}
            </div>
    </div>
  )
}
