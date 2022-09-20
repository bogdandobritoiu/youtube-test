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
    <Path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
  </Svg>
);

export default SvgComponent;
