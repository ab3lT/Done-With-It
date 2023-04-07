import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/aripod.jpg")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autocapitalize="none"
              autoCorrect={false}
              icon="email"
              keyBordType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress" // only works on ios it felss email form the key chain
            />
            <AppTextInput
              autocapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
