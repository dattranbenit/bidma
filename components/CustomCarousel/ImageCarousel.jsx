import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  carouselWrapper: {
    borderRadius: 4,
    position: "relative",
  },
  carouselItem: {
    height: "300px",
    width: "100%",
    backgroundColor: "#FFFFFF",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 4
  },
}));

const ImageCarousel = (props) => {
  const classes = useStyles();

  const { itemPerPage, pictures } = props;

  let resetTimeout;
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(pictures.length / itemPerPage)
  return (
    <div className="carousel-wrapper">
      <Carousel 
        className={classes.carouselWrapper}
        ref={carouselRef} 
        showArrows={false} 
        enableAutoPlay 
        pagination={true} 

        /** Infinite Loop for Carousel */
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          if (index + 1 === totalPages) {
              resetTimeout = setTimeout(() => {
                carouselRef.current.goTo(0)
            }, 1500)
          }
      }}>
        {pictures && pictures.length > 0 ? (
          pictures.map((picture) => <div style={{backgroundImage: `url(${picture.url})`}}className={classes.carouselItem} key={picture.id}></div>)
        ) : (
          <div className={classes.vehicleNoDisplay}>No Image Display</div>
        )}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
