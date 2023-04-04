import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import ListItemSepartor from "../components/ListItemSepartor";

const initialMessages = [
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
  const [messages, setmessages] = useState(initialMessages);
  const handleDelete = (message) => {
    // Delete the message from messages
    // delete the message from server
    setmessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <FlatList
      data={messages}
      keyExtractor={(messages) => messages.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Message selected", item)}
          renderRightActions={() => {
            () => (
              <ListItemDeleteAction
                onPress={() => handleDelete(item)}
              ></ListItemDeleteAction>
            );
          }}
        />
      )}
      ItemSeparatorComponent={ListItemSepartor}
    />
  );
}

const styles = StyleSheet.create({});
