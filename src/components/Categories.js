import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const Categories = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const {
    allMdx: { group: categories },
  } = data

  return (
    <ul className='categories'>
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <Link
              to={`/posts/category/${category.fieldValue}`}
              className='category'
            >
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
