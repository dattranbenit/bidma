import React, { useContext } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SidebarThemeContext from '../../../../@coremat/CmtLayouts/SidebarThemeContext/SidebarThemeContext';
import { useRouter } from 'next/router';
import Link from 'next/link'
import leaf from '../../../../public/images/dashboard/leaf.png';
import BriefCaseIcon1 from '../../../../components/Icons/BriefCaseIcon1';
import BriefCaseIcon2 from '../../../../components/Icons/BriefCaseIcon2';
import ListIconSmall1 from '../../../../components/Icons/ListIconSmall1';
import ListIconSmall2 from '../../../../components/Icons/ListIconSmall2';
import HammerIcon2 from '../../../../components/Icons/HammerIcon2';
import HammerIcon1 from '../../../../components/Icons/HammerIcon1';
import ShoppingBagIcon1 from '../../../../components/Icons/ShoppingBagIcon1';
import ShoppingBagIcon2 from '../../../../components/Icons/ShoppingBagIcon2';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ChevronDownIcon from '../../../../components/Icons/ChevronDownIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '16px 16px 12px 16px',
    fontFamily: 'Roboto',
  },
  userInfo: {
    paddingTop: 24,
    transition: 'all 0.1s ease',
    height: 75,
    opacity: 1,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      height: 0,
      paddingTop: 0,
      opacity: 0,
      transition: 'all 0.3s ease',
    },
  },
  userTitle: {
    color: (props) => props.sidebarTheme.textDarkColor,
    marginBottom: 8,
  },
  userSubTitle: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 0.25,
  },
  bidma: {
    textTransform: 'uppercase',
    color: '#E26740',
    fontSize: '30px',
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  icon: {
    marginTop: '7px',
    marginRight: '10px',
  },
  subHeader: {
    color: '#E26740',
    padding: '13px',
    background: '#F2F3F7',
    display: 'flex',
  },
  hammer: {
    marginRight: '8px',
  },
  primaryText: {
    fontSize: '16px',
    fontFamily: 'Roboto',
    lineHeight: 1.6,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
  },
  primarySmallText: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#4E5260',
  },
  primarySmallTextOrange: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#E26740',
  },
  leaf: {
    width: '31px',
    height: '37px',
    marginRight: '9px',
    marginTop: '6px',
  },
  customSelect: {
    paddingLeft: '14px',
  },
  display: {
    display: 'flex',
    padding: '13px',
  },
  buyOnline: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#4E5260',
    lineHeight: 1.6,
  },
  shoppingBag: {
    marginRight: '10px',
  },
  iconRoot: {
    minWidth: "30px"
  },
  itemGutters: {
    paddingRight: 0
  }
}));

const SidebarHeader = () => {
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });
  const router = useRouter()
  console.log("router", router )

  const [openList, setOpenList] = React.useState(false);
  const [openCase, setOpenCase] = React.useState(false);

  const handleListClick = () => {
    setOpenList(!openList);
  };
  const handleCaseClick = () => {
    setOpenCase(!openCase);
  };

  return (
    <div className={classes.root}>
      <div
        className="pointer">
        <div className="mr-2">
          <div className={classes.header}>
            <img src={leaf} alt="Leaf" className={classes.leaf} />
            <h1 className={classes.bidma}>bidma</h1>
          </div>
          <List>
            <Link href="/home">
            <ListItem className={router.route === "/home" || router.route === "/" ? classes.subHeader : null}>
              {router.route === "/home" || !router.route === "/" ? <HammerIcon2 className={classes.hammer} /> : <HammerIcon1 className={classes.hammer} />}
              <ListItemText classes={{ primary: classes.primaryText }} primary="Mua Hàng đấu giá" />
            </ListItem>
            </Link>
            <ListItem button onClick={handleListClick} classes={{gutters: classes.itemGutters}}>
              <ListItemIcon classes={{root: classes.iconRoot}}>
                { !openList ? <ListIconSmall1 /> : <ListIconSmall2 /> }
              </ListItemIcon>
              <ListItemText classes={{ primary: !openList ? classes.primarySmallText : classes.primarySmallTextOrange }} primary="Danh mục máy" />
              {openList ? <ExpandLess /> : <ChevronDownIcon />}
            </ListItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href="/nodata">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Danh mục máy 1" />
                </ListItem>
                </Link>
              </List>
            </Collapse>
          <ListItem button onClick={handleCaseClick} classes={{gutters: classes.itemGutters}}>
              <ListItemIcon classes={{root: classes.iconRoot}}>
                {!openCase ? <BriefCaseIcon1 /> : <BriefCaseIcon2 />}
              </ListItemIcon>
              <ListItemText classes={{ primary: !openCase ? classes.primarySmallText : classes.primarySmallTextOrange }} primary="Hãng sản xuất" />
              {openCase ? <ExpandLess /> : <ChevronDownIcon />}
            </ListItem>
            <Collapse in={openCase} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <Link href="/nodata">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Hãng sản xuất 1" />
                </ListItem>
                </Link>
              </List>
            </Collapse>
            <Link href="/shopping">
          <ListItem className={router.route === "/shopping" ? classes.subHeader : null}>
            {router.route === "/shopping" ? <ShoppingBagIcon2 className={classes.shoppingBag} /> : <ShoppingBagIcon1 className={classes.shoppingBag} />}
            <ListItemText classes={{ primary: classes.primaryText }} primary="Mua Hàng trực tuyến" />
          </ListItem>
          </Link>
          </List>

        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
