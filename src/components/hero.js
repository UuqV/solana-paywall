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
          }}
        >
          <div style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-around`,
            color: colors.greenText,
            flexFlow: `row wrap`,
          }}>
            <div style={{
              padding: `.5em`,
              flex: `1`,
            }}>
              <h1 style={{
                margin: 0,
              }}>Publishers:</h1>
              <h3>Improve User Conversion</h3><p>Don't create friction with a subscription process. Every reader can add revenue.</p>
              <h3>Make Sharing Profitable</h3><p>Traffic as readers share with their friends means visitors bring in profit too.</p>
            </div>
            <div style={{
              padding: `.5em`,
              flex: `1`,
            }}>
              <h1 style={{
                margin: 0,
              }}>Customers:</h1>
              <h3>Save Money</h3><p>Only pay for what you use. Skip cancelling subscriptions you don't.</p>
              <h3>Protect your Privacy</h3><p>Every service out there knows everything there is to know about you. That doesn't have to be the case.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
