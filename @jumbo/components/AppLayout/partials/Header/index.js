import React from 'react';
import SidebarToggleHandler from '../../../../../@coremat/CmtLayouts/Vertical/SidebarToggleHandler';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavBar from '../../../../../components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#fff',
    display: 'flex',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
          <SidebarToggleHandler edge="start" color="black" aria-label="menu" />
          <NavBar />
    </div>
  );
};

export default Header;
