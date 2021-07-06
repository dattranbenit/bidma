import React, { useState } from 'react';
import { useRouter } from 'next/router';

//Material UI Cores
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BidCard from '../components/CustomCard/BidCard';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
//import HomeIcon from '../@jumbo/components/Icons/HomeIcon';
import { BiHome } from 'react-icons/bi';

//Redux
import { getCategoriesDetails } from '../redux/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  categoryMachines: {
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    padding: '5%',
    marginLeft: '34px',
    marginRight: '43px',
    [theme.breakpoints.down('xs')]: {
      width: '90% !important',
      marginBottom: '10px !important',
      marginLeft: '10px !important',
    },
    [theme.breakpoints.down('md')]: {
      width: '100% ',
      marginBottom: '10px',
      marginLeft: '10px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      marginBottom: '10px',
      marginLeft: '10px',
    },
    [theme.breakpoints.up(1280)]: {
      width: '100%',
      marginBottom: '10px',
      marginLeft: '10px',
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
  // bidCard:{
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     marginRight:"10px",
  //     [theme.breakpoints.down("xs")]: {
  //         display: "flex",
  //         flexDirection: 'column',
  //         justifyContent: 'space-between',
  //     },
  // },
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
    marginBottom: '20px',
    width: '20%',
    [theme.breakpoints.down(850)]: {
      width: '33.3%',
    },
    [theme.breakpoints.down(600)]: {
      width: '50%',
    },
  },
}));

const Auction = (props) => {
  const {
    categoriesDetails, getCategoriesDetails
  } = props;
  React.useEffect(() => {
    getCategoriesDetails()
  },[])
  const classes = useStyles();
  const router = useRouter();
  const handleRedirect = () => {
    router.push('/product-detail');
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
          <Link color='textPrimary'>Máy xúc bánh xích</Link>
        </Breadcrumbs>
      </div>
      <div className={classes.pageContainer}>
        <Grid container xs={12} md={12} lg={10} xl={10} spacing={2}>
          {categoriesDetails && categoriesDetails.length > 0 ? ([...Array(categoriesDetails.length).keys()].map((element, index) => {
            return (
              <Grid item className={classes.gridItem}>
                <BidCard
                  onClick={handleRedirect}
                  image={categoriesDetails[index].image}
                  name={categoriesDetails[index].name}
                  remaining={categoriesDetails[index].remaining}
                  model={categoriesDetails[index].model}
                  price={categoriesDetails[index].price}
                  location={categoriesDetails[index].location}
                  yearMade={categoriesDetails[index].yearMade}
                  onBoard={categoriesDetails[index].onBoard}
                />
              </Grid>
            );
          })) : (
          <div>No CategoriesCard Display</div>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={2} xl={2}>
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
      </div>
    </>
  );
};


const mapStateToProps = state => {
  return {
    categoriesDetails: state.common.categoriesDetails
  };
};

const mapDispatchToProps = {
  getCategoriesDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auction);
