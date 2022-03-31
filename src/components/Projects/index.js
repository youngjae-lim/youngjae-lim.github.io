import React from 'react'
import Banner from '../Banner'
import ToggleViewButton from '../ToggleViewButton'
import CardList from '../Posts/CardList'

const Projects = ({ projects, title, context }) => {
  return (
    <section className='posts'>
      <h3 className='posts-title'>{title}</h3>
      <div className='posts-center'>
        {/* posts column */}
        <article>
          <ToggleViewButton />
          <CardList posts={projects} isSlim={context.isSlim} />
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
