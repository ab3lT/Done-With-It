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
import ViewImageScreen from "./app/screen/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}
