import { rgba } from "polished";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styled from "styled-components/native";
import { Icon } from "../Icon";

export const Dots = ({ options }: IDotOption[]) => {
  const [isActive, setIsActive] = useState(false);

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
      <StyledButton onPress={() => setIsActive(!isActive)}>
        <StyledDot />
        <StyledDot />
        <StyledDot />
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
          fontFamily: "Roboto",
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
  width: 4px;
  height: 4px;
  background: black;
  border-radius: 4px;
  margin-bottom: 4px;
`;
