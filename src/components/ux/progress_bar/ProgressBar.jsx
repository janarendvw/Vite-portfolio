import React from 'react'
import './progressbar.scss'
export default function ProgressBar(props) {
  return (
    <div className='progress-bar'>
        <div className='icon'></div>
        <div className='content'>
            <div className='progress-title'>
                {props.name}
            </div>
            <div className='bar'>
                <div className='bar-filled' style={{width: props.percent}}></div>
            </div>

        </div>
        
        </div>
  )
}
