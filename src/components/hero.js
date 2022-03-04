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
          }}>
            <div style={{
              padding: `.5em`,
            }}>
              <h1 style={{
                margin: 0,
              }}>Publishers:</h1>
              <h3>Improve User Conversion</h3><span>Don't create friction with a subscription process. Every reader can add revenue.</span>
              <h3>Make Sharing Profitable</h3><span>Traffic as readers share with their friends means visitors bring in profit too.</span>
            </div>
            <div style={{
              padding: `.5em`,
            }}>
              <h1 style={{
                margin: 0,
              }}>Customers:</h1>
              <h3>Save Money</h3><span>Only pay for what you use. Skip cancelling subscriptions you don't.</span>
              <h3>Protect your Privacy</h3><span>Every service out there has your email address. That doesn't have to be the case.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
