import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ListItemSepartor() {
  return <View style={styles.separtor} />;
}

const styles = StyleSheet.create({
  separtor: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
