import Home from "./src/screen/Home";

import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  useFonts,
} from "@expo-google-fonts/roboto";
import { useFonts as useWebFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { isMobile } from "./src/utils";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}
