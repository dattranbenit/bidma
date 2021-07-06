import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';



import HomeIcon from '../../@jumbo/components/Icons/HomeIcon';
import HammerIcon from '../../@jumbo/components/Icons/HammerIcon';
import NewsIcon from '../../@jumbo/components/Icons/NewsIcon';
import BookmarkIcon from '../../@jumbo/components/Icons/BookmarkIcon';
import SearchIcon from '../../@jumbo/components/Icons/SearchIcon';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LogoIcon from '../../@jumbo/components/Icons/LogoIcon';
import { useRouter } from 'next/router';
import CustomTabs from '../Tabs/CustomTabs';
import { Paper } from '@material-ui/core';
import ListNewPostCard from '../ListNewPostCard/ListNewPostCard';
import ListVideoPost from '../ListVideoPost/ListVideoPost';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F2F3F7',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      height: '34px',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    marginLeft: 10,
    padding: theme.spacing(1, 1, 1, 0),
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    flexGrow: 1,
    display: 'flex',
    },
  appBar: {
    backgroundColor: '#fff',
    color: '#000',
    display: 'flex',
    width: "100%",
  },
  headCenter: {
    display: 'flex',
  },
  listItemRoot: {
    width: 'auto',
  },
  toolBarDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      paddingLeft: 0,
      paddingRight: '28px',
    },
  },
  toolBarMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  homeLink: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '19px',
    // color: '#E26740',
    textTransform: 'capitalize',
  },
  subLink: {
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '19px',
    // color: '#828282',
    textTransform: 'capitalize',
  },
  notiBadge: {
    backgroundColor: '#F2F3F7',
    width: '40px',
    height: '40px',
    textAlign: 'center',
    borderRadius: '5px',
  },
  userIcon: {
    padding: 7,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  userArea: {
    display: "flex",
    justifyContent: "flex-start",
  },
  userFunc: {
    margin: "0 5px",
    '&:hover': {
      cursor: 'pointer',
    },
  },
  collapse: {
    flexGrow: 10
  },
  cardNotify: {
    width: "30rem"
  },
  notification: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px"
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [search, setSearch] = React.useState(false)
  const [value, setValue] = React.useState(0);
  // let [home, setHome] = React.useState("#E26740")
  // let [news, setNews] = React.useState("#828282")
  // let [tracking, setTracking] = React.useState("#828282")
  // let [auction, setAuction] = React.useState("#828282")
  let [color, setColor] = React.useState({
    home: "#E26740",
    news: "#828282",
    tracking: "#828282",
    auction: "#828282"
  })
  let { home, news, tracking, auction } = color
  const router = useRouter();

  const handleSearchBtn = () => {
    setSearch(!search)
  }

  const handleRedirect = () => {
    router.push('/user-profile');
  };

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  let changeColor = (e) => {
    e.preventDefault()
    switch (e.currentTarget.value) {
      case "auction": {
        setColor({
          home: "#828282",
          tracking: "#828282",
          news: "#828282",
          auction: "#E26740"
        })
        break;
      }
      case "home": {
        setColor({
          auction: "#828282",
          tracking: "#828282",
          news: "#828282",
          home: "#E26740"
        })
        break;
      }
      case "tracking": {
        setColor({
          auction: "#828282",
          home: "#828282",
          news: "#828282",
          tracking: "#E26740"
        })
        break;
      }
      case "news": {
        setColor({
          auction: "#828282",
          tracking: "#828282",
          home: "#828282",
          news: "#E26740"
        })
        break;
      }
    }
  }

  React.useEffect(() => {

  }, [search])

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBarDesktop}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Tìm kiếm máy…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.collapse} style={{ justifyContent: 'flex-end' }}>
            <List className={classes.list}>
              <div className={classes.headCenter}>
                <ListItem className={classes.listItem} classes={{ root: classes.listItemRoot }}>
                  <HomeIcon />
                  <Button className={classes.navLink} onClick={changeColor} color="transparent" value="home">
                    <Link href="/home">
                      <p className={classes.homeLink} style={{color: `${home}`}}>Trang chủ</p>
                    </Link>
                  </Button>
                </ListItem>

                <ListItem className={classes.listItem} classes={{ root: classes.listItemRoot }}>
                  <NewsIcon />
                  <Button className={classes.navLink} onClick={changeColor} color="transparent" value="news">
                    <Link href="/news">
                      <p className={classes.subLink} style={{color: `${news}`}}>Tin tức</p>
                    </Link>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem} classes={{ root: classes.listItemRoot }}>
                  <HammerIcon />
                  <Button className={classes.navLink} onClick={changeColor} color="transparent" value="auction">
                    <Link href="/auction">
                      <p className={classes.subLink} style={{color: `${auction}`}}>Đấu giá</p>
                    </Link>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem} classes={{ root: classes.listItemRoot }}>
                  <BookmarkIcon />
                  <Button className={classes.navLink} onClick={changeColor} color="transparent" value="tracking">
                    <Link href="/tracking-auction">
                      <p className={classes.subLink} style={{color: `${tracking}`}}>Theo dõi</p>
                    </Link>
                  </Button>
                </ListItem>
              </div>
            </List>
          </div>

            <div className={classes.sectionDesktop}>
              <Badge badgeContent={2} color="secondary" className={classes.notiBadge}>
                <div className={classes.userIcon}>
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <NotificationsNoneIcon {...bindTrigger(popupState)}/>
                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          disableScrollLock
                        >
                          <Box className={classes.cardNotify}>
                            <CustomTabs tabs={['Tin mới', 'Lịch sử']} tabValue={handleChangeTab} />
                            {value === 0 && (
                              <div className={classes.notification}>
                                No Data
                              </div>
                            )}
                            {value === 1 && (
                              <div className={classes.notification}>
                                No Data
                              </div>
                            )}
                          </Box>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                </div>
              </Badge>
              <div className={classes.userIcon}>
                <AccountCircle onClick={handleRedirect}/>
              </div>
            </div>
        </Toolbar>
        <Toolbar className={classes.toolBarMobile}>
          <div className={classes.grow}></div>
          <div className={classes.logo}>
          <LogoIcon />
          </div>
          <div className={classes.grow}></div>
          <div className={classes.userArea}>
          <div className={classes.userFunc}>
            {search ? <InputBase
              placeholder="Tìm kiếm máy…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            /> : null}
            <SearchIcon onClick={handleSearchBtn}/>
          </div>
          <div className={classes.userFunc}>
            <AccountCircle onClick={handleRedirect}/>
          </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;
