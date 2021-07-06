import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import { Grid } from "@material-ui/core";
import Card from "../components/CustomCard/Card"

const styles = {
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0",
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem",
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px",
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px",
    },
  },
  marginTop30: {
    marginTop: "30px",
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px",
    },
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999",
  },
};

const useStyles = makeStyles(styles);

export default function Safety() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className={classes.testimonialIcon}>
                  <FormatQuote />
                
                  <h5 className={classes.cardTestimonialDescription}>
                    No Data
                  </h5>
                  <h6 className={classes.cardCategory}></h6>
                  </div>
                  </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
