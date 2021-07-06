import React from 'react';
import { SvgIcon } from '@material-ui/core';

function ClockIcon(props) {
  return (
    <SvgIcon width="18" height="18" viewBox="0 0 18 20" fill="none" {...props}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#B7BBCB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 4.5V9L12 10.5" stroke="#B7BBCB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>

  );
}

export default ClockIcon;
