import { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

export const Tooltip = ({ children, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledTooltip>
      <StyledTooltipContainer hovered={isHovered}>
        <StyledTooltipContent>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              lineHeight: 18,
              fontFamily: "Roboto_500Medium",
            }}
          >
            {text}
          </Text>
        </StyledTooltipContent>
      </StyledTooltipContainer>
      <StyledChildren onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </StyledChildren>
    </StyledTooltip>
  );
};

const StyledChildren = styled(View)``;

const StyledTooltip = styled(View)``;

const StyledTooltipContainer = styled(View)`
  position: absolute;
  bottom: 100%;
  opacity: ${({ hovered }) => (hovered ? 1 : 0)};
`;

const StyledTooltipContent = styled(View)`
  position: absolute;
  background: #616161;
  bottom: 100%;
  margin: 24px -8px;
  padding: 8px;
  border-radius: 2px;
`;
