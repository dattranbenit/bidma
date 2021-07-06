import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScaleLoader from "react-spinners/ScaleLoader";


const useStyles = makeStyles(() => ({
    loaderPosition:{
        textAlign: "center",
    }
}));

const CustomLoading = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.loaderPosition}>
        <ScaleLoader color={"#E26740"} loading={true}/>
    </div>
  );
};

export default CustomLoading;
