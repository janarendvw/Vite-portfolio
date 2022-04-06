import React from 'react'
import './about.scss'
import Button from '../ux/button/Button'
import Title from '../ux/title/Title';
import {BsFileEarmarkPdfFill} from 'react-icons/bs';
export default function About() {
  return (
    <div className='about'>
      <div className='about-picture'></div>
        <div className='about-content'>
        
        <div className='about-text'>
          <Title content={'About me'}/>
          <p>Hi! my name is <em>Jan Arend van Winsen</em>,
           I am a 21 year old aspiring full-stack developer
            with a big interest in UX/UI design.</p>
            <div>
        <Button content='Let&#39;s talk' link={'mailto:janarendvw@gmail.com'}/>
        <Button content='Resume &nbsp; ' link={'#'} icon={<BsFileEarmarkPdfFill/>}/>
        </div>
        </div>
        </div>

        </div>
    
  )
}
