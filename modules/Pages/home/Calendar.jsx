import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import 'moment/locale/vi';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,

    [theme.breakpoints.up('lg')]: {
      marginLeft: 280,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0 !important',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '108%',
    [theme.breakpoints.up('sm')]: {
      height: '34px',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '220px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 10,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  filter: {
    display: 'flex',
  },
  toolbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 28,
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '50px',
      width: `calc(100% - 130px)`,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      top: '-20px !important',
      marginLeft: '0 !important',
      maxWidth: '100vw',
    },
    [theme.breakpoints.up('md')]: {
      top: -93,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100vw',
      marginLeft: '0 !important',
    },
  },
  todayBtn: {
    background: '#F2F3F7',
    alignSelf: 'center',

    height: '34px',
    textAlign: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    [theme.breakpoints.down('lg')]: {
      marginRight: 0,
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: 30,
      width: '84px',
    },
  },
  todayP: {
    paddingTop: 7,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#E26740',
  },
}));

const localizer = momentLocalizer(moment);
const events = [
  {
    id: 0,
    title: 'Meeting',
    start: new Date('2021, 6, 14'),
    end: new Date('2021, 6, 17'),
  },
  {
    id: 1,
    title: 'Lunch',
    start: new Date('2021, 6, 10'),
    end: new Date('2021, 6, 12'),
  },
  {
    id: 2,
    title: 'Coding',
    start: new Date('2021, 6, 4'),
    end: new Date('2021, 6, 7'),
  },
];
const formats = {
  weekdayFormat: (date, culture, localizer) => localizer.format(date, 'dd', culture),
};

const CustomToolbar = (toolbar) => {
  const classes = useStyles();

  const now = new Date();
  const [month, setMonth] = React.useState(now.getMonth() + 1);
  React.useEffect(() => {
    console.log('reload');
  }, [month]);

  const handleChange = (event) => {
    event.target.value ? setMonth(event.target.value) : null;
  };

  const goTo = (e, month) => {
    console.log(month);
    toolbar.date.setMonth(month);
    toolbar.onNavigate('prev');
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate('current');
  };

  return (
    <div className={classes.toolbarContainer}>
      <div className={classes.filter}>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            displayEmpty
            onChange={handleChange}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
              return (
                <MenuItem onClick={(e) => goTo(e, month - 1)} value={month}>
                  <span>
                    <b>Tháng {month}</b>
                    <span>, 2021</span>
                  </span>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className={classes.todayBtn} onClick={goToCurrent}>
        <p className={classes.todayP}>Hôm nay</p>
      </div>
    </div>
  );
};

const MyCalendar = (props) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={{
          month: true,
        }}
        formats={formats}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default MyCalendar;
