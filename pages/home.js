import React from 'react';

//Common components
import CustomCarousel from '../components/CustomCarousel/CustomCarousel';
import ImageCarousel from '../components/CustomCarousel/ImageCarousel';
import AppstoreIcon from '../components/Icons/AppstoreIcon';
import PlaystoreIcon from '../components/Icons/PlaystoreIcon';

//Material UI Cores
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

//Image carousel
import darkWoman from '../public/images/dashboard/darkWoman.jpeg';
import background1 from '../public/images/dashboard/background1.png';

//Vehicle carousel
import mayxuc from '../public/images/dashboard/maysangat.png';
import mayui from '../public/images/dashboard/mayui.png';
import mayxucbanhlop from '../public/images/dashboard/mayxucbanhlop.png';
import mayxucbanhxich from '../public/images/dashboard/mayxucbanhxich.png';

import ListIcon1 from '../components/Icons/ListIcon1';
import ListIcon2 from '../components/Icons/ListIcon2';
import CalendarIcon2 from '../components/Icons/CalendarIcon2';
import CalendarIcon1 from '../components/Icons/CalendarIcon1';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import BidExhibition from '../modules/Pages/home/BidExhibition';
import Calendar from '../modules/Pages/home/Calendar';

//Loading
import CustomLoading from '../components/CustomLoading/CustomLoading';

//MockData Redux
import { connect } from 'react-redux';
import {
  getPictureData,
  getVehicleData,
  getComments,
  getCardDetails,
} from '../redux/actions';

const useStyles = makeStyles((theme) => ({
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
  storeContainer: {
    paddingTop: 27,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  sideBannerStore: {
    alignItems: 'center',
    color: '#FFFFFF',
    fontWeight: 400,
    fontSize: 14,
    fontFamily: 'Roboto',
    paddingLeft: 10,
  },
  bidScheduleTitle: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 22,
    color: '#4E5260',
    padding: '45px 0px 30px',
  },
  search: {
    display: 'inline-grid',
    alignItems: 'center',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F2F3F7',
    margin: '28px 20px !important',

    [theme.breakpoints.up('sm')]: {
      height: '34px',
      width: '320px',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    [theme.breakpoints.up('down')]: {
      height: '34px',
      width: '220px',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    paddingLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    transition: theme.transitions.create('width'),
    width: '100% !important',
    [theme.breakpoints.up('md')]: {
      width: '100% !important',
    },
  },
  bidScheduleContainer: {
    backgroundColor: '#FFFFFF',
  },
  bidScheduleHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bidScheduleSearch: {
    textAlign: 'left',
  },
  bidScheduleTabs: {
    display: 'flex',
    paddingRight: 30,
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      paddingRight: '0 !important',
    },
  },
  iconBtnRoot: {
    background: '#FFFFFF',
    borderRadius: 2,
    minWidth: '32px !important',
    height: 32,
    padding: '6px 6px',
  },
  buttonSelected: {
    backgroundColor: 'white',
  },
  toggleGroup: {
    height: '34px',
    width: '86px',
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const {
    pictures, getPictureData,
    vehicles, getVehicleData,
    comments, getComments,
    cardDetails, getCardDetails,
  } = props;

  const [alignment, setAlignment] = React.useState('list');
  const [disabledList, setDisabledList] = React.useState(true);
  const [disabledCal, setDisabledCal] = React.useState(false);

  React.useEffect(() => {
    getPictureData();
    getVehicleData();
    getComments();
    getCardDetails()
  }, []);

  React.useEffect(() => {
  }, [alignment, disabledList, disabledCal]);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (alignment === 'calendar') {
      setDisabledList(true);
      setDisabledCal(false);
    }
    if (alignment === 'list') {
      setDisabledList(false);
      setDisabledCal(true);
    }
  };

  return (
    <>
      <CustomCarousel vehicles={vehicles} />
      <Grid container spacing={5}>
        <Grid item xs={12} lg={9} className={classes.mainBanner}>
          <ImageCarousel pictures={pictures} itemPerPage={1} />
        </Grid>
        <Grid item xs={12} lg={3} className={classes.sideBanner}>
          <div className={classes.sideBannerBackground}>
            <span className={classes.sideBannerTitle}>Ứng dụng BID2MAX</span>
            <span className={classes.sideBannerSubTitle}>
              BIDMA đã có ứng dụng dành cho điện thoại. Bạn có thể tải về từ Store.
            </span>
            <div className={classes.storeContainer}>
              <AppstoreIcon />
              <span className={classes.sideBannerStore}>IOS Appstore</span>
            </div>
            <div className={classes.storeContainer}>
              <PlaystoreIcon />
              <span className={classes.sideBannerStore}>Google playstore</span>
            </div>
          </div>
        </Grid>
      </Grid>
      <div>
        <h1 className={classes.bidScheduleTitle}>LỊCH ĐẤU GIÁ</h1>
        <div className={classes.bidScheduleContainer}>
          <Grid container className={classes.bidScheduleHeader}>
            <Grid item xs={6} className={classes.bidScheduleSearch}>
              <div className={classes.search}>
                <InputBase
                  placeholder='Lọc theo tên phiên đấu giá'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
            <Grid item xs={6} className={classes.bidScheduleTabs}>
              <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} className={classes.toggleGroup}>
                <ToggleButton value='list' disabled={disabledList} classes={{ selected: classes.buttonRoot }}>
                  {alignment === 'list' ? <ListIcon2 /> : <ListIcon1 />}
                </ToggleButton>
                <ToggleButton value='calendar' disabled={disabledCal}>
                  {alignment === 'calendar' ? <CalendarIcon2 /> : <CalendarIcon1 />}
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          {
            alignment === 'list' ?
              <BidExhibition
                comments={comments}
                cardDetails={cardDetails}
              /> : <Calendar />
          }
        </div>
      </div>
      <CustomLoading />
    </>
  );
};

const mapStateToProps = state => {
  return {
    pictures: state.common.pictures,
    vehicles: state.common.vehicles,
    comments: state.common.comments,
    cardDetails: state.common.cardDetails
  };
};

const mapDispatchToProps = {
  getPictureData,
  getVehicleData,
  getComments,
  getCardDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

