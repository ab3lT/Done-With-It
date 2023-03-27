import { View, Text } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textDecorationLine: "underline",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I Love React Native! This is Not My First React Native App! Here's Some
        more text
      </Text>
    </View>
  );
}
