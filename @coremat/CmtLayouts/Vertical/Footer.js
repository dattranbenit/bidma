import React, { useImperativeHandle } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  appFooter: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.15)',
  },
  appFooterWrapper: {
    padding: '12px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 64,
    background: "#EDEDEF",
    [theme.breakpoints.up('md')]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
  },
}));

const CmtFooter = React.forwardRef(function LayoutFooter(props, ref) {
  const { type, children } = props;

  useImperativeHandle(ref, () => ({
    headerType: type,
  }));

  const contentRef = React.createRef();
  const classes = useStyles();

  return (
    <Box ref={contentRef} className={clsx(classes.appFooter, 'Cmt-footer')}>
      <Box ref={contentRef} className={clsx(classes.appFooterWrapper, 'Cmt-footer-wrapper')}>
        {children}
      </Box>
    </Box>
  );
});

export default CmtFooter;

CmtFooter.defaultProps = {
  type: 'fixed',
  name: 'LayoutFooter',
};
CmtFooter.propTypes = {
  type: PropTypes.oneOf(['fixed', 'static']),
};
