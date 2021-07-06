import {
    container,
    cardTitle,
    whiteColor,
    grayColor,
    successColor,
    dangerColor,
    primaryColor,
    primaryBoxShadow,
    hexToRgb,
    blackColor,
  } from "../../material-dashboard-pro-react";
  import customCheckboxRadioSwitch from "../customCheckboxRadioSwitch";
  
  const loginPageStyle = (theme) => ({
    ...customCheckboxRadioSwitch,
    cardIconTitle: {
      ...cardTitle,
      marginTop: "15px",
      marginBottom: "0px",
    },
    staticFormGroup: {
      marginLeft: "0",
      marginRight: "0",
      paddingBottom: "10px",
      margin: "8px 0 0 0",
      position: "relative",
      "&:before,&:after": {
        display: "table",
        content: '" "',
      },
      "&:after": {
        clear: "both",
      },
    },
    formInput: {
      fontFamily: "Roboto",
      color: "red"
    },
    staticFormControl: {
      marginBottom: "0",
      paddingTop: "8px",
      paddingBottom: "8px",
      minHeight: "34px",
    },
    inputAdornment: {
      marginRight: "8px",
      position: "relative",
    },
    inputAdornmentIconSuccess: {
      color: successColor[0] + "!important",
    },
    inputAdornmentIconError: {
      color: dangerColor[0] + "!important",
    },
    container: {
      ...container,
      zIndex: "4",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "100px",
      },
    },
    cardTitle: {
      ...cardTitle,
      color: whiteColor,
    },
    textCenter: {
      textAlign: "center",
    },
    justifyContentCenter: {
      justifyContent: "center !important",
    },
    customButtonClass: {
      "&,&:focus,&:hover": {
        color: whiteColor,
      },
      marginLeft: "5px",
      marginRight: "5px",
    },
    inputAdornment: {
      marginRight: "18px",
    },
    inputAdornmentIcon: {
      color: "#8181A5",
      fontSize: "18px",
    },
    cardHidden: {
      opacity: "0",
      transform: "translate3d(0, -60px, 0)",
    },
    cardHeader: {
      marginBottom: "20px",
    },
    socialLine: {
      padding: "0.9375rem 0",
    },
    customRecoveryLink: {
      position: "absolute",
      right: "0",
      top: "25px",
      color: "#25345C",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "16.8px",
    },
    authMainTitle: {
      fontSize: "32px",
      lineHeight: "42px",
      fontWeight: "700",
      color: "#25345C",
    },
    authSubTitle: {
      fontSize: "14px",
      lineHeight: "21px",
      color: "#8181A5",
    },
    danger: {
      color: dangerColor[0] + "!important",
    },
    // customSelectStyle.js
    select: {
      padding: "12px 0 7px",
      fontSize: ".75rem",
      fontWeight: "400",
      lineHeight: "1.42857",
      textDecoration: "none",
      textTransform: "uppercase",
      color: grayColor[2],
      letterSpacing: "0",
      "&:focus": {
        backgroundColor: "transparent",
      },
      "&[aria-owns] + input + svg": {
        transform: "rotate(180deg)",
      },
      "& + input + svg": {
        transition: "all 300ms linear",
      },
    },
    selectFormControl: {
      margin: "7px 0 17px 0 !important",
      "& > div": {
        "&:before": {
          borderBottomWidth: "1px !important",
          borderBottomColor: grayColor[4] + "!important",
        },
        "&:after": {
          borderBottomColor: primaryColor[0] + "!important",
        },
      },
    },
    selectLabel: {
      fontSize: "12px",
      textTransform: "uppercase",
      color: grayColor[2] + " !important",
      top: "8px",
    },
    selectMenu: {
      "& > div > ul": {
        border: "0",
        padding: "5px 0",
        margin: "0",
        boxShadow: "none",
        minWidth: "100%",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "block",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: whiteColor,
        backgroundClip: "padding-box",
      },
      "& $selectPaper $selectMenuItemSelectedMultiple": {
        backgroundColor: "inherit",
      },
      "& > div + div": {
        maxHeight: "266px !important",
      },
    },
    selectMenuItem: {
      fontSize: "13px",
      padding: "10px 20px",
      margin: "0 5px",
      borderRadius: "2px",
      transition: "all 150ms linear",
      display: "block",
      clear: "both",
      fontWeight: "400",
      lineHeight: "2",
      whiteSpace: "nowrap",
      color: grayColor[7],
      paddingRight: "30px",
      "&:hover": {
        backgroundColor: primaryColor[0],
        color: whiteColor,
        ...primaryBoxShadow,
      },
    },
    selectMenuItemSelected: {
      backgroundColor: primaryColor[0] + "!important",
      color: whiteColor,
    },
    selectMenuItemSelectedMultiple: {
      backgroundColor: "transparent !important",
      "&:hover": {
        backgroundColor: primaryColor[0] + "!important",
        color: whiteColor,
        ...primaryBoxShadow,
        "&:after": {
          color: whiteColor,
        },
      },
      "&:after": {
        top: "16px",
        right: "12px",
        width: "12px",
        height: "5px",
        borderLeft: "2px solid currentColor",
        transform: "rotate(-45deg)",
        opacity: "1",
        color: grayColor[2],
        position: "absolute",
        content: "''",
        borderBottom: "2px solid currentColor",
        transition: "opacity 90ms cubic-bezier(0,0,.2,.1)",
      },
    },
    selectPaper: {
      boxSizing: "borderBox",
      borderRadius: "4px",
      padding: "0",
      minWidth: "100%",
      display: "block",
      border: "0",
      boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
      backgroundClip: "padding-box",
      margin: "2px 0 0",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "transparent",
      maxHeight: "266px",
    },
    liDescription: {
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#1C1D21",
    },
    adornedEnd: {
      backgroundColor: "#ccc",
      height: "2.36rem",
      width: "137%",
      maxHeight: "8rem",
      borderRadius: "0px !important"
    },
  
    tittleLogo: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "18px",
      color: "#E26740"
    },
    leaf: {
      width: "44.1px",
      height: "52.5px"
    },
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    labelTitle: {
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "1.2rem",
    },
    buttonLabel: {
      backgroundColor: "#E26740",
      color: "#FFFFFF",
      width: "185px",
      height: "38px",
    },
    forgetPassword: {
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: "14px",
      fontStyle: "normal",
      color: "#828282",
      lineHeight: "16px",
    },
    nameTitle: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "7%"
    },
    buttonPosition: {
      display: "flex",
      justifyContent: "center",
    },
    login: {
      width: "325px",
      height: "419px"
    },
    recovery: {
      width: "325px",
      height: "325px"
    },
    setPassWord: {
      width: "325px",
      height: "375px"
    }
  });
  
  export default loginPageStyle;
  