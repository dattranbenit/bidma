import React, { useContext } from 'react';
import FooterLogo from './FooterLogo';
import { Box, Button, makeStyles, Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import AppContext from '../../contextProvider/AppContextProvider/AppContext';
import { THEME_TYPES } from '../../../constants/ThemeOptions';

// @material-ui/icons
import GlobeIcon from '../../../../components/Icons/GlobeIcon';
import PhoneIcon from '../../../../components/Icons/PhoneIcon';
import EmailIcon from '../../../../components/Icons/EmailIcon';
import FacebookIcon from '../../../../components/Icons/FacebookIcon';
import YoutubeIcon from '../../../../components/Icons/YoutubeIcon';
import AppstoreIcon from '../../../../components/Icons/AppstoreIcon';
import PlaystoreIcon from '../../../../components/Icons/PlaystoreIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#4E5260',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    background: '#EDEDEF',
    marginTop: '10px',
  },
  gridRoot: {
    display: 'flex',
    // columnGap: '50px',
    borderBottom: '1px solid #B7BBCB',
  },
  btnRoot: {
    [theme.breakpoints.down('xs')]: {
      padding: '6px 12px',
      fontSize: 11,
    },
  },
  footerBoxHeader: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '19.5px',
    fontFamily: 'Roboto',
    color: '#4E5260',
    textTransform: 'uppercase',
    paddingBottom: '20px',
    borderBottom: '1px solid #B7BBCB',
    marginBottom: '12px',
    maxHeight: '60px',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  columnChunk: {
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '22px',
  },
  iconBtnRoot: {
    textTransform: 'none',
    color: '#FFFFFF',
    borderRadius: '4px',
    background: '#E26740',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    height: '40px',
    width: '140px',
    '&:hover': {
      opacity: '0.8',
      background: '#E26740',
    },
  },
  copyright: {
    margin: '20px 0px 20px 0px',
  },
  midContact: {
    display: "none",
    [theme.breakpoints.between('lg', 'xl')]: {
      display: "block"
    },
  },
  lastContact: {
    display: "block",
    [theme.breakpoints.between('lg', 'xl')]: {
      display: "none"
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { themeType } = useContext(AppContext);
  const date = new Date();

  return (
    <Box className={classes.root} {...props}>
      <Grid container className={classes.gridRoot}>
        <Grid item md={4} sm={6} xs={12} className={classes.footerColumn}>
          <div className={classes.footerBoxHeader}>Công ty cổ phần phụ tùng TNT</div>
          <div className={classes.columnChunk}>
            <div style={{ margin: '8px 0px 20px 0px' }}>Trụ sở chính:</div>
            <div>DP Huyện, Thị Trấn Quốc Oai, huyện Quốc Oai, T.p Hà Nội</div>
          </div>
          <div className={classes.columnChunk}>
            <div style={{ margin: '8px 0px 20px 0px' }}>Văn phòng giao dịch:</div>
            <div>Tòa nhà Toyota Mỹ Đinh. tầng 20 số 18 Tôn Thất Thuyết, Cầu Giấy, Hà Nội</div>
          </div>
          <div className={classes.columnChunk}>
            <div style={{ margin: '8px 0px 20px 0px' }}>Kho máy:</div>
            <div>Ga Phú Thụy – Gia Lâm – Hà Nội</div>
          </div>
          <div className={classes.columnChunk}>
            Mã số doanh nghiệp: 0106080492. Cấp ngày 09 tháng 01 năm 2013 tại Sở KH & ĐT T.p Hà Nội
          </div>
        </Grid>

        <Grid item md={4} sm={12} xs={12} className={(classes.footerColumn, classes.midContact)}>
          <div className={classes.footerBoxHeader}>KẾT NỐI VỚI CHÚNG TÔI</div>
          <div className={classes.columnChunk}>
            <div>Hotline: 08.33.61.33.66</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Zalo/viber/Line/kakaotalk/Whatapp: 0985.289.318</div>
          </div>
          <div className={classes.columnChunk}>
            <div className={classes.buttonGroup}>
              <GlobeIcon />
              <PhoneIcon />
              <EmailIcon />
              <FacebookIcon />
              <YoutubeIcon />
            </div>
          </div>
          <div className={classes.columnChunk}>
            <div>Tải ứng dụng từ:</div>
            <div className={classes.buttonGroup} style={{ margin: '8px 0px 20px 0px' }}>
              <Button
                classes={{
                  root: classes.iconBtnRoot,
                }}
                startIcon={<AppstoreIcon />}>
                Appstore
              </Button>
              <Button
                classes={{
                  root: classes.iconBtnRoot,
                }}
                startIcon={<PlaystoreIcon />}>
                Playstore
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12} className={classes.footerColumn}>
          <div className={classes.footerBoxHeader}>Quy định - Biểu phí dự toán</div>
          <div className={classes.columnChunk}>
            <div>Quy trình tìm máy trong phiên đấu thầu và đặt hàng</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Quy trình tìm máy có sẵn trong kho và đặt hàng</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Biểu phí nhập khẩu đối với thiết bị được mua qua đấu giá - đấu thầu - mua trực tuyến</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Những câu hỏi thường gặp</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Điều khoản & Chính sách</div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} className={(classes.footerColumn, classes.lastContact)}>
          <div className={classes.footerBoxHeader}>KẾT NỐI VỚI CHÚNG TÔI</div>
          <div className={classes.columnChunk}>
            <div>Hotline: 08.33.61.33.66</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Zalo/viber/Line/kakaotalk/Whatapp: 0985.289.318</div>
          </div>
          <div className={classes.columnChunk}>
            <div className={classes.buttonGroup}>
              <GlobeIcon />
              <PhoneIcon />
              <EmailIcon />
              <FacebookIcon />
              <YoutubeIcon />
            </div>
          </div>
          <div className={classes.columnChunk}>
            <div>Tải ứng dụng từ:</div>
            <div className={classes.buttonGroup} style={{ margin: '8px 0px 20px 0px' }}>
              <Button
                classes={{
                  root: classes.iconBtnRoot,
                }}
                startIcon={<AppstoreIcon />}>
                Appstore
              </Button>
              <Button
                classes={{
                  root: classes.iconBtnRoot,
                }}
                startIcon={<PlaystoreIcon />}>
                Playstore
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item className={classes.copyright}>
        @copyright 2021
      </Grid>
    </Box>
  );
};

export default Footer;
