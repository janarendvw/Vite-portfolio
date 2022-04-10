import React from 'react'
import { SiIcomoon } from 'react-icons/si'
import './modeswitch.scss'
export default function ModeSwitch() {
function switchMode(){

}
  return (
    <div onClick={switchMode()} className={'mode-switcher'}><SiIcomoon/></div>
  )
}
