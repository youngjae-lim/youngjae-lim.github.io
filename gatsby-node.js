const path = require('path')

async function turnProjectsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const projectTemplate = path.resolve(`./src/templates/project-template.js`)

  // 2. Query all posts
  const result = await graphql(`
    query GetAllSlugs {
      allMdx(filter: { frontmatter: { category: { eq: "PROJECT" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  // 3. Loop over each page and create it
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    actions.createPage({
      path: `/projects/${slug}`,
      component: projectTemplate,
      context: {
        slug,
      },
    })
  })
}

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const postTemplate = path.resolve(`./src/templates/post-template.js`)

  // 2. Query all posts
  const result = await graphql(`
    query GetAllSlugs {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  // 3. Loop over each page and create it
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    actions.createPage({
      path: `/posts/${slug}`,
      component: postTemplate,
      context: {
        slug,
      },
    })
  })
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  // 1. Get a template for the category page
  const categoryTemplate = path.resolve(`./src/templates/category-template.js`)

  // 2. Query all distinct category
  const result = await graphql(`
    query GetDistinctCategory {
      allMdx {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  // 3. Loop over each page and create it
  result.data.allMdx.group.forEach(category => {
    actions.createPage({
      path: `/posts/category/${category.fieldValue}`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
        count: category.totalCount,
      },
    })
  })
}

exports.createPages = async params => {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnProjectsIntoPages(params),
    turnPostsIntoPages(params),
    turnCategoriesIntoPages(params),
  ])
}
