import React from 'react';
import './scroll.scss';
import { FaChevronUp } from 'react-icons/fa'
export default function Scroll() {

    window.onscroll = function() {myFunction()};
    function myFunction(){
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        const sI =  document.querySelector(".mouse-scroll");
        if(scrolled > 0){
            document.querySelector(".slider").style.display = 'none';
             document.querySelector(".up-arrow").style.display = 'block';
            sI.style.height = '2.1em';
            sI.style.width = '4em';
            sI.style.pointerEvents= "unset";
            sI.style.bottom = "-45px";
        }
        else{
            document.querySelector(".slider").style.display = 'block';
            sI.style.height = '4em';
            document.querySelector(".up-arrow").style.display = 'none';
            sI.style.width = '2.1em';
            sI.style.pointerEvents= "none";
            sI.style.bottom = "20px";
            // sI.setAttribute('style', 'transform: translate(-50%, -50px);');
           
        }
        // document.querySelector(".mouse-scroll").innerHTML = scrolled;
    }
    function topFunction() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  return (
    <button className={'mouse-scroll'} onClick={topFunction} ><div className={'slider'}></div><FaChevronUp className='up-arrow'/></button>
  )
}
