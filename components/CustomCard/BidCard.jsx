import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Share from '@material-ui/icons/Share';

import Grid from '@material-ui/core/Grid';
import LocationIcon from '../Icons/LocationIcon';
import CalendarIcon from '../Icons/CalendarIcon1';
import ClockIcon from '../Icons/ClockIcon';
import BookmarkIcon from '../Icons/BookmarkIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 350,
    borderRadius: '4px',
    marginBottom: 30,
    transition: "all .5s",
    boxShadow: "0 0rem .1rem rgba(0, 0, 0, 0.2)",
    "&:hover": {
      cursor: "pointer",
      transform: " translateY(-0.5rem) scale(1.03)",
      boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.1)",
    }

  },
  content: {
    position: 'relative',
    padding: '10px !important'
  },
  model: {
    fontWeight: 800,
    fontSize: 13,
    lineHeight: '15px',
  },
  price: {
    color: '#E26740',
    fontSize: 12,
    lineHeight: '14px',
    marginTop: 3,
    marginBottom: 9,
  },
  textWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '3px',
  },
  text: {
    color: '#828282',
    fontSize: 12,
    lineHeight: '14px',
  },
  baselineGroup: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeader: {
    height: 165,
    width: '100%',
    borderRadius: 4,
    backgroundSize: 'cover',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: '13px',
    paddingLeft: 7,
    paddingTop: 7,
  },
  headerFirstPart: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  remaining: {
    padding: 5,
    borderRadius: 3,
    background: 'rgba(19, 40, 65, 0.72)',
    color: '#ffffff',
    width: '100px',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: '13px',
    marginBottom: '9px',
    fontWeight: 700,
    fontFamily: 'Roboto',
  },
}));

const BidCard = (props) => {
  const { name, remaining, model, price, location, yearMade, onBoard, onClick, image } = props;

  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} onClick={onClick}>
        <div className={classes.cardHeader} style={{backgroundImage: `url(${image})`}}>
          <div className={classes.headerFirstPart}>
            <div className={classes.name}>{name}</div>
            <BookmarkIcon />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={classes.remaining}>{remaining}</div>
          </div>
        </div>
        <CardContent className={classes.content}>
          <div className={classes.model}>{model}</div>
          <div className={classes.price}>{price} đ</div>
          <div>
            <div className={classes.textWithIcon}>
              <LocationIcon />
              <div className={classes.text}>{location}</div>
            </div>
            <Grid container className={classes.baselineGroup}>
              <Grid item className={classes.textWithIcon}>
                <CalendarIcon />
                <div className={classes.text}>{yearMade}</div>
              </Grid>
              <Grid className={classes.textWithIcon}>
                <ClockIcon />
                <div className={classes.text}>{onBoard}</div>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BidCard;
