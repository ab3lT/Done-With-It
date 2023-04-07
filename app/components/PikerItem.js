import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";

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
  },
});