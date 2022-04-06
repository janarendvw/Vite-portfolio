import React from 'react'
import './title.scss';
export default function Title(props) {
    const titleSize = {
        fontSize: (props.size*10) + 'px'
    };
  return (
    <div className='title' style={titleSize} >{props.content}</div>
  )
}
