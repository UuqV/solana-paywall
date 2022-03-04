import React from 'react';
import { Link } from 'gatsby';
import Bio from './bio';
import * as colors from '../colors.json';

class Layout extends React.Component {
  render() {
    const { location, title, children, post } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    header = (
      <div style={{ position: 'relative', boxShadow: '0px 0px 20px 0px' }}>
        <h2>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `white`,
              fontSize: `1.2em`,
            }}
            to={`/`}
          >
            Solana<span style={{ color: colors.greenText, fontSize: `1.8em` }}>Publish</span>
          </Link>
        </h2>
      </div>
    );
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(to top left, rgb(0, 217, 255), rgb(82, 52, 235) )`,
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
