import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screen/AccountScreen";
import ListingScreen from "./app/screen/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { lable: "Furniture", value: 1 },
  { lable: "Clothing", value: 2 },
  { lable: "Cameras", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
