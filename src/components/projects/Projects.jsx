import React from 'react'
import Title from '../ux/title/Title'
import './projects.scss'
import Project from './Project'

import { SiGithub, SiWordpress, SiReact, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator, SiNodedotjs, SiSass, SiHtml5, SiThreedotjs, SiPython, SiPhp, SiJavascript, SiMysql} from 'react-icons/si';
import Button from '../ux/button/Button';
const t = {
  react: <SiReact/>,
  nodejs: <SiNodedotjs/>,
  wordpress: <SiWordpress/>,
  html: <SiHtml5/>,
  threejs: <SiThreedotjs/>,
  sass: <SiSass/>,
  php: <SiPhp/>,
  pSourceCode: <Button content={<SiGithub/>} link={'https://github.com/PluginDev-A/Vite-portfolio'}/>
}
const projectList = [
  {
    id: 1,
    title: 'Metis green',
    img: 'url(\'/src/components/projects/metis-green.png\')',
    url: 'https://metis-green.nl/#home',
    tech: [t.wordpress, t.html, t.php]
  },
  {
    id:2,
    title: 'Portfolio Website',
    img: 'url(\'/src/components/projects/portfolio.png\')',
    url: '#',
    tech: [t.pSourceCode,t.react, t.nodejs, t.threejs, t.sass]
  },
    {
    id:3,
    title: 'Atlas Sales Agency',
    img: 'url(\'/src/components/projects/atlas.png\')',
    url: 'https://atlas-sales-agency.nl',
    tech: [t.wordpress, t.php, t.html]
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
  projectList.map(({id, title, img, url, tech}) =>{
    return(
      <Project key={id} title={title} image={img} url={url} tech={tech}/>
    )
  })
}

      </div>

    </div>
    
    
    
    
    
    
    
  )
}
