import React from 'react';
import { SvgIcon } from '@material-ui/core';

function LeftCarouselIcon(props) {
  return (
    <SvgIcon width="18" height="18" viewBox="0 0 28 20" fill="none" {...props}>
      <svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13L1 7L7 1" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export default LeftCarouselIcon;
