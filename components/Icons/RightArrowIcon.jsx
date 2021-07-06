import React from 'react';
import { SvgIcon } from '@material-ui/core';

function RightArrowIcon(props) {
  return (
    <SvgIcon width="30" height="30" viewBox="-9 -5 24 25" fill="none" {...props}>
      <svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export default RightArrowIcon;
