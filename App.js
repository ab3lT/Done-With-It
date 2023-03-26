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
  ImageBackground,
} from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <ImageBackground
          source={require("./app/assets/backgroudImage.jpg")}
        ></ImageBackground>
      </View>
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
