import { View } from "react-native";

import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={{ padding: 20, paddingTop: 100 }}>
      <Card
        title="Smart Watch for sale"
        subTitle="$100"
        image={require("./app/assets/smart_watch.jpg")}
      />
    </View>
  );
}
