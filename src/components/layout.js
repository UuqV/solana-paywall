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
        <h3>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Solana<span style={{ color: colors.greenText, fontSize: `1.2em` }}>Publish</span>
          </Link>
        </h3>
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
