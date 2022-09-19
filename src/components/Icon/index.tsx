import React from "react";
import SvgIcon from "react-native-svg-icon";
import svgs from "../../../assets/svg";

export interface IconInterface {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

export const Icon = ({
  width,
  height,
  color = "gray",
  size,
  ...props
}: IconInterface) => {
  return (
    <SvgIcon
      // TODO: Fix this
      // {...props}
      viewBox={`0 0 24 24`}
      fill={color}
      width={width ?? size}
      height={height ?? size}
      svgs={svgs}
      focusable={false}
      style={{ alignSelf: "auto" }}
    />
  );
};
