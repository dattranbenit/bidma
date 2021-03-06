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
          <div className={classes.footerBoxHeader}>C??ng ty c??? ph???n ph??? t??ng TNT</div>
          <div className={classes.columnChunk}>
            <div style={{ margin: '8px 0px 20px 0px' }}>Tr??? s??? ch??nh:</div>
            <div>DP Huy???n, Th??? Tr???n Qu???c Oai, huy???n Qu???c Oai, T.p H?? N???i</div>
          </div>
          <div className={classes.columnChunk}>
            <div style={{ margin: '8px 0px 20px 0px' }}>V??n ph??ng giao d???ch:</div>
            <div>T??a nh?? Toyota M??? ??inh. t???ng 20 s??? 18 T??n Th???t Thuy???t, C???u Gi???y, H?? N???i</div>
          </div>
          <div className={classes.columnChunk}>
            <div style={{ margin: '8px 0px 20px 0px' }}>Kho m??y:</div>
            <div>Ga Ph?? Th???y ??? Gia L??m ??? H?? N???i</div>
          </div>
          <div className={classes.columnChunk}>
            M?? s??? doanh nghi???p: 0106080492. C???p ng??y 09 th??ng 01 n??m 2013 t???i S??? KH & ??T T.p H?? N???i
          </div>
        </Grid>

        <Grid item md={4} sm={12} xs={12} className={(classes.footerColumn, classes.midContact)}>
          <div className={classes.footerBoxHeader}>K???T N???I V???I CH??NG T??I</div>
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
            <div>T???i ???ng d???ng t???:</div>
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
          <div className={classes.footerBoxHeader}>Quy ?????nh - Bi???u ph?? d??? to??n</div>
          <div className={classes.columnChunk}>
            <div>Quy tr??nh t??m m??y trong phi??n ?????u th???u v?? ?????t h??ng</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Quy tr??nh t??m m??y c?? s???n trong kho v?? ?????t h??ng</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Bi???u ph?? nh???p kh???u ?????i v???i thi???t b??? ???????c mua qua ?????u gi?? - ?????u th???u - mua tr???c tuy???n</div>
          </div>
          <div className={classes.columnChunk}>
            <div>Nh???ng c??u h???i th?????ng g???p</div>
          </div>
          <div className={classes.columnChunk}>
            <div>??i???u kho???n & Ch??nh s??ch</div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} className={(classes.footerColumn, classes.lastContact)}>
          <div className={classes.footerBoxHeader}>K???T N???I V???I CH??NG T??I</div>
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
            <div>T???i ???ng d???ng t???:</div>
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
