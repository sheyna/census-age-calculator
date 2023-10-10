import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';

// css
import './DrawerMenu.css';


function DrawerMenu({ children, openDrawerBtnText }) {

  const [ drawerIsOpen, setDrawerIsOpen ] = useState({
    left: false
  });

  const toggleDrawer =
    (open, anchor = 'left') =>
    (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setDrawerIsOpen({ ...drawerIsOpen, [anchor]: open });
    };

  const list = () => (
    <Box
      sx={{width: 400}}
      role="presentation"
      className="drawer-box"
    >
      <div
        onClick={toggleDrawer(false, 'left')}
        className='close-btn'
      >
        &times;
      </div>
      {children}      
    </Box>
  );


  return (
    <div>
      <Button 
        onClick={toggleDrawer(true, 'left')}
      >
        {openDrawerBtnText}
      </Button>
      <Drawer
        anchor={'left'}
        open={drawerIsOpen['left']}
        onClose={toggleDrawer(false, 'left')}
      >
        {list()}
      </Drawer>
    </div>
  );
}

export default DrawerMenu;

DrawerMenu.propTypes = {
  openDrawerBtnText: PropTypes.string,
  children: PropTypes.element.isRequired
}
