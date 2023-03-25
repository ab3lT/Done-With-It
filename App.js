import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Platform, StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';

export default function App() {
  return (
    <View>
      
      <WelcomeScreen/>
    </View>
    );
  
}


