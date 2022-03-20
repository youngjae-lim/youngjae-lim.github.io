import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function Seo({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            # defaultImage: image
          }
        }
      }
    `
  )

  // console.log(metaImage.childImageSharp.gatsbyImageData)
  // console.log(metaImage.childImageSharp.gatsbyImageData.width)
  // console.log(metaImage.childImageSharp.gatsbyImageData.height)
  // console.log(metaImage.childImageSharp.gatsbyImageData.images.fallback.src)

  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.childImageSharp.gatsbyImageData.images.fallback.src
      ? `${site.siteMetadata.siteUrl}${metaImage.childImageSharp.gatsbyImageData.images.fallback.src}`
      : null

  // console.log(image)

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // {
        //   name: 'keywords',
        //   content: site.siteMetadata.keywords.join(','),
        // },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  property: 'og:image:width',
                  content: metaImage.childImageSharp.gatsbyImageData.width,
                },
                {
                  property: 'og:image:height',
                  content: metaImage.childImageSharp.gatsbyImageData.height,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ]
        )
        .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  pathname: PropTypes.string,
}

export default Seo
