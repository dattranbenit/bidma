import React from 'react';
import { Box } from '@material-ui/core';
import Link from 'next/link';
import CmtImage from '../../../../@coremat/CmtImage';

const FooterLogo = ({ color, ...props }) => {
  const logoUrl = color === 'white' ? '/images/logo-white-symbol.png' : '/images/footer-logo.png';

  return (
    <Box className="pointer" {...props}>
      <Link href="/">
        <a>
          <CmtImage src={logoUrl} alt="logo" />
        </a>
      </Link>
    </Box>
  );
};

export default FooterLogo;
