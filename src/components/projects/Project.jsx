import React from 'react'
import './project.scss'
import Button from '../ux/button/Button'

export default function Project(props) {

const projectTechnologies = props.tech;
const projectImage = {
  background: props.image,
  backgroundSize:  'cover',
  backgroundPosition: 'center'
}
console.log(props.image);
  return (
    <div className='project'>
        <div className='project-title'> {props.title}</div>
        <div className='shadow'>
        <div className='project-img' style={projectImage}></div>
        <div className='project-bar'>
        <div className='project-btn'> <Button invert content={'visit'} link={props.url}/> </div>
        <div className='project-technology'>{projectTechnologies}</div>
        </div>
        </div>
       
    </div>
  )
}
