import React from 'react'
import './progressbar.scss'
import { useInView } from 'react-intersection-observer'
import { SiVisualstudiocode } from 'react-icons/si'
import variables from '../../../utils/color-schemes.module.scss'
const defaultIcon = <SiVisualstudiocode/>
export default function ProgressBar(props) {
    const barStyle = {
        width: props.percent + '%',
        backgroundColor: props.color
    }
  return (
    <div className='progress-bar'>
        <div className='icon'  style={{color: barStyle.backgroundColor}}>{props.icon}</div>
        <div className='content'>
            <div className='progress-title'  style={{color: barStyle.backgroundColor}}>
                {props.name}
            </div>
            <div className='bar'>
                <div className='bar-filled' style={barStyle}></div>
            </div>

        </div>
        
        </div>
  )
}
ProgressBar.defaultProps = {
    icon: defaultIcon,
    percent: 49,
    name: 'placeholder',
    color: variables.secondary
}