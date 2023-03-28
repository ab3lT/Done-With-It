import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

export default function Layous() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: "./assets/icon.png" }} />
      <TouchableWithoutFeedback
        onPress={() => console.log("Text button Touched")}
      >
        <Text>Open up App.js to start working on your app!</Text>
      </TouchableWithoutFeedback>
      <Button title="Click Me" onPress={() => console.log("Button Pressed")} />
      <Button title="Button Tapped" onPress={() => alert("Button Tapped")} />
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />

      {/* This Will not work on Android */}
      <Button
        title="Promt"
        onPress={() =>
          Alert.prompt("My Title", "My message", (text) => console.log(text))
        }
      />
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
