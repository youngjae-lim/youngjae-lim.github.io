import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

function renderItems(items, activeId) {
  return (
    <ol>
      {items.map(item => (
        <ToCListStyles key={item.url} item={item} activeId={activeId}>
          <a href={item.url}>{item.title}</a>
          {item.items && renderItems(item.items, activeId)}
        </ToCListStyles>
      ))}
    </ol>
  )
}

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // Remove the first character # from url
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -60% 0%` }
    )

    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      itemIds.forEach(id => {
        const element = document.getElementById(id)
        if (element !== null) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

export default function TableOfContents({ items }) {
  const idList = getIds(items)
  const activeId = useActiveId(idList)

  return (
    <DetailsWrapper>
      <details open>
        <summary>Table of Contents</summary>
        {renderItems(items, activeId)}
      </details>
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.article`
  details {
    position: sticky;
    background: var(--toc-bg-light-1);
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 1rem 1.5rem 1rem 1rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    max-height: calc(100vh - (4rem * 2));
    min-width: 200px;
    overflow: auto;
    top: 8rem;
    color: var(--clr-grey-3);
    font-size: 0.8rem;

    ol {
      list-style: none;
      margin: 0 0 0.5rem 1rem;
      border-left: 1px red dotted;
    }

    > ol {
      > li {
        margin-top: 1rem;
        text-transform: capitalize;
      }
    }

    * > a {
      padding: 0.3rem;
      transition: all 200ms ease-in-out;
    }

    * > a:hover {
      color: var(--clr-toc-hover-link);
      text-decoration: underline;
    }
  }
  @media (max-width: 1170px) {
    display: none;
  }
`

const ToCListStyles = styled.li`
  transition: all 200ms ease;

  & > a {
    color: ${props =>
      props.activeId === props.item.url.slice(1)
        ? 'var(--clr-toc-hover-link)'
        : 'var(--clr-grey-3)'};
    border-left: ${props =>
      props.activeId === props.item.url.slice(1)
        ? '3px solid var(--clr-toc-hover-link)'
        : ''};
    padding-left: ${props =>
      props.activeId === props.item.url.slice(1) ? '3px' : ''};
    text-decoration: ${props =>
      props.activeId === props.item.url.slice(1) ? 'underline' : ''};
  }
`
