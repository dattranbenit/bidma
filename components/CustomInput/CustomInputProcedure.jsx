import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

import styles from "../../assets/jss/material-dashboard-pro-react/components/customInputStyle";

const useStyles = makeStyles(styles);

export default function CustomInputProcedure(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    helperText,
    firstIcon,
    lastIcon,
    marginBottom,
    marginTop,
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  var helpTextClasses = classNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });
  let newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined,
  };
  return (
    <div>
      {labelText !== undefined ? (
        <TextField
          id={id}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{firstIcon}</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">{lastIcon}</InputAdornment>
            ),
          }}
          placeholder={labelText}
          {...inputProps}
          inputProps={newInputProps}
          style={{
            width: "285px",
            height: "38px",
            marginBottom: `${marginBottom}`,
            marginTop: `${marginTop}`,
          }}
          size="small"
        />
      ) : null}
    </div>
  );
}

CustomInputProcedure.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  firstIcon: PropTypes.node,
  lastIcon: PropTypes.node,
  helperText: PropTypes.node,
};
