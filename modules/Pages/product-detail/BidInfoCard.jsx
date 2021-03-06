import React from "react"

// core components
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(() => ({
  productCard: {
    boxShadow: "none !important",
    background: "#FFFFFF",
    borderRadius: 4,
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  lineWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 8,
    borderBottom: "1px solid #F2F3F7",
    fontSize: 16,
    lineHeight: "19px",
    fontFamily: "Roboto",
    color: "#4E5260",
    marginBottom: 10,
  },
  totalCostWrapper: {
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 20,
    lineHeight: "23px",
    fontFamily: "Roboto",
    color: "#333333",
    fontWeight: 500,
  },
  viewHistory: {
    color: "#E26740",
    fontSize: 14,
    lineHeight: "16px",
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer"
    }
  },
  lineValue: {
    fontWeight: 500,
  },
  totalCost: {
    color: "#2F80ED",
    fontSize: 16,
    lineHeight: "19px",
    fontFamily: "Roboto",
    marginBottom: 6,
  },
  total: {
    color: "#E26740",
    fontSize: 16,
    lineHeight: "19px",
    fontFamily: "Roboto",
    paddingBottom: 10,
    borderBottom: "1px solid #F2F3F7",
    marginBottom: 22,
    fontWeight: 500
  },
  remainingTime: {
    color: "#EB5757",
    fontSize: 14,
    lineHeight: "16px",
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  bidButton: {
    width: 186,
    height: 42,
    background: "#EB5757",
    borderRadius: 4,
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: "19px",
    fontFamily: "Roboto",
    fontWeight: 500,
    "&:hover": {
      opacity: 0.8,
      background: "#EB5757",
    },
  },
}));

const BidInfoCard = (props) => {
  const { bidId, yearMade, hourInDuty, from, startPrice, dateOpen, dateClosed, predictedTotalCost, remainingTime } = props

  const classes = useStyles();

  return (
    <Card className={classes.productCard}>
      <CardContent>
        <div className={classes.headerWrapper}>
          <div className={classes.header}>Phi??n ?????u gi??</div>
          <div className={classes.viewHistory}>
            <div>Xem l???ch s??? ?????u gi??</div>
            <ChevronRightIcon />
          </div>
        </div>
        <div className={classes.lineWrapper}>
          <div>Phi??n ?????u gi??</div>
          <div className={classes.lineValue}>{bidId}</div>
        </div>
        <div className={classes.lineWrapper}>
          <div>N??m s???n xu???t</div>
          <div className={classes.lineValue}>{yearMade}</div>
        </div>
        <div className={classes.lineWrapper}>
          <div>S??? gi??? s??? d???ng</div>
          <div className={classes.lineValue}>{hourInDuty}</div>
        </div>
        <div className={classes.lineWrapper}>
          <div>Kho ??i</div>
          <div className={classes.lineValue}>{from}</div>
        </div>
        <div className={classes.lineWrapper}>
          <div>Gi?? kh???i ??i???m</div>
          <div className={classes.lineValue}>{startPrice}</div>
        </div>
        <div className={classes.lineWrapper}>
          <div>Ng??y m??? phi??n</div>
          <div className={classes.lineValue}>{dateOpen}</div>
        </div>
        <div className={classes.lineWrapper}>
          <div>Ng??y ????ng phi??n</div>
          <div className={classes.lineValue}>{dateClosed}</div>
        </div>
        <div className={classes.totalCostWrapper}>
          <div className={classes.totalCost}>T??nh t???ng chi ph?? d??? ki???n v??? Vi???t Nam</div>
          <ChevronRightIcon />
        </div>
        <div className={classes.total}>{predictedTotalCost}</div>
        <div className={classes.totalCostWrapper}>
          <div className={classes.remainingTime}>{remainingTime}</div>
          <Button className={classes.bidButton}>?????U GI??</Button>
        </div>
      </CardContent>
    </Card>
  )
}


export default BidInfoCard;