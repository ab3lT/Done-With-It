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
import LoginScreen from "./app/screen/LoginScreen";
import ListingEditScreen from "./app/screen/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}
