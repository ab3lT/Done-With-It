import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/backgroudImage.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/bg-image.jpg")} style={styles.logo} />
        <Text>Sell what you don't need</Text>
      </View>
      <View styles={styles.loginButton}></View>
      <View styles={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});

export default WelcomeScreen;
