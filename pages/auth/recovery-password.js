import React from "react";
// import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
// import LockOutline from "@material-ui/icons/LockOutline";


// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import Button from "@material-ui/core/Button";
import Card from "../../components/CustomCard/Card";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";

// import {STEP_RECOVER_PASSWORD} from "config/constants";

import styles from "../../assets/jss/material-dashboard-pro-react/views/loginPageStyle";
// import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";

const useStyles = makeStyles(styles);

// components
// import RecoverCompleted from "./components/RecoverCompleted";
// import RecoverNewPassword from "./components/RecoverNewPassword";
// import RecoverRequest from "./components/RecoverRequest";
// import RecoverConfirmmationSent from "./components/RecoverConfirmmationSent";

// import {loginByCognito} from "reducers/authentication";
import Grid from "@material-ui/core/Grid";
import CustomInputProcedure from "../../components/CustomInput/CustomInputProcedure";
// import PersonIcon from "../../components/Icons/PersonIcon";
// import LockIcon from "../../components/Icons/LockIcon";
// import EyeIcon from "../../components/Icons/EyeIcon";
import MailIcon from "../../components/Icons/MailICon";
import LeftArrowIcon from "../../components/Icons/LeftArrowIcon";
import leaf from "../../public/images/dashboard/leaf.png"

export default function RecoveryPasswordPage() {
//   const [step, setStep] = React.useState(STEP_RECOVER_PASSWORD.REQUEST); // CONFIRMATION_SENT REQUEST CHANGE_PASSWORD

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
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

  const handleCallbackRequest = (username) => {
    console.log(`handleCallbackRequest: ${username}`);
    setStep(STEP_RECOVER_PASSWORD.CONFIRMATION_SENT);
    setUsername(username);
  };

  return (
    <>
      {/*{step === STEP_RECOVER_PASSWORD.REQUEST && (*/}
      {/*  <>*/}
      {/*    <RecoverRequest callBack={handleCallbackRequest} />*/}
      {/*  </>*/}
      {/*)}*/}
      {/*{step === STEP_RECOVER_PASSWORD.CONFIRMATION_SENT && (*/}
      {/*  <>*/}
      {/*    <RecoverConfirmmationSent*/}
      {/*      username={username}*/}
      {/*      callBack={() => {*/}
      {/*        setStep(STEP_RECOVER_PASSWORD.CHANGE_PASSWORD);*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </>*/}
      {/*)}*/}
      {/*{step === STEP_RECOVER_PASSWORD.CHANGE_PASSWORD && (*/}
      {/*  <>*/}
      {/*    <RecoverNewPassword*/}
      {/*      username={username}*/}
      {/*      callBack={() => {*/}
      {/*        setStep(STEP_RECOVER_PASSWORD.COMPLETED);*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </>*/}
      {/*)}*/}
      {/*{step === STEP_RECOVER_PASSWORD.COMPLETED && (*/}
      {/*  <>*/}
      {/*    <RecoverCompleted />*/}
      {/*  </>*/}
      {/*)}*/}
      <div
        className={classes.root}
      >
        <div>
          <Grid container direction="column">
            <Grid item>
              <Card className={classes.recovery}>
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
                        Lấy lại mật khẩu
                      </p>
                    </Grid>
                    <Grid item>
                      <CustomInputProcedure
                        labelText="Mail"
                        id="username"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        firstIcon={<MailIcon/>}
                        inputProps={{
                          onChange: (event) => {
                            setUsername(event.target.value);
                          },
                        }}
                        marginTop="5%"
                        marginBottom="9%"
                      />
                    </Grid>
                    <Grid item className={classes.buttonPosition}>
                        <a href="/auth/set-new-password">
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
            </Grid>

            <Grid item>
              <LeftArrowIcon/>
                <a href="/" style={{color: "#2F80ED"}}>
                  Về trang đăng nhập
                </a>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
