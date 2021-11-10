/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import colors from '../colors';
import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1600) {
            src
            srcSet
            originalImg
            originalName
            aspectRatio
            sizes
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        boxShadow: `0px 0px 20px 0px`,
      }}
    >
      <Image
        fluid={data.avatar.childImageSharp.fluid}
        alt={author}
        style={{
          marginBottom: 0,
          flex: `1 1 40vw`,
        }}
      />
      <div
        style={{
          display: `flex`,
          flex: `1 1 60vw`,
          flexDirection: `column`,
          justifyContent: `space-around`,
          padding: `1em`,
          color: colors.h2,
          textAlign: `right`,
        }}
      >
        <h3>
          I'm a software Engineer from NYC.
          {` `}
        </h3>
        <p>Started at Sims 1 and here for the renaissance.</p>
        <p>
          <a href="https://ko-fi.com/A0A06R4FV" target="_blank">
            <img
              style={{ border: `0px` }}
              src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
              border="0"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Bio;
