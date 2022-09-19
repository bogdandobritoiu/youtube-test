import { useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { isMobile } from "../../utils";

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useMedia } from "../../utils/useMedia";

export default function Skeleton({ isLoading, style }) {
  const opacity = useSharedValue(1);
  const media = useMedia();

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
      <StyledSkeleton
        pointerEvents="none"
        style={{
          paddingHorizontal: media.isMobile ? 0 : 8,
        }}
      >
        <StyledThumbnail
          style={{
            height: media.isMobile ? 210 : 160,
          }}
        />
        <StyledContent
          style={{
            paddingLeft: media.isMobile ? 12 : 0,
          }}
        >
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
  padding-bottom: 20px;
`;
const StyledThumbnail = styled(View)`
  background: gray;
`;
const StyledContent = styled(View)`
  padding-top: 12px;
  flex-direction: row;
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
