import React from "react";
import {Link, useHistory} from "react-router-dom";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons

// core components
import Card from "../components/CustomCard/Card";

import styles from "../assets/jss/material-dashboard-pro-react/views/loginPageStyle";

// import {loginByCognito} from "reducers/authentication";
import PersonIcon from "../components/Icons/PersonIcon";
import CustomInputProcedure from "../components/CustomInput/CustomInputProcedure";
import LockIcon from "../components/Icons/LockIcon";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import leaf from "../public/images/dashboard/leaf.png"

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const [usernameState, setUsernameState] = React.useState("success");
  const [passwordState, setPasswordState] = React.useState("success");

  const [errorMessage, setErrorMessage] = React.useState("");


  let [password, setPassword] = React.useState("")
  let [showPassword, setShowPassword] = React.useState(false)
  let [typePassword, setTypePassword] = React.useState("password")


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

  // const handleSubmit = async () => {
  //   setErrorMessage("");
  //   console.log(`handleSubmit: ${username} - ${password}`);
  //   const result = await loginByCognito(username, password);
  //   if (result.success) {
  //     history.push("/#");
  //   } else {
  //     setErrorMessage(result.message);
  //   }
  // };

  return (
    <div className={classes.root}>
      <Card className={classes.login}>
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
                Đăng nhập
              </p>
            </Grid>
            <Grid item>
              <CustomInputProcedure
                labelText="Tên đăng nhập"
                id="username"
                formControlProps={{
                  fullWidth: true,
                }}
                firstIcon={<PersonIcon/>}
                inputProps={{
                  onChange: (event) => {
                    setUsername(event.target.value);
                  },
                }}
                marginTop="3%"
                marginBottom="7%"
              />
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
                    setUsername(event.target.value);
                  },
                }}
                marginBottom="7%"
              />
            </Grid>
            <Grid item style={{margin: "4%"}}>
              <div style={{textAlign: "center"}}>
                <a href="/auth/recovery-password">
                  <p
                    className={classes.forgetPassword}
                  >
                    Quên mật khẩu?
                  </p>
                </a>
              </div>
            </Grid>
            <Grid item style={{margin: "4%"}}>
              <div style={{textAlign: "center"}}>
                <a href="/auth/signup">
                  <p
                    className={classes.forgetPassword}
                  >
                    Đăng kí tài khoản mới
                  </p>
                </a>
              </div>
            </Grid>
            <Grid item className={classes.buttonPosition}>
              <a href="/home">
                <Button
                  variant="contained"
                  className={classes.buttonLabel}
                >
                  ĐĂNG NHẬP
                </Button>
              </a>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
}
