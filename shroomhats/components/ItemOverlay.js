import React from "react";
import { View, Text } from "react-native";

const ItemOverlay = ({ item }) => {
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Text>Add to Cart</Text>
            <Text>Quantity</Text>
        </View>
    );
};

export default ItemOverlay;