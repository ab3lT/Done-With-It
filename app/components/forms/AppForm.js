import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import AppPicker from "../AppPicker";

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

const styles = StyleSheet.create({});
