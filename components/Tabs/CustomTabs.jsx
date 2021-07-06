import React from "react";
import { Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
const styles = {
  tabStyles: {
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tabContainer:{
    background: '#FFFFFF',
    width : "98.9%",
    margin: "24px 0px",
  },
  indicator: {
    background: "#E26740",
    minWidth: "75px",
    position: "absolute",
    bottom: "10px",
  },
  tabItemStyles: {
    minWidth: "75px",
    textTransform: "none"
  }
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(props.value || 0);

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const handleChange = (event, newValue) => {
    props.tabValue(newValue)
    setValue(newValue)
  };

  const classes = useStyles()

  return (
    <div className={classes.tabContainer} >
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabStyles}
        classes={{
          indicator: classes.indicator
        }}
        position="static"
        variant="scrollable"
      >
        {props.tabs.map((tab) => {
          let tabName = tab
          let tabLabel = tabName.replace(/\s/g, '')
          return (
            <Tab
              className={classes.tabItemStyles}
              label={tabName}
              {...a11yProps(tabLabel)}
              disableRipple={"true"}
            >
              {tabName}
            </Tab>
          )
        })}
      </Tabs>
    </div>
  )
}