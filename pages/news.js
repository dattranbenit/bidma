import React from 'react';
//Material UI Cores
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//Image carousel
import darkWoman from '../public/images/dashboard/darkWoman.jpeg';

import CustomTabs from '../components/Tabs/CustomTabs';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { BiHome } from 'react-icons/bi';
import ListNewPostCard from '../components/ListNewPostCard/ListNewPostCard';
import { getPostCard, getVideoPost } from '../redux/actions';
import { connect } from 'react-redux';
import ListVideoPost from '../components/ListVideoPost/ListVideoPost';

const useStyles = makeStyles(() => ({
  mainBanner: {
    marginTop: 25,
  },
  sideBanner: {
    marginTop: 25,
  },
  sideBannerBackground: {
    backgroundColor: 'rgb(226, 103, 64)',
    backgroundImage: `url(${darkWoman})`,
    height: 300,
    width: '100%',
    borderRadius: 4,
    padding: '25px 12px',
    backgroundSize: 'cover',
    flexDirection: 'column',
    display: 'flex',
  },
  sideBannerTitle: {
    paddingBottom: 10,
    color: '#FFFFFF',
    fontWeight: 900,
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  sideBannerSubTitle: {
    color: '#FFFFFF',
    fontWeight: 400,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  gridItem: {
    padding: '0 0px',
    marginBottom: "24px",
  },
  breadcrumb:{
    fontFamily:"Roboto",
    marginLeft:"1%",
    display:"flex",

  },
  iconHome:{
      fontSize:"25px",
      lineHeight:0,  
      marginRight:"3px",
      color:"#B7BBCB"
  },
}));

const NewPost = (props) => {
  const classes = useStyles();
  const {
    postCards, getPostCard,
    videoPosts, getVideoPost
  } = props
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    getPostCard();
    getVideoPost()
  }, [])

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.breadcrumb}>
          <Grid className={classes.iconHome} >
            <BiHome/>
          </Grid>
          <Breadcrumbs aria-label="breadcrumb" style={{marginTop: "2px"}}>
              <Link color="inherit" href="/">
                  Trang chủ
              </Link>
              <Link color="textPrimary">Tin tức</Link>
          </Breadcrumbs>
      </div>
      <CustomTabs tabs={['Tin tức', 'Video']} tabValue={handleChangeTab} />
      {value === 0 && (
        <ListNewPostCard postCards={postCards}/>
      )}
      {value === 1 && (
        <ListVideoPost videoPosts={videoPosts}/>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    postCards: state.common.postCards,
    videoPosts: state.common.videoPosts
  };
};

const mapDispatchToProps = {
  getPostCard,
  getVideoPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
