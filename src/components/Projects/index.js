import React from 'react'
import Project from './Project'
import Banner from '../Banner'

const Projects = ({ projects, title }) => {
  return (
    <section className='posts'>
      <h3 className='posts-title'>{title}</h3>
      <div className='posts-center'>
        {/* posts column */}
        <article>
          {projects.map(project => (
            <Project key={project.id} {...project} />
          ))}
        </article>
        {/* banner column on the right side */}
        <article>
          <Banner post={true} />
        </article>
      </div>
    </section>
  )
}

export default Projects
