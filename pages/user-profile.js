import React from 'react';

//Material UI Cores
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { getUserProfile } from '../redux/actions';
import { connect } from 'react-redux';
import { userProfile } from '../redux/mock/userProfile/userProfile';




const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "15px",
    fontFamily: "Roboto",
    "& .MuiInputBase-input": {
      fontFamily: "Roboto"
    },
    "& h2":{
      paddingLeft:"20px",
    }
  },
  userProfile: {
    display: "flex",
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column-reverse"
    },
  },
  inputProfile: {
    width: "100%",
    height: "auto",
    marginTop: "20px",
    padding: "10px 20px",
    "& form": {
      marginBottom: "20px",
      "& h5": {
        fontSize: 15,
        fontWeight: 400,
        marginBottom: "10px"
      },
    },
    textarea: {
      width: "100% !important",
      backgroundColor: "#f4f4f7",
      borderRadius: "5px"
    },
    btnProfile: {
      backgroundColor: "#E26740"
    },

  },
  avtProfile: {
    width: "100%",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: "100%",
      margin: "50px 0px 10px 0px",
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: "10px",
      "& img": {
        marginTop: "10px",
      }
    },
  },
  input: {
    display: 'none',

  },
  uploadImg: {
    textAlign: "center",
    margin: "10px",
  }
}));

const currencies = [
  { "country": "Việt Nam" },
  // { "country": "Lào" },
];

const cities = [
  { "city": "Hà Nội" },
  // { "city": "Nam Định" },
  //{ "city": "TP.Hồ Chí Minh" },
];

const districts = [
  { "district": "Cầu Giấy" },
  //{ "district": "Nam Từ Liêm" },
  //{ "district": "Bắc Từ Liêm" },
]




const UserProfile = (props) => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const handleChange = event => {
    setCurrency(event.target.value);
  };
  const { userProfile } = props;
  React.useEffect(() => {
    props.getUserProfile()
  }, [])

  React.useEffect(() => {
    setInput({
      email: userProfile[0]?.email,
      nickName: userProfile[0]?.nickName,
      personalProfile: userProfile[0]?.personalProfile,
      country: userProfile[0]?.country,
      city: userProfile[0]?.city,
      district: userProfile[0]?.district,
      street: userProfile[0]?.street,
      phoneNumber: userProfile[0]?.phoneNumber,
    })

  }, [userProfile])

  const [input, setInput] = React.useState({
    email: "",
    nickName: "",
    personalProfile: "",
    country: "",
    city: "",
    district: "",
    street: "",
    phoneNumber: "",
  })

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={classes.root}>
      <h2>User Profile</h2>
      <Grid className={classes.userProfile}>
        <Grid xl={4} xs={12} className={classes.inputProfile}>
          <form>
            <h5>Email</h5>
            <TextField
              id="outlined-basic"
              fullWidth={true}
              placeholder="abc@gmail.com"
              name="email"
              variant="outlined" value={input.email} onChange={handleInputChange}
            />

          </form>
          <form>
            <h5>Nick Name</h5>
            <TextField id="outlined-basic"
              fullWidth={true}
              placeholder="Serati Ma"
              variant="outlined"
              name="nickName"
              variant="outlined" value={input.nickName} onChange={handleInputChange} />
          </form>
          <form>
            <h5>Personal profile</h5>
            <TextField
              id="standard-full-width"
              multiline
              variant="outlined"
              placeholder="Placeholder"
              fullWidth
              rows={4}
              name="personalProfile"
              variant="outlined" value={input.personalProfile} onChange={handleInputChange}
            />

          </form>
          <form>
            <h5>Country/Region</h5>
            <TextField id="outlined-basic"
              select
              fullWidth={true}
              value={currency}
              onChange={handleChange}
              variant="outlined"
            >
              {currencies.map(option => (
                <MenuItem key={option.country} value={option.country}
                  variant="outlined">
                  {props.userProfile[0]?.country}
                </MenuItem>
              ))}
            </TextField>
          </form>
          <form >
            <h5>Province or city</h5>
            <Grid style={{ display: "flex" }}>
              <Grid style={{ marginRight: "2px", width: "100%" }} xl={6}>
                <TextField id="standard-select-currency"
                  select
                  fullWidth={true}
                  variant="outlined"
                  value={currency}
                  onChange={handleChange}
                >
                  {cities.map(option => (
                    <MenuItem key={option.city} value={option.city}>
                      {props.userProfile[0]?.city}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid style={{ marginLeft: "10px", width: "100%" }} xl={6}>
                <TextField
                  select
                  value={currency}
                  fullWidth={true}
                  onChange={handleChange}
                  variant="outlined">
                  {districts.map(options => (
                    <MenuItem key={options.district} value={options.district}>
                      {props.userProfile[0]?.district}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </form>
          <form>
            <h5>Street Address</h5>
            <TextField id="outlined-basic" fullWidth={true} variant="outlined" name="street"
              variant="outlined" value={input.street} onChange={handleInputChange} />
          </form>
          <form>
            <h5>Phone Number</h5>
            <Grid>
              <Grid>
                <TextField id="outlined-basic" variant="outlined"
                  name="phoneNumber"
                  fullWidth={true}
                  value={input.phoneNumber} onChange={handleInputChange} />
              </Grid>
            </Grid>


          </form>
          <Grid>
            <Button variant="contained"
              type="submit"
              className={classes.btnProfile}
              style={{
                backgroundColor: "#E26740",
                color: "#fff"
              }}
            >
              Save
            </Button>
          </Grid>

        </Grid>
        <Grid xl={2} xs={12} className={classes.avtProfile}>
          <Grid xs={12}>
            <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
          </Grid>
          <Grid className={classes.uploadImg} xs={12}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary"
                style={{
                  backgroundColor: "#E26740",
                  color: "#fff"
                }}
                className={classes.uploadFile}
                component="span">
                Upload
              </Button>
            </label>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userProfile: state.common.userProfile,
  };
};

const mapDispatchToProps = {
  getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

