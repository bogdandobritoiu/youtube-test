import * as React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Grid } from "../components/Grid";
import { useHome } from "./useHome";

const Home = () => {
  const { items, isLoadingMore, onLoadMore, isLoading } = useHome();
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: top }}>
      <Grid
        items={items}
        isLoadingMore={isLoadingMore}
        onLoadMore={onLoadMore}
        isLoading={isLoading}
      />
    </View>
  );
};

export default Home;
