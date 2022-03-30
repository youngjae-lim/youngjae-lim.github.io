import React from 'react'
import PostCard from './PostCard'
import SlimPostCard from './SlimPostCard'
import ProjectCard from '../Projects/ProjectCard'
import styled from 'styled-components'

const PostCardList = ({ posts, isSlim }) => {
  return (
    <Wrapper>
      {posts.map(post =>
        post.frontmatter.category !== 'PROJECT' ? (
          !isSlim ? (
            <PostCard key={post.id} {...post} />
          ) : (
            <SlimPostCard key={post.id} {...post} />
          )
        ) : (
          <ProjectCard key={post.id} {...post} />
        )
      )}
    </Wrapper>
  )
}

export default PostCardList

const Wrapper = styled.div`
  > div:last-child {
    margin-bottom: 2rem;
  }
`
