import React from 'react'
import './button.scss'
export default function Button(props) {
  return (
    <div className='ux-btn'> {props.content} {props.icon}</div>
  )
}
