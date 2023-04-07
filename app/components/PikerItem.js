import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function PikerItem({ lable, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{lable}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    margin: 10,
    backgroundColor: colors.secoundary,
    color: colors.danger,
    justifyContent: "flex-end",
  },
});
