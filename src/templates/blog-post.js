import React from "react"
import { Link, graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { Global, css } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const titleStyle = css`
        text-align: center;
    `
    const preHighlight = css`
        pre {
            background: #004D40;
            padding: 4px 16px;
            width: 100%;
        }
        img.gatsby-resp-image-image {
            box-shadow: 5px 5px 10px #000000aa!important;
        }
    `

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Global styles={preHighlight} />
        <div css={titleStyle}>
            <h1>{post.frontmatter.title}</h1>
            <span
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(-1),
              }}
            >
              <p>
                {post.frontmatter.date}
                {` `}
                Cat: {post.frontmatter.cat || '✘'}
                {` `}
                Tags: {post.frontmatter.tags? post.frontmatter.tags.join(', ') : '✘'}
              </p>
            </span>
        </div>
        <MDXRenderer>{post.code.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      code {
        body
      }
      frontmatter {
        title
        cat
        tags
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
