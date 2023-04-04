import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Smart watch for sale",
    price: 100,
    image: require("../assets/smart_watch.jpg"),
  },
  {
    id: 2,
    title: "Air pode for sale",
    price: 100,
    image: require("../assets/aripod.jpg"),
  },
  {
    id: 3,
    title: "Apple for sale",
    price: 100,
    image: require("../assets/apple_product.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.Screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  Screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
