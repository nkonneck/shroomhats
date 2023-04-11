import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductItem from '../components/ProductItem';

const AHScreen = ({ route }) => {
  const { adjustableHats } = route.params;

const renderItem = ({ item }) => (
  <ProductItem item={item} />
);

  return (
    <View>
        <FlatList
          data={adjustableHats}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        /> 
    </View>
  );
};

export default AHScreen;




 

  
   