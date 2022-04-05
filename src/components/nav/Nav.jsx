import React from 'react'
import "./nav.scss"
import { FaChevronDown } from 'react-icons/fa'
export default function nav() {

  const screen = {
    xCenter:(window.innerWidth/2),
    yCenter:(window.innerHeight/2)
  }
  {    window.addEventListener('mousemove', (e) => {
         const menuButton = document.querySelector('#menu-btn');
        menuButton.setAttribute('style', 'transform: translate(' 
        + (((screen.xCenter - e.pageX)/90)) + 'px,'
        + (((screen.yCenter - e.pageY)/90)) + 'px);'
        );
      });}

  return (
    <div className='nav'>
      <FaChevronDown fontSize={'24px'} id={'menu-btn'} />
    </div>
  )
}
