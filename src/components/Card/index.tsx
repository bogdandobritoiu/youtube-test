import { rgba } from "polished";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { getFormattedDate, isMobile, isWeb } from "../../utils";
import { useMedia } from "../../utils/useMedia";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";
import { Dots, IDotOption } from "./Dots";
import { IThumbnail, Thumbnail } from "./Thumbnail";

export interface ICard {
  title: string;
  creator: string;
  id: string;
  thumbnails: IThumbnail[];
  createdAt: string;
  live: boolean;
  isActive: boolean;
  style: any;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const Card = ({
  title,
  creator,
  thumbnails,
  createdAt,
  live,
  style,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: ICard) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const media = useMedia();

  const fontSize = useSharedValue(14);
  const spacings = useSharedValue(media.isMobile ? 12 : 0);
  const extraSpacings = useSharedValue(24);

  const config = { duration: 1000, easing: Easing.bezier(0.5, 0.01, 0, 1) };
  const spacingLeftStyle = useAnimatedStyle(() => ({
    paddingLeft: withTiming(spacings.value, config),
  }));
  const spacingRightStyle = useAnimatedStyle(() => ({
    paddingRight: withTiming(extraSpacings.value * 2, config),
  }));
  const spacingOptionsStyle = useAnimatedStyle(() => ({
    paddingRight: withTiming(spacings.value, config),
  }));

  const fontStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(fontSize.value, config),
      lineHeight: withTiming(fontSize.value + 3, config),
    };
  });

  const onMouseEnterCard = () => {
    setIsHovered(true);
    if (isActive) {
      fontSize.value = 16;
      spacings.value = 12;
      extraSpacings.value = 24;
    }
  };

  const onMouseLeaveCard = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
    if (isActive) {
      fontSize.value = 14;
      spacings.value = 0;
      extraSpacings.value = 24;
    }
  };

  const onMouseEnterPreview = () => {
    setIsPreviewing(true);
    if (onMouseEnter) onMouseEnter();
  };

  const onMouseLeavePreview = () => {
    setIsPreviewing(false);
  };

  const onLongPress = () => {};

  const options: IDotOption[] = [
    {
      icon: "add-to-queue",
      text: "Add to queue",
      onPress: () => alert("Add to queue"),
    },
    {
      icon: "watch-later",
      text: "Send",
      onPress: () => alert("watch later"),
    },
  ];

  return (
    <StyledGridItem style={style}>
      <Pressable onLongPress={onLongPress}>
        <StyledGridItemContainer
          onMouseEnter={onMouseEnterCard}
          onMouseLeave={onMouseLeaveCard}
          isActive={isActive}
          style={{
            marginHorizontal: media.isMobile ? 0 : 6,
            marginBottom: media.isMobile ? 6 : 40,
          }}
        >
          <StyledGridItemShadow isActive={isActive}>
            <Thumbnail
              isActive={isActive && isPreviewing}
              onMouseEnter={onMouseEnterPreview}
              onMouseLeave={onMouseLeavePreview}
              image={thumbnails?.default?.url}
            />

            <Animated.View
              style={[
                {
                  flexDirection: "row",
                  paddingTop: 12,
                  paddingBottom: 12,
                  zIndex: 10,
                },
                spacingLeftStyle,
              ]}
            >
              <Image
                source={thumbnails?.default?.url}
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "gray",
                  borderRadius: 36,
                  marginRight: 12,
                }}
              />
              <Animated.View style={[{ flex: 1 }, spacingRightStyle]}>
                <StyledTitle
                  style={{
                    marginBottom: media.isMobile ? 2 : 6,
                  }}
                >
                  <Animated.Text
                    style={[{ fontFamily: "Roboto_500Medium" }, fontStyle]}
                    numberOfLines={2}
                  >
                    {title}
                  </Animated.Text>
                </StyledTitle>

                <View
                  style={
                    media.isMobile
                      ? {
                          flexDirection: "row",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }
                      : {}
                  }
                >
                  <StyledCreator
                    style={{
                      marginTop: media.isMobile ? 0 : 2,
                    }}
                  >
                    <Tooltip text={creator}>
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 12,
                          fontFamily: "Roboto_400Regular",
                          color: rgba("#030303", 0.6),
                        }}
                      >
                        {creator}
                      </Text>
                    </Tooltip>
                    <Text> </Text>
                    <Tooltip text="Verified">
                      <Icon name="verified" size={12} />
                    </Tooltip>
                  </StyledCreator>
                  <StyledStatistics
                    style={{
                      marginTop: media.isMobile ? 0 : 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        lineHeight: 12,
                        fontFamily: "Roboto_400Regular",
                        color: rgba("#030303", 0.6),
                      }}
                    >{`14 K views • ${getFormattedDate(
                      new Date(createdAt)
                    )}`}</Text>
                  </StyledStatistics>
                </View>

                <View style={{ flexDirection: "row" }}>
                  {live && !media.isMobile && (
                    <StyledLive>
                      <Icon color="white" name="live" size={16} />
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 12,
                          color: "white",
                          fontFamily: "Roboto_500Medium",
                        }}
                      >
                        {` LIVE`}
                      </Text>
                    </StyledLive>
                  )}
                </View>
              </Animated.View>

              {(isHovered || media.isMobile) && (
                <Animated.View
                  style={[
                    {
                      position: "absolute",
                      top: 0,
                      right: 0,
                      paddingTop: 14,
                    },
                    spacingOptionsStyle,
                  ]}
                >
                  <Dots options={options} />
                </Animated.View>
              )}
            </Animated.View>

            {isActive ? (
              <StyledOptions>
                <Button icon="watch-later" text="WATCH LATER" />
                <View style={{ height: 8 }}></View>
                <Button icon="add-to-queue" text="ADD TO QUEUE" />
              </StyledOptions>
            ) : null}
          </StyledGridItemShadow>
        </StyledGridItemContainer>
      </Pressable>
    </StyledGridItem>
  );
};

export const Button = ({ text, onPress, icon }) => (
  <Pressable onPress={onPress}>
    <StyledButton>
      <Icon name={icon} size={24} />
      <Text
        style={{
          fontFamily: "Roboto_500Medium",
          fontSize: 14,
          marginLeft: 8,
          color: "#606060",
        }}
      >
        {text}
      </Text>
    </StyledButton>
  </Pressable>
);

const StyledButton = styled(View)`
  padding: 0px 16px;
  height: 36px;
  justify-content: center;
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
`;

const StyledOptions = styled(View)`
  padding: 12px;
`;

const StyledGridItem = styled(View)``;
const StyledGridItemShadow = styled(View)`
  background: white;
  ${({ isActive }) => {
    if (isActive)
      return `
        box-shadow: 0 3px 6px ${rgba(0, 0, 0, 0.2)};
      `;
  }}
`;

const StyledGridItemContainer = styled(View)`
  cursor: pointer;
  ${({ isActive }) => {
    if (isActive)
      return `
        box-shadow: 0 2px 5px ${rgba(0, 0, 0, 0.16)};
      `;
  }}
`;

const StyledTitle = styled(View)`
  width: 100%;
`;

const StyledCreator = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const StyledLive = styled(View)`
  background: ${rgba(204, 0, 0, 0.9)};
  padding: 0px 4px;
  border-radius: 2px;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`;

const StyledStatistics = styled(View)`
  flex-direction: row;
  align-items: center;
`;
