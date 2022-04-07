import React from 'react'
import {BsLinkedin, BsPersonCircle} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

import './socials.scss'


function Socials() {
  return (
    <div className='socials'>
        
        <a href='https://github.com'><FaGithub/></a>
        <a href='#about'><BsPersonCircle/></a>
        <a href='https://www.linkedin.com/in/jan-van-winsen-4201a1157' target={'_blank'}><BsLinkedin/></a>
       
        </div>
  )
}

export default Socials