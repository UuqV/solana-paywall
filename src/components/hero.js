import React from 'react';
import colors from '../colors';

class Hero extends React.Component {
  render() {
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
            textAlign: `right`,
          }}
        >
          <h3>Publish your work with solana and you can:</h3>
          <li>Capture revenue when articles are shared with friends.</li>
          <li>Respect user privacy.</li>

          <h3>For publishers:</h3>
          <li>Improve user conversion!</li>
          <li>Capture a new market segment!</li>

          <h3>For consumers:</h3>
          <li>Save money!</li>
          <li>Protect your privacy! Save </li>
        </div>
      </div>
    );
  }
}

export default Hero;
