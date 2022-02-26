/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import colors from '../colors';
import airdrop from './send_sol';

const Paywall = (props) => {
  const data = useStaticQuery(graphql`
    query Paywall {
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
        background: `rgb(21, 88, 112)`,
      }}
    >
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
          You can use your Phantom wallet to view this article!
          {` `}
        </h3>
        <p>Sign up to our email list and recieve 3 free articles.</p>
        <p>
          <button
            onClick={function() {
              console.log(props.toggleDrawer);
              window.solana.connect().then(function(userKey) {
                airdrop(props.toggleDrawer, userKey);
              });
            }}
            target="_blank"
          >
            {'Connect Phantom Wallet'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Paywall;
