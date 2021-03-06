import React from 'react';
import { SvgIcon } from '@material-ui/core';

function LeftArrowIcon(props) {
  return (
    <SvgIcon viewBox="0 -2 18 24" {...props}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 10H4.16663" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99996 15.8334L4.16663 10L9.99996 4.16669" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default LeftArrowIcon;