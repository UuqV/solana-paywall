import React from 'react';
import colors from '../colors';

class Hero extends React.Component {
  render() {
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
            Get creatives paid.
            {` `}
          </h3>
          <p>
            Use solana to accept payments for articles like a newstand. No subscription required.
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
