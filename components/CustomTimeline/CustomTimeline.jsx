import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';
import binh from '../../public/images/dashboard/nguyen-van-binh.png';

const useStyles = makeStyles((theme) => ({
  timeline: {
    padding: 0,
    '&>li::before': {
      flex: 0,
      padding: 0,
    },
  },
  separatorHead: {
    '&>span': {
      marginBottom: '0px',
    },
  },
  separator: {
    '&>span': {
      margin: '0px 0px',
    },
  },
  date: {
    marginRight: '15px',
    color: '#4E5260',
    fontSize: '14px',
    fontWeight: 500,
  },
  today: {
    background: '#EB5757',
    color: '#FFFFFF',
    borderRadius: '5px',
    padding: '3px 7px',
    fontSize: '12px',
    fontWeight: 500,
  },
  userContainer:{
      display: "flex",
      alignItems: "center",
  },
  personImg:{
      marginRight: "8px",
  },
  contentContainer:{
      margin: "40px 0px 0px 40px",
      border: "2px solid gray",
      padding: "16px",
      borderRadius: "5px"
  }
}));

export default function BasicTimeline() {
  const classes = useStyles();
  return (
    <Timeline className={classes.timeline}>
      <TimelineItem>
        <TimelineSeparator className={classes.separatorHead}>
          <TimelineDot style={{ background: 'orange' }} />
          <TimelineConnector style={{ height: '100px', background: 'orange' }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className={classes.date}>26/04/2021</span>
          <span className={classes.today}>Hôm nay</span>
          <div className={classes.contentContainer}>
            <div className={classes.userContainer}>
              <img src={binh} alt="Person" className={classes.personImg}/>
              <span>Nguyen Van Binh</span>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className={classes.separator}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        {/* <TimelineContent>Code</TimelineContent> */}
      </TimelineItem>
    </Timeline>
  );
}
