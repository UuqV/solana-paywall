import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import Hero from './hero';
import Bio from './bio';
import * as colors from '../colors.json';

class Layout extends React.Component {
  render() {
    const { location, title, children, post } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    header = (
      <div style={{ position: 'relative', boxShadow: '0px 0px 20px 0px' }}>
        <h3
          style={{
            padding: rhythm(1 / 4),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Solana<span style={{ color: colors.h1, fontSize: `1.2em` }}>Publish</span>
          </Link>
        </h3>
      </div>
    );
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(to top left, rgb(34, 235, 10), rgb(0, 217, 255))`,
          minHeight: `100vh`,
        }}
      >
        <header>{header}</header>
        <div
          style={{
            height: `80vh`,
            display: `flex`,
            justifyContent: `space-between`,
            flexFlow: `row wrap`,
          }}
        >
          <div
            style={{
              paddingTop: `10%`,
              flex: `1 0 60%`,
            }}
          >
            <h1
              style={{
                ...scale(1.75),
                padding: rhythm(1 / 4),
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                Get creatives paid.
              </Link>
            </h1>
            <h2
              style={{
                padding: rhythm(1 / 4),
              }}
            >
              Use solana to accept payments for your content. No subscription required.
            </h2>
          </div>
        </div>
        <main>{children}</main>
        <Bio />
      </div>
    );
  }
}

export default Layout;
