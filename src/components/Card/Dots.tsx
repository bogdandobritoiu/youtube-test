import { rgba } from "polished";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { isMobile } from "../../utils";
import { Icon } from "../Icon";

export const Dots = ({ options }: { options: IDotOption[] }) => {
  const [isActive, setIsActive] = useState(false);

  const opacity = useSharedValue(0);

  const buttonStyles = useAnimatedStyle(() => {
    const config = {
      duration: isActive ? 300 : 100,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    return {
      opacity: withTiming(opacity.value, config),
    };
  });

  const borderStyles = useAnimatedStyle(() => {
    const config = {
      duration: isActive ? 300 : 100,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    return {
      opacity: withTiming(opacity.value * 7, config),
      borderWidth: 1,
      borderColor: "black",
      borderStyle: "solid",
    };
  });

  function onToggleButton() {
    opacity.value = 0.1;
    setTimeout(() => {
      opacity.value = 0;
    }, 100);
    if (isMobile) {
    } else {
      setIsActive(!isActive);
    }
  }

  return (
    <StyledDots>
      {isActive && (
        <StyledOptions pointerEvents={isActive ? "auto" : "none"}>
          <StyledOptionsContent>
            {options.map((item) => (
              <DotOption {...item} />
            ))}
          </StyledOptionsContent>
        </StyledOptions>
      )}

      <StyledButton onPress={onToggleButton}>
        <Animated.View
          style={[
            {
              position: "absolute",
              top: "-25%",
              left: "-25%",
              right: "-25%",
              bottom: "-25%",
              borderRadius: 40,
              backgroundColor: "black",
            },
            buttonStyles,
          ]}
        />
        <Animated.View
          style={[
            {
              position: "absolute",
              top: "-25%",
              left: "-25%",
              right: "-25%",
              bottom: "-25%",
              borderRadius: 40,
            },
            borderStyles,
          ]}
        />

        <Animated.View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="dots" size={isMobile ? 16 : 24} />
          {/* <StyledDot />
          <StyledDot />
          <StyledDot /> */}
        </Animated.View>
      </StyledButton>
    </StyledDots>
  );
};

export interface IDotOption {
  text: string;
  icon: string;
  onPress: () => void;
}

const DotOption = ({ text, icon, onPress }: IDotOption) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledOption
      onPress={onPress}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        backgroundColor: isHovered ? "#E5E5E5" : "white",
      }}
    >
      <Icon name={icon} size={24} />
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 14,
          fontFamily: "Roboto_400Regular",
        }}
        numberOfLines={1}
      >
        {text}
      </Text>
    </StyledOption>
  );
};
const StyledOptionsContent = styled(View)`
  position: absolute;
  top: 0;
  box-shadow: 0 2px 2px ${rgba(0, 0, 0, 0.14)};
  border-radius: 2px;
  padding: 8px 0;
  background: white;
`;

const StyledOptions = styled(View)`
  position: absolute;
  top: 100%;
  box-shadow: 0 3px 1px ${rgba(0, 0, 0, 0.2)};
  border-radius: 2px;
  background: white;
`;

const StyledOption = styled(Pressable)`
  height: 36px;
  padding-left: 16px;
  padding-right: 36px;
  flex-direction: row;
  align-items: center;
`;

const StyledDots = styled(View)`
  border-radius: 60px;
`;

const StyledButton = styled(Pressable)`
  width: 24px;
  justify-content: center;
  align-items: center;
`;

const StyledDot = styled(View)`
  width: ${isMobile ? 3 : 4}px;
  height: ${isMobile ? 3 : 4}px;
  background: black;
  border-radius: 4px;
  margin: ${isMobile ? 1.5 : 3}px 0;
`;
