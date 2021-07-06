import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { makeStyles } from '@material-ui/core/styles';
import CmtImage from '../../@coremat/CmtImage/index';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  carouselWrapper: {
    backgroundColor: 'white',
    borderRadius: '4px !important',
    cursor: 'pointer',
    height: '100%',
  },
  vehicle: {
    position: 'relative',
  },
  vehicleQuantity: {
    backgroundColor: '#B7BBCB',
    width: 'fit-content',
    padding: '4px 4px 2px',
    borderRadius: '6px',
    fontSize: '10px',
    fontWeight: 400,
    fontStyle: 'normal',
    textAlign: 'right',
    left: '52px',
    top: '21px',
    position: 'relative',
  },
  vehicleNoQuantity: {
    paddingTop: 20,
  },
  vehicleName: {
    fontSize: "87% !important",
    fontWeight: "500 !important"
  }
}));

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 5 },
  { width: 768, itemsToShow: 8 },
  { width: 1200, itemsToShow: 9 },
];

const CustomCarousel = (props) => {
  const classes = useStyles();

  const { vehicles } = props;

  let [ route, setRoute ] = useState('')

  const changeToVehicleDetail = (e) => {
    window.location.href=`/product-category/${e.currentTarget.value}`
  }

  return (
    <div className="carousel">
      <Carousel
        itemPadding={[10]}
        breakPoints={breakPoints}
        pagination={false}
        showArrows={false}
        className={classes.carouselWrapper}>
        {vehicles && vehicles.length > 0 ? (
          vehicles.map((vehicle) => {
            return (
              <Button onClick={changeToVehicleDetail} value={vehicle.slug}>
                <div className={classes.vehicle} key={vehicle.id}>
                  {vehicle.quantity > 0 ? (
                    <div className={classes.vehicleQuantity}>{vehicle.quantity}</div>
                  ) : (
                    <div className={classes.vehicleNoQuantity}></div>
                  )}
                  <CmtImage src={vehicle.imageURL} alt="vehicle" />
                  <div className={classes.vehicleName}>{vehicle.name}</div>
                </div>
              </Button>
            )
          })
        ) : (
          <div>No Vehicle Display</div>
        )}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
