import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Paywall from './paywall';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: true,
  });

  const toggleDrawer = (open) => {
    setState({ ...state, ['bottom']: open });
  };

  return (
    <div>
      <React.Fragment key={'bottom'}>
        <Drawer style={{ top: '48.3px' }} anchor={'bottom'} open={state['bottom']}>
          <Paywall toggleDrawer={toggleDrawer} />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
