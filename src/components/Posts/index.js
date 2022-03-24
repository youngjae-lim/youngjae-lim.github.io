import React from 'react'
import PostCard from './PostCard'
import ProjectCard from '../Projects/ProjectCard'
import Banner from '../Banner'
import Tags from '../Tags'

const Posts = ({ posts, title, count }) => {
  // return list of posts

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
          <Tags />
          <br />
          {posts.map(post =>
            post.frontmatter.category !== 'PROJECT' ? (
              <PostCard key={post.id} {...post} />
            ) : (
              <ProjectCard key={post.id} {...post} />
            )
          )}
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
