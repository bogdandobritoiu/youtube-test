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
    <Path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" />
  </Svg>
);

export default SvgComponent;
