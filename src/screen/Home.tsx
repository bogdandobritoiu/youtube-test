import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Grid } from "../components/Grid";
import { useHome } from "./useHome";

const Home = () => {
  const { items, isLoadingMore, onLoadMore, isLoading } = useHome();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Grid
        items={items}
        isLoadingMore={isLoadingMore}
        onLoadMore={onLoadMore}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
};

export default Home;
