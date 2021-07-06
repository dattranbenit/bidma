import React from "react";
import { SvgIcon } from "@material-ui/core";

function EyeIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path d="M0.833336 10C0.833336 10 4.16667 3.33337 10 3.33337C15.8333 3.33337 19.1667 10 19.1667 10C19.1667 10 15.8333 16.6667 10 16.6667C4.16667 16.6667 0.833336 10 0.833336 10Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}

export default EyeIcon;
