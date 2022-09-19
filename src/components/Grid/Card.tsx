import { rgba } from "polished";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styled from "styled-components/native";
import { getFormattedDate, isMobile, isWeb } from "../../utils";
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
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  style: any;
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

  const onMouseEnterCard = () => {
    setIsHovered(true);
  };

  const onMouseLeaveCard = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
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
        >
          <StyledGridItemShadow isActive={isActive}>
            <Thumbnail
              isActive={isActive && isPreviewing}
              onMouseEnter={onMouseEnterPreview}
              onMouseLeave={onMouseLeavePreview}
              image={thumbnails?.default?.url}
            />

            <StyledContent isActive={isActive}>
              <StyledContentLeft>
                <Image
                  source={thumbnails?.default?.url}
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: "gray",
                    borderRadius: 36,
                  }}
                />
              </StyledContentLeft>
              <StyledContentRight>
                <StyledTitle>
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontSize: isActive ? 16 : 14,
                      fontWeight: "500",
                      lineHeight: isActive ? 22 : 20,
                    }}
                    numberOfLines={2}
                  >
                    {title}
                  </Text>
                </StyledTitle>

                <StyledInfo>
                  <StyledCreator>
                    <Tooltip text={creator}>
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 12,
                          fontFamily: "Roboto",
                          color: "#aaaaaa",
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
                  <StyledStatistics>
                    <Text
                      style={{
                        fontSize: 12,
                        lineHeight: 12,
                        fontFamily: "Roboto",
                        color: "#aaaaaa",
                      }}
                    >{`14 K views • ${getFormattedDate(
                      new Date(createdAt)
                    )}`}</Text>
                  </StyledStatistics>
                </StyledInfo>

                <View style={{ flexDirection: "row" }}>
                  {live && (
                    <StyledLive>
                      <Icon color="white" name="live" size={16} />
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 12,
                          color: "white",
                          fontWeight: "500",
                          fontFamily: "Roboto",
                        }}
                      >
                        {` LIVE`}
                      </Text>
                    </StyledLive>
                  )}
                </View>
              </StyledContentRight>

              {(isHovered || isMobile) && (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    paddingTop: 14,
                    paddingRight: isActive ? 12 : 0,
                  }}
                >
                  <Dots options={options} />
                </View>
              )}
            </StyledContent>

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
          fontFamily: "Roboto",
          fontSize: 14,
          marginLeft: 8,
          color: "#606060",
          fontWeight: "500",
        }}
      >
        {text}
      </Text>
    </StyledButton>
  </Pressable>
);

const StyledButton = styled(View)`
  padding: 6px 16px;
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
  margin: 0 ${isWeb ? 8 : 0}px;
  margin-bottom: ${isWeb ? 40 : 0}px;
  cursor: pointer;
  ${({ isActive }) => {
    if (isActive)
      return `
        box-shadow: 0 2px 5px ${rgba(0, 0, 0, 0.16)};
      `;
  }}
`;

const StyledContent = styled(View)`
  flex-direction: row;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: ${({ isActive }) => (isMobile || isActive ? 12 : 0)}px;
  z-index: 1;
`;

const StyledContentLeft = styled(View)`
  padding-right: 12px;
`;
const StyledContentRight = styled(View)`
  padding-right: 24px;
  flex: 1;
`;

const StyledTitle = styled(View)`
  margin-bottom: 6px;
  width: 100%;
`;

const StyledCreator = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${isMobile ? 0 : 2}px;
`;

const StyledLive = styled(View)`
  background: ${rgba(204, 0, 0, 0.9)};
  padding: 0px 4px;
  border-radius: 2px;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`;

const StyledInfo = styled(View)`
  ${() => {
    if (isMobile) {
      return `
        flex-direction: row; 
        align-items: center;
        flex-wrap: wrap;
      `;
    }
  }}
`;

const StyledStatistics = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${isMobile ? 0 : 5}px;
`;
