import React from 'react';
import './scroll.scss';
import { FaChevronUp } from 'react-icons/fa'
import variables from '../../utils/color-schemes.module.scss'
export default function Scroll() {


var sImargin;
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (isIOS) {
  sImargin = '-25px';
} else {
  sImargin = '-45px';
}

    window.onscroll = function() {myFunction()};
    function myFunction(){
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        const sI =  document.querySelector(".mouse-scroll");
        if(scrolled > 5){
            document.querySelector(".slider").style.display = 'none';
             document.querySelector(".up-arrow").style.display = 'block';
            sI.style.height = '2.1em';
            sI.style.width = '4em';
            sI.style.pointerEvents= "unset";
            sI.style.bottom = sImargin;
            sI.style.borderRadius= '2px';
            sI.style.backgroundColor= variables.cta;
            sI.style.color= variables.primary;
        }
        else{
            document.querySelector(".slider").style.display = 'block';
            sI.style.height = '4em';
            document.querySelector(".up-arrow").style.display = 'none';
            sI.style.width = '2.1em';
            sI.style.pointerEvents= "none";
            sI.style.bottom = "20px";
            sI.style.borderRadius= '30px';
            sI.style.backgroundColor= variables.primary; // sI.setAttribute('style', 'transform: translate(-50%, -50px);');
            sI.style.color= variables.cta;
        }
        // document.querySelector(".mouse-scroll").innerHTML = scrolled;
    }
    function topFunction() {
      navigator.vibrate(20);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    
  return (
    <button className={'mouse-scroll'} onClick={topFunction} ><div className={'slider'}></div><FaChevronUp className='up-arrow'/></button>
  )
}
