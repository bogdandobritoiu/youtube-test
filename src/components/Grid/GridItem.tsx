import { useRef, useState } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { useMedia } from "../../utils/useMedia";
import { Card, ICard } from "../Card";

export const GridItem = (props: ICard) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  let timerRef = useRef<NodeJS.Timeout>();
  const media = useMedia();

  const onMouseEnter = () => {
    // timerRef.current = setTimeout(() => {
    if (media.isMobile) return;
    setIsHovered(true);
    scale.value = -20;
    width.value = width.value + 40;
    // }, 1000);
  };

  const onMouseLeave = () => {
    // clearTimeout(timerRef.current);
    if (media.isMobile) return;
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

  function onMouseEnterCard() {
    setIsCardHovered(true);
  }
  function onMouseLeaveCard() {
    setTimeout(() => {
      setIsCardHovered(false);
    }, 500);
  }

  return (
    <StyledGridItem
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
      style={{
        zIndex: isCardHovered ? 1 : 0,
      }}
    >
      <Card
        {...props}
        onMouseEnter={onMouseEnter}
        style={{ width: props.width }}
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

const StyledGridItem = styled(View)``;
