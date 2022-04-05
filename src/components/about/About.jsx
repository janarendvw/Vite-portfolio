import React from 'react'
import './about.scss'
import Button from '../ux/button/Button'
import {BsFileEarmarkPdfFill} from 'react-icons/bs';
export default function About() {
  return (
    <div className='about'>
        <div className='about-content'>
        <div className='about-picture'></div>
        <div className='about-text'>
          <h1 className='title'>About me</h1>
          <p>Hi! my name is <em>Jan Arend van Winsen</em>,
           I am a 21 year old aspiring full-stack developer
            with a big interest in UX/UI design.</p>
            <div>
        <Button content='let&#39;s talk'/>
        <Button content='resume &nbsp; ' icon={<BsFileEarmarkPdfFill/>}/>
        </div>
        </div>
        </div>

        </div>
    
  )
}
