import { useRef, useState } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { Card, ICard } from "../Card";

export const GridItem = (props: ICard) => {
  const [isHovered, setIsHovered] = useState(false);
  let timerRef = useRef<NodeJS.Timeout>();

  const onMouseEnter = () => {
    // timerRef.current = setTimeout(() => {
    setIsHovered(true);
    scale.value = -20;
    width.value = width.value + 40;
    // }, 1000);
  };

  const onMouseLeave = () => {
    clearTimeout(timerRef.current);
    scale.value = 0;
    width.value = props.width;
    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  const scale = useSharedValue(0);
  const width = useSharedValue(props.width);

  const animatedStyles = useAnimatedStyle(() => {
    const config = {
      duration: 1000,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
    return {
      top: withTiming(scale.value, config),
      left: withTiming(scale.value, config),
      width: withTiming(width.value, config),
    };
  }, [isHovered]);

  return (
    <StyledGridItem isHovered={isHovered}>
      <Card
        {...props}
        onMouseEnter={onMouseEnter}
        style={{ width: props.width, zIndex: isHovered ? 1 : 99 }}
      />
      <Animated.View
        pointerEvents={isHovered ? "auto" : "none"}
        onMouseLeave={onMouseLeave}
        style={[
          {
            position: "absolute",
            opacity: isHovered ? 1 : 0,
            zIndex: 100,
          },
          animatedStyles,
        ]}
      >
        <Card {...props} isActive={isHovered} />
      </Animated.View>
    </StyledGridItem>
  );
};

const StyledGridItem = styled(View)`
  /* flex: 1; */
  z-index: ${({ isHovered }) => (isHovered ? 100 : 0)};
`;
