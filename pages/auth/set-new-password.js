import React from "react";
import {useHistory} from "react-router-dom";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons

// core components
import Card from "../../components/CustomCard/Card";

import styles from "../../assets/jss/material-dashboard-pro-react/views/loginPageStyle";

// import {loginByCognito} from "reducers/authentication";
import CustomInputProcedure from "../../components/CustomInput/CustomInputProcedure";
import LockIcon from "../../components/Icons/LockIcon";
import leaf from "../../public/images/dashboard/leaf.png"

const useStyles = makeStyles(styles);

export default function SetNewPassword() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const [usernameState, setUsernameState] = React.useState("success");
  const [passwordState, setPasswordState] = React.useState("success");

  const [errorMessage, setErrorMessage] = React.useState("");


  let [password, setPassword] = React.useState("")
  let [showPassword, setShowPassword] = React.useState(false)
  let [typePassword, setTypePassword] = React.useState("password")

  let [newPassword, setNewPassword] = React.useState("")
  let [showNewPassword, setShowNewPassword] = React.useState(false)
  let [typeNewPassword, setTypeNewPassword] = React.useState("password")


  const handleClickShowPassword = () => {
    if (showPassword === false) {
      setShowPassword(true)
      setTypePassword("text");
      console.log(typePassword)
    } else {
      setShowPassword(false)
      setTypePassword("password");
      console.log(typePassword)

    }
  };


  const handleClickShowNewPassword = () => {
    if (showNewPassword === false) {
      setShowNewPassword(true)
      setTypeNewPassword("text");
      console.log(typePassword)
    } else {
      setShowNewPassword(false)
      setTypeNewPassword("password");
      console.log(typeNewPassword)

    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const history = useHistory();

  React.useEffect(() => {
    let id = setTimeout(function () {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();

  const handleSubmit = async () => {
    setErrorMessage("");
    //  if (minLengthState === "") {
    //    setminLengthState("error");
    //  }
    //  if (maxLengthState === "") {
    //    setmaxLengthState("error");
    //  }
    console.log(`handleSubmit: ${username} - ${password}`);
    const result = await loginByCognito(username, password);
    if (result.success) {
      history.push("/#");
    } else {
      setErrorMessage(result.message);
    }
  };

  return (
    <div
      className={classes.root}
    >
      <Card className={classes.setPassWord}>
        <form style={{margin: "7%"}}>
          <Grid container direction="column">
            <Grid item className={classes.root}>
              <img src={leaf} className={classes.leaf}/>
            </Grid>
            <Grid item className={classes.nameTitle}>
              <p className={classes.tittleLogo}>BIDMA portal</p>
            </Grid>
            <Grid item>
              <p
                className={classes.labelTitle}
              >
                Mật khẩu mới
              </p>
            </Grid>
            <Grid item>
              <CustomInputProcedure
                labelText="Mật khẩu"
                id="password"
                formControlProps={{
                  fullWidth: true,
                }}
                firstIcon={<LockIcon/>}
                lastIcon={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    className={classes.adornedEnd}
                  >
                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                }
                inputProps={{
                  type: `${typePassword}`,
                  autoComplete: "off",
                  onChange: (event) => {
                    setPassword(event.target.value);
                  },
                }}
                marginTop="5%"
                marginBottom="7%"
              />
            </Grid>
            <Grid item>
              <CustomInputProcedure
                labelText="Xác nhận mật khẩu"
                id="newPassword"
                formControlProps={{
                  fullWidth: true,
                }}
                firstIcon={<LockIcon/>}
                lastIcon={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    className={classes.adornedEnd}
                  >
                    {showNewPassword ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                }
                inputProps={{
                  type: `${typeNewPassword}`,
                  autoComplete: "off",
                  onChange: (event) => {
                    setNewPassword(event.target.value);
                  },
                }}
                marginBottom="10%"
              />
            </Grid>
            <Grid
              item
              className={classes.buttonPosition}
            >
                <a href="/">
              <Button
                variant="contained"
                className={classes.buttonLabel}
              >
                XÁC NHẬN
              </Button>
              </a>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
}
