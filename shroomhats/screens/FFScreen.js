import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductItem from '../components/ProductItem';

const FFScreen = ({ route }) => {
    const { flexFitHats } = route.params;
  
  const renderItem = ({ item }) => (
    <ProductItem item={item} />
  );
  
    return (
      <View>
          <FlatList
            data={flexFitHats}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          /> 
      </View>
    );
  };

export default FFScreen;