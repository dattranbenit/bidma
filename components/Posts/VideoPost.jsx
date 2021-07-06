import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    margin: 'auto',
    borderRadius: "4px",
    borderRadius: '5px',
  },

  date: {
    margin: "5px 0px 0px 0px",
    color: "#828282",
    fontSize: "14px",
  },
  cardText: {
    color: "#4E5260",
    fontSize: "14px",
    fontWeight: 400,
    marginBottom: "16px",
  },
  cardHeader: {
    color: '#333333',
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: 'normal',
    margin: "0px 0px 5px 0px",
  },
}))

const VideoPost = (props) => {
  const { name, remaining, model, price, location, yearMade, onBoard, videoPost } = props

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <a href={videoPost.link}>
          <img src={videoPost.image} alt='' width="100%" height="100%"/>
        </a>
        <CardContent>
            <div className={classes.cardHeader}>{videoPost.title}</div>
            <div className={classes.date}>{videoPost.date}</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VideoPost;