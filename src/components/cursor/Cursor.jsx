import React from 'react';
import "./cursor.scss";
export default function Cursor() {
  const cursor = document.querySelector('#cursor');
  const tail = document.querySelector('#tail');
  const link = document.getElementsByTagName('a');
    {    window.addEventListener('mousemove', (e) => {

        cursor.setAttribute("style", "visibility: visible; pointer-events: none; top: " + (e.pageY - window.pageYOffset) + "px;left: " + (e.pageX) + "px;");
        tail.setAttribute("style", "visibility: visible; pointer-events: none; top: " + (e.pageY - window.pageYOffset) + "px;left: " + (e.pageX) + "px;");
    });}
  
  return (
      <><div id='cursor'></div> 
        <div id='tail'></div></>
    
  )
}
