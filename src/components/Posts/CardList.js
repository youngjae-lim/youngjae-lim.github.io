import React from 'react'
import Card from './Card'
import SlimCard from './SlimCard'
import styled from 'styled-components'

const CardList = ({ posts, isSlim }) => {
  return (
    <Wrapper>
      {posts.map(post =>
        !isSlim ? (
          <Card key={post.id} {...post} />
        ) : (
          <SlimCard key={post.id} {...post} />
        )
      )}
    </Wrapper>
  )
}

export default CardList

const Wrapper = styled.div`
  > div:last-child {
    margin-bottom: 2rem;
  }
`
