import React from 'react'
import './project.scss'
import Button from '../ux/button/Button'
export default function Project(props) {

  return (
    <div className='project'>
        <div className='project-title'> {props.title}</div>
        <div className='project-img'><div className='project-btn'> <Button invert content={'visit'} link={props.url}/></div></div>
        
       
    </div>
  )
}
