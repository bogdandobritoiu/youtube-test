import SkeletonLoader from "expo-skeleton-loader";
import { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { isMobile } from "../../utils";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function Skeleton({ isLoading, style }) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = isLoading ? 1 : 0;
  }, [isLoading]);

  const animatedStyle = useAnimatedStyle(() => {
    const config = {
      duration: 2000,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    return {
      backgroundColor: "white",
      opacity: withTiming(opacity.value, config),
    };
  }, []);

  return (
    <Animated.View style={[style, animatedStyle]}>
      <StyledSkeleton pointerEvents="none">
        <StyledThumbnail />
        <StyledContent>
          <StyledCreator />
          <View style={{ flex: 1 }}>
            <StyledTextContainer style={{ width: "90%" }} />
            <View style={{ height: 4 }}></View>
            <StyledTextContainer style={{ width: "70%" }} />
          </View>
        </StyledContent>
      </StyledSkeleton>
    </Animated.View>
  );
}

const StyledSkeleton = styled(View)`
  padding: 0 ${isMobile ? 0 : 8}px;
  padding-bottom: 12px;
`;
const StyledThumbnail = styled(View)`
  background: gray;
  height: 150px;
`;
const StyledContent = styled(View)`
  padding-top: 12px;
  flex-direction: row;
  padding-left: ${isMobile ? 12 : 0}px;
`;
const StyledCreator = styled(View)`
  height: 36px;
  width: 36px;
  margin-right: 12px;
  background: gray;
  border-radius: 36px;
`;

const StyledTextContainer = styled(View)`
  height: 16px;
  background: gray;
  border-radius: 2px;
`;
