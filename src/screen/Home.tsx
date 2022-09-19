import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Grid } from "../components/Grid";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Grid />
    </SafeAreaView>
  );
};

export default Home;
