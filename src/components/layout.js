import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import colors from '../colors';

class Layout extends React.Component {
  render() {
    const { location, title, children, post } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    header = (
      <>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
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
            {title}
          </Link>
        </h3>
      </>
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
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
