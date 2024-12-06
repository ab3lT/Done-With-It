import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";

import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  email:
    Yup.string().required().email().label("Email") ||
    Yup.string().required().min(4).label("UserName"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/aripod.jpg")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autocapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyBordType="email-address"
          placeholder="Email"
          textContentType="emailAddress" // only works on ios it felss email form the key chain
        />

        <AppFormField
          autocapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
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
