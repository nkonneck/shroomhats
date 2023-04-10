import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.detailsContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    marginRight: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProductItem;
