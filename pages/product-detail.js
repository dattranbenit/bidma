import React, { useEffect, useState } from 'react';


//Material UI Cores
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomImageGallery from '../components/CustomGallery/CustomImageGallery';
import HitachiIcon from "../components/Icons/HitachiIcon"
import BidInfoCard from '../modules/Pages/product-detail/BidInfoCard';
import { BiHome } from 'react-icons/bi';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import {
  getBidInfo,
  getImagesProductInfo,
} from '../redux/actions';

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 40,
  },
  productCard: {
    marginBottom: 22,
    boxShadow: "none !important",
    background: "#FFFFFF",
    borderRadius: 4
  },
  productModel: {
    color: "#333333",
    fontSize: 18,
    lineHeight: "21px",
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginBottom: 6
  },
  productTag: {
    color: "#828282",
    fontSize: 16,
    lineHeight: "19px",
    fontWeight: "500",
    fontFamily: "Roboto",
    paddingBottom: 8,
    borderBottom: "1px solid #F2F3F7",
    marginBottom: 10
  },
  productManufacture: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  modelDescription: {
    marginTop: 50,
    background: "#FFFFFF",
    borderRadius: 4,
    padding: 30
  },
  breadcrumb:{
    fontFamily:"Roboto",
    marginBottom:"20px",
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

const ProductDetail = (props) => {
  const {
    bidInfo, getBidInfo,
    imagesProduct, getImagesProductInfo
  } = props
  const classes = useStyles();

  const [galleryIndex, setGalleryIndex] = useState(0)

  useEffect(() => {
    getBidInfo();
    getImagesProductInfo();
  }, [])

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
                  <Link color="inherit" href="/categories">
                        Phiên JEN 04-30
                  </Link>
                  <Link color="textPrimary">IWAFUJI T-30-742</Link>
              </Breadcrumbs>
          </div>
      <div className={classes.pageContainer}>
        <Grid item md={8} sm={12} xs={12} >
          <CustomImageGallery imagesProduct={imagesProduct} galleryIndex={galleryIndex} setGalleryIndex={setGalleryIndex} showNav={false} />
          <div className={classes.modelDescription}>
            <div>Mô tả thêm về thông tin model</div>
            <div>{galleryIndex}</div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} >
          <Card className={classes.productCard}>
            <CardContent>
              <div className={classes.productModel}>TADANO TR160M-2-525264</div>
              <div className={classes.productTag}>#TR160M-2-525264</div>
              <div className={classes.productManufacture}>
                <div>Hãng sản xuất</div>
                <HitachiIcon />
              </div>
            </CardContent>
          </Card>

          <BidInfoCard
            bidId={bidInfo.bidId}
            yearMade={bidInfo.yearMade}
            hourInDuty={bidInfo.hourInDuty}
            from={bidInfo.from}
            startPrice={bidInfo.startPrice}
            dateOpen={bidInfo.dateOpen}
            dateClosed={bidInfo.dateClosed}
            predictedTotalCost={bidInfo.predictedTotalCost}
            remainingTime={bidInfo.remainingTime}
          />
        </Grid>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    bidInfo: state.common.bidInfo,
    imagesProduct: state.common.imagesProduct
  };
};

const mapDispatchToProps = {
  getBidInfo,
  getImagesProductInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
