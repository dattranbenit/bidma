import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import RightCarouselIcon from '../Icons/RightCarouselIcon';
import LeftCarouselIcon from '../Icons/LeftCarouselIcon';

const useStyles = makeStyles(() => ({
  carouselWrapper: {
    borderRadius: 4,
  },
  carouselItem: {
    height: '300px',
    width: '100%',
    backgroundColor: '#FFFFFF',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 4,
  },
  comments: {
    border: '2px solid #F2F3F7',
    borderRadius: '4px',
    padding: '12px 5px 15px 15px',
  },
  commentsRating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: "#E26740"
  }
}));

const RatingCarousel = (props) => {
  const classes = useStyles();

  const { comments } = props

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <LeftCarouselIcon style={{ textAlign: 'left' }} />
      ) : (
        <RightCarouselIcon style={{ textAlign: 'right' }} />
      );
    return (
      <div onClick={onClick} disabled={isEdge} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        {pointer}
      </div>
    );
  };

  return (
    <div className="carousel-wrapper">
      <Carousel pagination={false} className={classes.carouselWrapper} renderArrow={myArrow}>
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <div className={classes.comments}>
              <div className={classes.commentsRating}>
                <img src={comment.avatar} />
                <Rating defaultValue={5} className={classes.star}/>
              </div>
              <span>{comment.comment}</span>
            </div>
          ))
        ) : (
          <div className={classes.vehicleNoDisplay}>No Comments Display</div>
        )}
      </Carousel>
    </div>
  );
};

export default RatingCarousel;
