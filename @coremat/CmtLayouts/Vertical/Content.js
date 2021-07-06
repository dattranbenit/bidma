import React, { useImperativeHandle } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  appMainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '30px 15px',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 24,
      paddingBottom: 24,
    },
  },
}));

const CmtContent = React.forwardRef(function LayoutContent(props, ref) {
  const { children } = props;

  useImperativeHandle(ref, () => ({}));

  const contentRef = React.createRef();
  const classes = useStyles();

  return (
    <Box ref={contentRef} className={clsx(classes.appMainContent, 'Cmt-appMainContent')} bgcolor="background.main">
      {children}
    </Box>
  );
});

export default CmtContent;
CmtContent.defaultProps = {
  name: 'LayoutContent',
};
