import { StyleSheet, Switch, View } from "react-native";
import React, { useState } from "react";

export default function AppSwitch() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
