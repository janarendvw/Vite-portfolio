import React from 'react'
import ProgressBar from '../ux/progress_bar/ProgressBar'
import Title from '../ux/title/Title'
import './skills.scss'
export default function Skills() {
  return (
    <div className='skills'>
        <div className='skills-text'>
            <Title content={'Skills'}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maxime dignissimos consequuntur accusamus, quis nihil! Atque dolor fuga perferendis commodi reiciendis at est pariatur rem recusandae ipsam officia itaque aliquam, veniam dolore sed deleniti consectetur aut voluptates eius, repellendus nisi et beatae inventore. Nostrum temporibus quidem eligendi dolorem animi reprehenderit suscipit qui, blanditiis fugit quaerat error reiciendis quo obcaecati tempore ipsa illo sint magnam facere numquam unde facilis laboriosam porro aliquid. Velit hic quia, nisi aliquid qui autem sapiente at nemo ad voluptatibus ipsum quasi. Rerum soluta explicabo cumque unde nisi, praesentium deserunt illo repellendus alias facilis natus voluptatum reprehenderit.</p>
        </div>
        <div className='skills-progress'>
            <ProgressBar/>
            <ProgressBar/>
            <ProgressBar/>
            <ProgressBar/>
            <ProgressBar/>
            <ProgressBar name={'HTML'} percent={'90%'}/>
            </div>
    </div>
  )
}
