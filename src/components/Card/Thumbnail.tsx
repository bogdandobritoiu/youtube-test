import { rgba } from "polished";
import { useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import styled from "styled-components/native";
import { isMobile } from "../../utils";
import { useMedia } from "../../utils/useMedia";

export interface IThumb {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnail {
  default: IThumb;
  medium: IThumb;
  high: IThumb;
}

export const Thumbnail = ({
  image,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  image: ImageSourcePropType;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const media = useMedia();
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnterThumbnail = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const onMouseLeaveThumbnail = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    <StyledThumbnail
      onMouseEnter={onMouseEnterThumbnail}
      onMouseLeave={onMouseLeaveThumbnail}
      style={{ height: media.isMobile ? 210 : 160 }}
    >
      <Image source={image} style={{ height: "100%" }} />
      <StyledTimer>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            lineHeight: 12,
            fontFamily: "Roboto_500Medium",
            letterSpacing: 0.5,
          }}
        >
          60:20
        </Text>
      </StyledTimer>
      <StyledInfo isActive={isHovered && !isActive}>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            lineHeight: 12,
            fontFamily: "Roboto_500Medium",
          }}
        >
          Keep hovering to play
        </Text>
      </StyledInfo>
    </StyledThumbnail>
  );
};

const StyledThumbnail = styled(View)`
  background: gray;
`;

const StyledTimer = styled(View)`
  margin: 4px;
  padding: 3px 4px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: ${rgba("black", 0.8)};
  border-radius: 2px;
`;

const StyledInfo = styled(StyledTimer)`
  padding: 6px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;
