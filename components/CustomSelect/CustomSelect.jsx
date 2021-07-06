import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import classNames from 'classnames';

const styles = {
  selectContainer: {
    width: '100%',
    borderBottom: '1px solid #ECEEF0',
    display: 'flex',
    alignItems: 'center',
    justifyContents: 'center',
  },
  select: {
    fontFamily: 'Roboto',
    color: '#4E5260',
    fontWeight: 400,
    fontSize: '14px',
    borderStyle: 'none',
    borderWidth: 2,
    '&:focus': {
      borderRadius: 12,
      backgroundColor: 'white',
      // borderColor: '#B4B4B4',
    },
    marginTop: '5px',
    minWidth: '180px',
  },
  icon: {
    color: '#B7BBCB',
    right: 3,
    top: 8,
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none',
    width: "1rem",
  },
  paper: {
    borderRadius: 12,
    marginTop: 8,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: 'white',
    defaultStyle: {
      '& li': {
        fontWeight: 200,
        paddingTop: 12,
        paddingBottom: 12,
      },
      '& li:hover': {
        background: '#25345C',
        color: 'white',
      },
      '& li.Mui-selected': {
        color: 'white',
        background: '#25345C',
      },
      '& li.Mui-selected:hover': {
        background: '#25345C',
        color: 'white',
      },
    },
    logsSelect: {
      '& li': {
        fontWeight: 200,
        paddingTop: 12,
        paddingBottom: 12,
      },
      '& li.Mui-selected:hover': {
        background: '#ECEEF0 !important',
        color: 'black',
      },
      '& li.Mui-selected': {
        color: 'black',
        background: '#ECEEF0 !important',
      },
      '& li:hover': {
        background: '#ECEEF0 !important',
        color: 'black',
      },
    },
  },
  // custom select css
  logsSelect: {
    border: '1px solid #ECEEF0',
    borderRadius: '22px',
    color: '#25345C !important',
    fontSize: '13px !important',
    lineHeight: '17px',
    minWidth: '150px',
    height: '42px',
    paddingRight: '0px !important',
    display: 'flex',
    justifyContent: 'center',
  },
  // labelRootError: {
  //     color: "red"
  // },
  // labelRootSuccess: {
  //     color: "green"
  // },
  labelRoot: {
    color: 'gray',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '1.42857',
    top: '10px',
    letterSpacing: 'unset',
    '& + $underline': {
      marginTop: '0px',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: 'gray',
      borderWidth: '1px !important',
    },
    '&:after': {
      borderColor: 'blue',
    },
    '& + p': {
      fontWeight: '300',
    },
  },
  underlineError: {
    '&:after': {
      borderColor: 'red',
    },
  },
  underlineSuccess: {
    '&:after': {
      borderColor: 'green',
    },
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      backgroundColor: 'white',
    },
    '&:after': {
      backgroundColor: 'white',
    },
  },
};

const useStyles = makeStyles(styles);

const CustomSelect = (props) => {
  const {
    name,
    listValues,
    placeholder,
    selectValue,
    onChange,
    customStyle,
    labelProps,
    labelText,
    error,
    success,
    id,
    white,
    selectProps,
    listContent,
    icon,
    disabled
  } = props;
  const classes = useStyles();

  const iconComponent = (props) => {
    return <ExpandMoreIcon className={props.className + ' ' + classes.icon} />;
  };

  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error,
  });

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list[customStyle] || classes.list.defaultStyle,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl className={classes.selectContainer} className={classes[customStyle]} fullWidth>
      <InputLabel className={classes.labelRoot + ' ' + labelClasses} htmlFor={id} {...labelProps}>
        {labelText}
      </InputLabel>
      <div style={{display: "flex"}}>
        {icon}
        <Select
          classes={{
            root: classes.select,
            underline: underlineClasses,
          }}
          {...selectProps}
          MenuProps={menuProps}
          IconComponent={iconComponent}
          value={selectValue}
          onChange={onChange}
          name={name}
          className="fs-13"
          disabled={disabled}
          className={customStyle == 'logsSelect' && 'mt--15'}
          inputProps={{ style: { width: 100 } }}
          disableUnderline>
          {selectValue === 'none' && (
            <option value="none" disabled style={{ display: 'none' }}>
              {placeholder}
            </option>
          )}
          {listValues?.map((value, i) => (
            <MenuItem key={i} name={name} value={value}>
              {value}
            </MenuItem>
          ))}
          {listContent?.map((item, i) => {
            console.log(item);
            return (
              <MenuItem key={i} name={item.name} value={item.value}>
                {item.content}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    </FormControl>
  );
};

export default CustomSelect;
