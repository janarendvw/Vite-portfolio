import React from 'react'
import './button.scss'
import variables from '../../../utils/color-schemes.module.scss'
export default function Button(props) {
  function vibrate(){
    navigator.vibrate(20);
  }
  const invertColor = {
    backgroundColor: variables.cta,
    color: variables.primary
  }
  var buttonStyle = {}
  props.invert ? buttonStyle = invertColor : '-'
  return (
    <a href={props.link}><div className='ux-btn' onClick={vibrate} style={buttonStyle}> {props.content} {props.icon}</div></a>
  )
}
Button.defaultProps = {
  
}