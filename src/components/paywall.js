/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import colors from '../colors';
import payWithSol from './send_sol';
import { Button } from '@mui/material';

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

  return (
    <div
      style={{
        display: `flex`,
        boxShadow: `0px 0px 20px 0px`,
        background: colors.background,
      }}
    >
      <div
        style={{
          display: `flex`,
          flex: `1 1 60vw`,
          flexDirection: `column`,
          justifyContent: `space-around`,
          padding: `1em`,
          textAlign: `center`,
        }}
      >
        <h3>
          You can use your Phantom wallet to view this article!
          {` `}
        </h3>
        <p></p>
        <p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              payWithSol(props.toggleDrawer);
            }}
          >
            Buy with Phantom Wallet
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Paywall;
