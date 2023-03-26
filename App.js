import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? 100 : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHegiht : 20,
  },
});
