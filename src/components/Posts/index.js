import React from 'react'
import Post from './Post'
import Banner from '../Banner'

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
          {posts.map(post => (
            <Post key={post.id} {...post} />
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

export default Posts
