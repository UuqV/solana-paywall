import React from 'react';

import Bio from './bio';

class Paywall extends React.Component {
  render() {
    return (
      <div style={{ background: `rgb(21, 88, 112)` }}>
        <Bio></Bio>
      </div>
    );
  }
}

export default Paywall;
