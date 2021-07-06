import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import newPostImg from '../../public/images/dashboard/new-post-img.png';
import LoveIcon from '../Icons/LoveIcon';
import ShareIcon from '../Icons/ShareIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 165,
    boxShadow: 'none',
    margin: 'auto',
    borderRadius: '4px',
    borderRadius: '5px',
  },
  alignItemsCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  marginRight10: {
    marginRight: '10px',
    cursor: 'pointer',
  },
  date: {
    margin: '5px 0px 12px 0px',
    color: '#828282',
    fontSize: '14px',
  },
  cardHeader: {
    color: '#333333',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  cardText: {
    color: '#4E5260',
    fontSize: '14px',
    fontWeight: 400,
    marginBottom: '16px',
  },
  card: {
    cursor: "pointer",
    width: "98%"
  }
}));

const NewPostCard = (props) => {
  const { name, remaining, model, price, location, yearMade, onBoard, postCards } = props;

  const [loveCount, setLoveCount] = React.useState(0);
  const handleClickLove = () => {
    setLoveCount(prev => prev + 1);
  };

  const changeToNewDetail = () => {
    window.location.href="/news-detail"
  }

  const classes = useStyles();

  return (
    <div onClick={changeToNewDetail} className={classes.card}>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.cardHeader}>
            {postCards.cardHeader}
          </div>
          <div className={classes.date}>{postCards.date}</div>
          <img src={postCards.newPostImage} style={{ width: '100%' }} alt='May Xuc Image' />
          <div className={classes.cardText}>
            {postCards.cardText}
          </div>
          <div className={`${classes.spaceBetween}`}>
            <div className={classes.alignItemsCenter}>
              <LoveIcon onClick={handleClickLove} className={`${classes.marginRight10}`} />
              <span>{loveCount}</span>
            </div>
            <div className={`${classes.alignItemsCenter}`}>
              <span className={`${classes.marginRight10}`}>Chia sẻ</span>
              <ShareIcon />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewPostCard;
