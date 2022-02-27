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
      <div>
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
        <main>{children}</main>
        <Bio />
      </div>
    );
  }
}

export default Layout;
