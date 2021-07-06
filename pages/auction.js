import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import binh from '../public/images/dashboard/nguyen-van-binh.png';
import tag from '../public/images/dashboard/auction-tag.png';
import CustomSelectComponent from '../modules/Pages/auction/CustomSelectComponent';
import CustomTabs from '../components/Tabs/CustomTabs';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { BiHome } from 'react-icons/bi';

const useStyles = makeStyles(() => ({
  timeline: {
    padding: 0,
    background: "#FFFFFF",
    paddingLeft: 20,
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
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  },
  personImg: {
    marginRight: '8px',
  },
  contentContainer: {
    margin: '40px 0px 0px 4px',
    border: '2px solid #F2F3F7',
    padding: '16px',
    borderRadius: '5px',
    width: '80%',
  },
  tagDetailContainer: {
    marginLeft: '12px',
  },
  online: {
    color: '#2F80ED',
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '8px',
  },
  timeDate: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#2F80ED',
    marginBottom: '8px',
  },
  second: {
    background: '#F2F3F7',
    padding: '5px',
    color: '#4E5260',
    fontSize: '12px',
    maxWidth: 100,
    marginRight: 0,
    marginLeft: "auto",
    marginBottom: "5px",
  },
  nguyen: {
    color: '#2F80ED',
    fontSize: '14px',
    fontWeight: 400,
  },
  mb3: {
    marginBottom: "3px",
  },

  breadcrumb:{
    fontFamily:"Roboto",
    //marginTop:"20px",
    display:"flex",

  },
  iconHome:{
      fontSize:"25px",
      lineHeight:0,  
      marginRight:"3px",
      color:"#B7BBCB"
  },

}));

const Auction = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

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
                <Link color="textPrimary">Đấu giá</Link>
            </Breadcrumbs>
        </div>

      <CustomTabs tabs={['Lịch hẹn đấu giá', 'Theo dõi đơn hàng']} tabValue={handleChangeTab} />
      <Timeline className={classes.timeline}>
        <TimelineItem>
          <TimelineSeparator className={classes.separatorHead}>
            <TimelineDot style={{ background: '#E26740' }} />
            <TimelineConnector style={{ height: '100px', background: '#E26740' }} />
          </TimelineSeparator>
          <TimelineContent>
            <span className={classes.date}>26/04/2021</span>
            <span className={classes.today}>Hôm nay</span>
            <Grid container className={classes.contentContainer}>
              <Grid item xs ={12} sm={8}>
                <Grid container>
                  <Grid item xs={12} className={classes.userContainer}>
                    <img src={binh} alt="Person" className={classes.personImg} />
                    <span className={classes.nguyen}>Nguyễn Văn Bình</span>
                  </Grid>
                  <Grid item xs={12} style={{ display: 'flex' }}>
                    <img src={tag} alt="Person Tag" />
                    <div className={classes.tagDetailContainer}>
                      <div className={classes.mb8}>HITACHI SUB-2120-221</div>
                      <div className={classes.mb8}>Phiên đấu giá: JEN 04-26</div>
                      <div className={classes.mb8}>Thời gian: 14:25 25/04/2021 - 16:30 26/04/2021</div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} style={{ textAlign: "right" }}>
                <div className={classes.online}>ONLINE</div>
                <div className={classes.timeDate}>15:00 26/04/2021</div>
                <div className={classes.second}>1 ngày 12:20:15</div>
                <CustomSelectComponent
                  listValues={['Chờ xác nhận']}
                  selectValue={'Chờ xác nhận'}
                  placeholder={'Chờ xác nhận'}
                />
              </Grid>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator className={classes.separator}>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default Auction;
