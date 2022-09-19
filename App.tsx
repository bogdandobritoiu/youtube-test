import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  useFonts,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import Home from "./src/screen/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}
