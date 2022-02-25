import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Paywall from './paywall';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: true,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ['bottom']: open });
  };

  return (
    <div>
      <React.Fragment key={'bottom'}>
        <Button onClick={toggleDrawer('bottom', true)}>{'bottom'}</Button>
        <Drawer anchor={'bottom'} open={state['bottom']} onClose={toggleDrawer('bottom', false)}>
          <Paywall />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
