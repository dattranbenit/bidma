import React from 'react';
import { SvgIcon } from '@material-ui/core';

function EmailIcon(props) {
  return (
    <SvgIcon width="18" height="18" viewBox="0 0 18 20" fill="none" {...props}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.62305 3.3335H16.0821C16.9386 3.3335 17.6394 4.0835 17.6394 5.00016V15.0002C17.6394 15.9168 16.9386 16.6668 16.0821 16.6668H3.62305C2.76649 16.6668 2.06567 15.9168 2.06567 15.0002V5.00016C2.06567 4.0835 2.76649 3.3335 3.62305 3.3335Z" stroke="#4E5260" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.6394 5L9.85255 10.8333L2.06567 5" stroke="#4E5260" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>

  );
}

export default EmailIcon;