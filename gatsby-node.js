const path = require('path')

async function turnProjectsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const projectTemplate = path.resolve(`./src/templates/project-template.js`)

  // 2. Query all projects
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

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your projects`,
      result.errors
    )
    return
  }

  const projects = result.data.allMdx.nodes

  // 3. Loop over each page and create it
  if (projects.length > 0) {
    projects.forEach(({ frontmatter: { slug } }) => {
      actions.createPage({
        path: `/projects/${slug}`,
        component: projectTemplate,
        context: {
          slug,
        },
      })
    })
  }
}

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const postTemplate = path.resolve(`./src/templates/post-template.js`)

  // 2. Query all posts (note that posts don't include projects)
  const result = await graphql(`
    query GetAllSlugs {
      allMdx(
        filter: { frontmatter: { category: { ne: "PROJECT" } } }
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // 3. Loop over each page and create it
  if (posts.length > 0) {
    posts.forEach(({ frontmatter: { slug } }, index) => {
      // Get previous post, if any
      const previousPost = index === 0 ? null : posts[index - 1]
      // Get next post, if any
      const nextPost = index === posts.length - 1 ? null : posts[index + 1]

      actions.createPage({
        path: `/posts/${slug}`,
        component: postTemplate,
        context: {
          slug,
          previousPost,
          nextPost,
        },
      })
    })
  }
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  // 1. Get a template for the category page
  const categoryTemplate = path.resolve(`./src/templates/category-template.js`)

  // 2. Query all distinct category from all posts excluding projects
  const result = await graphql(`
    query GetDistinctCategory {
      allMdx(filter: { frontmatter: { category: { ne: "PROJECT" } } }) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your categories`,
      result.errors
    )
    return
  }

  const categories = result.data.allMdx.group

  // 3. Loop over each page and create it
  if (categories.length > 0) {
    categories.forEach(category => {
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
}

async function turnTagsIntoPages({ graphql, actions }) {
  // 1. Get a template for the tag page
  const tagTemplate = path.resolve(`./src/templates/tag-template.js`)

  // 2. Query all distinct tag
  const result = await graphql(`
    query GetDistinctTag {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your tags`, result.errors)
    return
  }

  const tags = result.data.allMdx.group

  // 3. Loop over each page and create it
  if (tags.length > 0) {
    tags.forEach(tag => {
      actions.createPage({
        path: `/tags/${tag.fieldValue}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
          count: tag.totalCount,
        },
      })
    })
  }
}

exports.createPages = async params => {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnProjectsIntoPages(params),
    turnPostsIntoPages(params),
    turnCategoriesIntoPages(params),
    turnTagsIntoPages(params),
  ])
}
