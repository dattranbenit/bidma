import React, { useState } from 'react';
import { useRouter } from 'next/router';

//Material UI Cores and Labs
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';

//Components
import usePagination from '../../../components/Pagination/Pagination';

//Image carousel
import avatar from '../../../public/images/dashboard/avatar.png';
import RightArrowIcon from '../../../components/Icons/RightArrowIcon';
import RatingCarousel from '../../../components/CustomCarousel/RatingCarousel';
import BidCard from '../../../components/CustomCard/BidCard';

const useStyles = makeStyles((theme) => ({
  bidContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  bidContentDetails: {
    display: 'flex',
    flexDirection: 'row',
  },
  bidContentCalendar: {
    textAlign: 'center',
    backgroundColor: '#2F80ED',
    borderRadius: 4,
    maxWidth: '65px !important',
    padding: 1,
    height: '90px',
  },
  bidDay: {
    margin: 7,
    fontWeight: 700,
    fontSize: 30,
    color: '#FFFFFF',
  },
  bidMonth: {
    backgroundColor: '#FFFFFF',
    position: 'relative',
    margin: '3px 3px 3px',
    borderRadius: 2,
    padding: '6px 3px 3px',
    height: 'auto',
  },
  bidContentRating: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 16,
  },
  bidContentRatingDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    width: '95%',
    margin: 'auto',
    marginTop: '40px',
    marginBottom: '40px',
    border: '1px solid #F2F3F7',
  },
  star: {
    color: '#E26740',
  },
  midBid: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
    // [theme.breakpoints.down('sm')]: {
    //   display: "none"
    // },
  },
  smallBid: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  link: {
    color: "#0066cc"
  }
}));

const cardArray = [0, 1, 2];

const contentArray = [0, 1, 2, 3];

const BidExhibition = (props) => {
  const { comments, cardDetails } = props;
  const classes = useStyles();
  const router = useRouter();

  let [page, setPage] = useState(1);
  const PER_PAGE_COMMENTS = 5;

  const count = Math.ceil(comments.length / PER_PAGE_COMMENTS);
  const _DATA_COMMENTS = usePagination(comments, PER_PAGE_COMMENTS);

  const handleRedirect = () => {
    router.push('/product-detail');
  };

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA_COMMENTS.jump(p);
  };

  const changeToJenDetail = () => {
    window.location.href="/jen/04-03"
  }

  return (
    <div>
      <div>
        {_DATA_COMMENTS.currentData().map(() => (
          <>
            <Grid container spacing={7} style={{ padding: '0 20px', cursor: 'pointer' }}>
              <Grid item xs={12} md={4} lg={4} sm={6} className={classes.bidContent}>
                <Grid container className={classes.bidContentDetails}>
                  <Grid item xs={3} className={classes.bidContentCalendar}>
                    <h2 className={classes.bidDay}>13</h2>
                    <div className={classes.bidMonth}>4/2021</div>
                  </Grid>
                  <Grid item xs={9} className={classes.bidContentRating}>
                    <div className={classes.bidContentRatingDetails}>
                      <h2>JEN 04-13</h2>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div onClick={changeToJenDetail} className={classes.link}>Xem chi tiết</div>
                        <RightArrowIcon style={{ backgroundColor: '#F2F3F7', borderRadius: 4, marginLeft: 6 }} />
                      </div>
                    </div>
                    <Rating defaultValue={2} className={classes.star} />
                    <div style={{ marginTop: 12, display: 'flex', flexDirection: 'row' }}>
                      <span>16:00 08/04/2021 - 16:00 13/04/2021</span>
                    </div>
                  </Grid>
                </Grid>
                <div style={{ padding: '50px 0' }}>
                  <RatingCarousel comments={comments} />
                </div>
              </Grid>
              <Grid item lg={8} md={8} sm={6}
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Grid container spacing={6}>
                  {cardDetails && cardDetails.length > 0 ? (cardArray.map((element, index) => {
                    return (
                      <Grid item md={4} sm={6} xs={12} className={classes.bigBid}>
                        <BidCard
                          onClick={handleRedirect}
                          image={cardDetails[index].image}
                          name={cardDetails[index].name}
                          remaining={cardDetails[index].remaining}
                          model={cardDetails[index].model}
                          price={cardDetails[index].price}
                          location={cardDetails[index].location}
                          yearMade={cardDetails[index].yearMade}
                          onBoard={cardDetails[index].onBoard}
                        />
                      </Grid>
                    );
                  })) : (
                    <div>No Card Display</div>
                  )}
                  {/*{cardArray.slice(2).map(() => (*/}
                  {/*  <Grid item md={6} sm={6} xs={12} className={classes.midBid}>*/}
                  {/*    <BidCard*/}
                  {/*      onClick={handleRedirect}*/}
                  {/*      name={cardDetail.name}*/}
                  {/*      remaining={cardDetail.remaining}*/}
                  {/*      model={cardDetail.model}*/}
                  {/*      price={cardDetail.price}*/}
                  {/*      location={cardDetail.location}*/}
                  {/*      yearMade={cardDetail.yearMade}*/}
                  {/*      onBoard={cardDetail.onBoard}*/}
                  {/*    />*/}
                  {/*  </Grid>*/}
                  {/*))}*/}
                </Grid>
              </Grid>
            </Grid>
            <hr className={classes.horizontalLine} />
          </>
        ))}</div>

      <div style={{display: "flex", justifyContent: "center"}}>
        <Pagination
          count={count}
          size="large"
          page={page}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default BidExhibition;
