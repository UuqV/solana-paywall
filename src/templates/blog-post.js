import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import Image from 'gatsby-image';
import * as colors from '../colors.json';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        style={{
          minHeight: `100%`,
          align: `center`,
        }}
      >
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <article
          style={{
            margin: `10%`,
            marginBottom: `1%`,
          }}
        >
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <small
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </small>
            <Image
              fluid={post.frontmatter.image.childImageSharp.fluid}
              alt={'image'}
              style={{
                marginBottom: 0,
              }}
              imgStyle={{}}
            />
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <div style={{ textAlign: `center` }}>
            <a
              href={post.frontmatter.download.publicURL}
              style={{
                backgroundColor: colors.h1,
                border: `none`,
                color: colors.h2,
                padding: `20px`,
                textAlign: `center`,
                align: `center`,
                textDecoration: `none`,
                display: `inline-block`,
                fontSize: `16px`,
                margin: `5%`,
                cursor: `pointer`,
                borderRadius: `8px`,
              }}
              download
            >
              Download This Mod
            </a>
          </div>
          {` `}
          <hr />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              margin: `2% 10% 2% 10%`,
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
        </nav>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        download {
          publicURL
        }
      }
    }
  }
`;
