import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import Image from 'gatsby-image';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle} post={posts[0].node}>
        <Hero />
        <div
          style={{
            display: `flex`,
            flexFlow: `row wrap`,
          }}
        >
          <SEO title="UuqV - All Mods" />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div
                key={node.fields.slug}
                style={{
                  display: `flex`,
                  flex: `1 0 50%`,
                  justifyContent: `center`,
                }}
              >
                <a
                  href={node.fields.slug}
                  style={{
                    all: `inherit`,
                    cursor: `pointer`,
                    margin: `1em`,
                    marginBottom: `0`,
                    maxWidth: `800px`,
                  }}
                  key={node.fields.slug}
                >
                  <article>
                    <header>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <Image
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                        alt={'image'}
                        style={{
                          marginBottom: 0,
                          minWidth: `300px`,
                          minHeight: `50vh`,
                        }}
                        imgStyle={{}}
                      />
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.excerpt,
                        }}
                      />
                    </section>
                  </article>
                </a>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 33)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(quality: 100, maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
