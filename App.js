import { SafeAreaView, View, StyleSheet } from "react-native";

import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
export default function App() {
  return (
    <Screen>
      <Icon name="email" size={40} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
