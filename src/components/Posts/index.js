import React from 'react'
import PostCardList from './PostCardList'
import Banner from '../Banner'
import Tags from '../Tags'
import Accordion from '../Accordion'
import ToggleViewButton from '../ToggleViewButton'

const Posts = ({ posts, title, count, context }) => {
  // return list of posts
  console.log('context: ', context)

  return (
    <section className='posts'>
      <h3 className='posts-title'>
        {title}
        {count === undefined
          ? ''
          : count === 1
          ? ': 1 post is found'
          : `: ${count} posts are found`}
      </h3>
      <div className='posts-center'>
        {/* posts column */}
        <article>
          <Accordion title={'Tags'}>
            <Tags />
          </Accordion>
          <br />
          <ToggleViewButton context={context} />
          <PostCardList posts={posts} isSlim={context.isSlim} />
        </article>
        {/* banner column on the right side */}
        <article>
          <Banner post={true} />
        </article>
      </div>
    </section>
  )
}

export default Posts
