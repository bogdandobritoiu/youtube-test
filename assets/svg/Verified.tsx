import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    viewBox="0 0 24 24"
    style={{
      pointerEvents: "none",
      display: "block",
      width: props.width || 24,
      height: props.height || 24,
    }}
    {...props}
  >
    <Path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z" />
    w{" "}
  </Svg>
);

export default SvgComponent;
