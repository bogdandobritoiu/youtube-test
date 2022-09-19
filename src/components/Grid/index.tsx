import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItem,
  ScrollView,
  View,
} from "react-native";
import styled from "styled-components/native";
import { isMobile } from "../../utils";
import { ICard } from "../Card";
import { GridItem } from "./GridItem";
import Skeleton from "../Card/Skeleton";

interface IGrid<T> {
  items: T[];
  isLoadingMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

export const Grid = ({
  items,
  isLoadingMore,
  onLoadMore,
  isLoading,
}: IGrid<ICard>) => {
  const windowWidth = Dimensions.get("window").width;

  const renderSkeleton = () => {
    return (
      <>
        {new Array(12).fill(null).map((item, index) => {
          return (
            <Skeleton
              key={`skeleton-${index}`}
              isLoading={isLoading}
              style={{
                width: isMobile ? windowWidth : (windowWidth - 4 * 24) / 4,
                height: isMobile ? "auto" : 300,
              }}
            />
          );
        })}
      </>
    );
  };

  const renderItem: ListRenderItem<ICard> = ({ item, index }) => (
    <GridItem {...item} style={{ height: 290 }} />
  );

  if (isMobile)
    return (
      <StyledGrid>
        <FlatList
          data={items}
          renderItem={renderItem}
          onEndReached={onLoadMore}
          keyExtractor={(item) => item.id}
          style={{ width: "100%" }}
          ListFooterComponent={<ActivityIndicator animating={isLoadingMore} />}
        />
        <View
          pointerEvents={isLoading ? "auto" : "none"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {renderSkeleton()}
        </View>
      </StyledGrid>
    );

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 40;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingTop: 24,
        paddingHorizontal: 16,
      }}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          onLoadMore();
        }
      }}
      scrollEventThrottle={400}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            position: "relative",
          }}
        >
          {items.map((item) => (
            <GridItem
              {...item}
              key={item.id}
              width={(windowWidth - 4 * 24) / 4}
              height={300}
            />
          ))}
        </View>
        <View
          pointerEvents={isLoading ? "auto" : "none"}
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {renderSkeleton()}
        </View>
        <ActivityIndicator animating={isLoadingMore} />
      </View>
    </ScrollView>
  );
};

const StyledGrid = styled(View)`
  flex: 1;
`;
