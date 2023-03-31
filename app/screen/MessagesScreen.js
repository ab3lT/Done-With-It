import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import ListItemSepartor from "../components/ListItemSepartor";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/backgroudImage.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/apple_product.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={(messages) => messages.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
      ItemSeparatorComponent={ListItemSepartor}
    />
  );
}

const styles = StyleSheet.create({});
