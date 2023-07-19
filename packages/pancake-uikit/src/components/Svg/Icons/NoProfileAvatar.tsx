import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" fill={primaryColor} />
      <mask id="A" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" fill="#c4c4c4" />
      </mask>
      <g mask="url(#A)">

          <path d="M27.33,30.24V32H4.67v-1.76c0-3.81,5.07-6.91,11.33-6.91S27.33,26.43,27.33,30.24z"
          fill={secondaryColor}/>

        <circle cx="15.9" cy="12.67" r="9.41"
        fill={secondaryColor}/>
        <path d="M14.59,10.77c-0.28-0.28-0.65-0.43-1.04-0.43c-0.39,0-0.76,0.15-1.04,0.43l-0.15,0.14l-0.15-0.15
	c-0.28-0.28-0.65-0.43-1.04-0.43c-0.39,0-0.76,0.15-1.04,0.43c-0.28,0.28-0.43,0.65-0.43,1.04c0,0.39,0.15,0.76,0.43,1.04l2.11,2.11
	c0.03,0.03,0.07,0.05,0.11,0.05c0.04,0,0.08-0.02,0.11-0.04l2.12-2.11c0.28-0.28,0.43-0.65,0.43-1.04
	C15.02,11.42,14.87,11.05,14.59,10.77z"
  fill="#ffffff"/>
        <path d="M21.66,10.81c-0.28-0.28-0.65-0.43-1.04-0.43c-0.39,0-0.76,0.15-1.04,0.43l-0.15,0.14l-0.15-0.15
	c-0.28-0.28-0.65-0.43-1.04-0.43c-0.39,0-0.76,0.15-1.04,0.43c-0.28,0.28-0.43,0.65-0.43,1.04c0,0.39,0.15,0.76,0.43,1.04L19.33,15
	c0.03,0.03,0.07,0.05,0.11,0.05c0.04,0,0.08-0.02,0.11-0.04l2.12-2.11c0.28-0.28,0.43-0.65,0.43-1.04
	C22.09,11.46,21.94,11.09,21.66,10.81z"
  fill="#ffffff"/>
      </g>
    </Svg>
  );
};

export default Icon;
