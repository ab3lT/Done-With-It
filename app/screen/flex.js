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
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 300,
          alignSelf: "flex-start",
        }}
      ></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 200 }}></View>
      <View style={{ backgroundColor: "red", width: 100, height: 100 }}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHegiht : 20,
  },
});
