import React from 'react'
import './section.scss'
export default function Section(props) {
  return (
    <div className='section' id={props.id}>{props.content}</div>
  )
}
