import React, { useState } from 'react';

//Material UI Cores
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BidCard from '../components/CustomCard/BidCard';
import CustomTabs from '../components/Tabs/CustomTabs';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { BiHome } from 'react-icons/bi';
import { getAuctionDetails } from '../redux/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    columnGap: '25px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  categoryMachines: {
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    padding: '15px',
    marginLeft: '34px',
    marginTop: '24px',
    marginRight: '43px',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      margin: 'auto',
      marginBottom: '10px !important',
      marginLeft: '0px !important',
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      width: '100% ',
      marginBottom: '10px',
      marginLeft: '0px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      marginBottom: '10px',
      marginLeft: '0px',
    },
    [theme.breakpoints.down(1280)]: {
      width: '100%',
      marginBottom: '10px',
      marginLeft: '0px',
      // display: 'flex',
      // justifyContent: 'flex-start',
    },
    [theme.breakpoints.down(960)]: {
      width: '100%',
      marginBottom: '10px',
      marginLeft: '0px',
      display: 'flex',
      justifyContent: 'flex-start',
    },
  },
  pageContainer: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  bidCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '10px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginRight: '0px',
    },
  },
  machines: {
    textAlign: 'right',
    marginBottom: '33px',
    '& h4': {
      margin: '20px 10px 10px 49px',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '18.75px',
    },
    '& label': {
      margin: '6px 10px 6px 24px',
    },
    '& input': {
      borderRadius: '4px',
    },
    [theme.breakpoints.down('lg')]: {
      '& h4': {
        margin: '20px 10px 10px 40px',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '18.75px',
      },
      '& label': {
        margin: '6px 10px 6px 20px',
      },
      '& input': {
        borderRadius: '4px',
      },
    },
    [theme.breakpoints.up(1280)]: {
      '& h4': {
        margin: '20px 0px 10px 15px',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '18.75px',
      },
      '& label': {
        margin: '6px 6px 6px 0px',
      },
      '& input': {
        borderRadius: '4px',
      },
    },
  },
  manufacturer: {
    textAlign: 'right',
    marginBottom: '26px',
    '& h4': {
      margin: '20px 10px 10px 49px',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '18.75px',
    },
    '& label': {
      margin: '6px 10px 6px 24px',
    },
    '& input': {
      borderRadius: '4px',
    },
    [theme.breakpoints.down('lg')]: {
      '& h4': {
        margin: '20px 10px 10px 40px',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '18.75px',
      },
      '& label': {
        margin: '6px 10px 6px 20px',
      },
      '& input': {
        borderRadius: '4px',
      },
    },
    [theme.breakpoints.up(1280)]: {
      '& h4': {
        margin: '20px 0px 10px 15px',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '18.75px',
      },
      '& label': {
        margin: '6px 6px 6px 0px',
      },
      '& input': {
        borderRadius: '4px',
      },
    },
  },
  auction: {
    // marginLeft: '1%',
    // width: '90%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },

  breadcrumb: {
    fontFamily: 'Roboto',
    marginBottom: '20px',
    marginLeft: '1%',
    display: 'flex',
  },
  iconHome: {
    fontSize: '25px',
    lineHeight: 0,
    marginRight: '3px',
    color: '#B7BBCB',
  },
  gridItem: {
    width: '20%',
    [theme.breakpoints.down(850)]: {
      width: '33.3%',
    },
    [theme.breakpoints.down(600)]: {
      width: '50%',
    },
  },
}));

const cardArray = [0, 1, 2, 3, 4];

const Auction = (props) => {
  const {
    auctionDetails, getAuctionDetails
  } = props;
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    getAuctionDetails()
  },[])
  const classes = useStyles();
  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.breadcrumb}>
        <Grid className={classes.iconHome}>
          <BiHome />
        </Grid>
        <Breadcrumbs aria-label='breadcrumb' style={{ marginTop: '2px' }}>
          <Link color='inherit' href='/'>
            Trang chủ
          </Link>
          <Link color='textPrimary'>Theo dõi</Link>
        </Breadcrumbs>
      </div>

      <Grid className={classes.bodyContainer}>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Grid className={classes.categoryMachines}>
            <Grid className={classes.machines}>
              <h4>Danh mục máy</h4>
              <Grid>
                <label>Máy xúc bánh xích</label>
                <input type='checkbox' />
              </Grid>
              <Grid>
                <label>Máy xúc bánh tròn</label>
                <input type='checkbox' />
              </Grid>
              <Grid>
                <label>Máy hàn</label>
                <input type='checkbox' />
              </Grid>
            </Grid>


            <Grid className={classes.manufacturer}>
              <h4>Hãng sản xuất</h4>
              <Grid>
                <label>Hitachi</label>
                <input type='checkbox' />
              </Grid>
              <Grid>
                <label>Komatsu</label>
                <input type='checkbox' />
              </Grid>
              <Grid>
                <label>Kobelco</label>
                <input type='checkbox' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        <Grid item md={12} sm={12} xs={12} lg={10}>
          <div className={classes.auction}>
            <CustomTabs xs={6} md={6} lg={6} tabs={['Đang đấu giá', 'Đã kết thúc']} tabValue={handleChangeTab} />
          </div>

          <Grid container md={12} spacing={5}>
            {auctionDetails && auctionDetails.length > 0 ? ([...Array(auctionDetails.length).keys()].map((element, index) => {
              return (
                <Grid item className={classes.gridItem}>
                  <BidCard
                    image={auctionDetails[index].image}
                    name={auctionDetails[index].name}
                    remaining={auctionDetails[index].remaining}
                    model={auctionDetails[index].model}
                    price={auctionDetails[index].price}
                    location={auctionDetails[index].location}
                    yearMade={auctionDetails[index].yearMade}
                    onBoard={auctionDetails[index].onBoard}
                  />
                </Grid>
              );
            })) : (
              <div>No AuctionCard Display</div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auctionDetails: state.common.auctionDetails
  };
};

const mapDispatchToProps = {
  getAuctionDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auction);