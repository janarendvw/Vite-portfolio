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
  sql: <SiMysql/>,
  php: <SiPhp/>,
  js: <SiJavascript/>,
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
    },
    {
      id:4,
      title: 'Universalis',
      img: 'url(\'/src/components/projects/universalis.png\')',
      url: 'https://universalisboeken.nl',
      tech: [t.html, t.php, t.sql, t.js]
    }
]
export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects-text'>
        <Title content={'Projects'}/>
        <p>I have mostly made front-end applications, like the websites listed below.
          My first big project was an online book store for my dad, made with only <em>HTML</em>, <em>CSS</em>, <em>SQL</em>, and a little <em>JavaScript</em>.
          Because there are over 2000 books in the database, I have done my fair share of research into <em>NLP</em> and data-optimalisation. However, the styling was made 2 years ago with little 
           knowledge of <em>CSS</em>, making the website look a bit dated.
        </p>
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
