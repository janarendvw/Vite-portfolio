import React from 'react'
import Title from '../ux/title/Title'
import './projects.scss'
import Project from './Project'
const projectList = [
  {
    id: 1,
    title: 'Metis green',
    img: 'proj_1',
    url: 'https://metis-green.nl/#home'
  }
]
export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects-text'>
        <Title content={'Projects'}/>
        <p>Lorem ipsum, dolornt sit fuga ex saepe tm voluptatem suscipit, illum omnis consectetur non impedit dolor et nulla ipsum beatae corporis vero temporibus porro repellat deserunt vitae. Dolor voluptatibus, sint dolore necessitatibus eius in error earum ratione veniam quam reprehenderit sit omnis consequatur nobis illum vel doloribus, saepe maiores cum voluptate! Reprehenderit iste laborum adipisci, a, deserunt dignissimos vel cupiditate totam ab ullam, repellendus necessitatibus asperiores.</p>
        </div>
      <div className='projects-container'>
{
  projectList.map(({id, title, img, url}) =>{
    return(
      <Project key={id} title={title} image={img} url={url}/>
    )
  })
}

      </div>

    </div>
    
    
    
    
    
    
    
  )
}
