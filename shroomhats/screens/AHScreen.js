import React from 'react';
import { View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';


const AHScreen = ({ route }) => {
  const { adjustableHats } = route.params;

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity>
        <ProductItem item={item} />
      </TouchableOpacity>
    );
  };

  return (    
      <FlatList
          data={adjustableHats}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        /> 
  );
};

export default AHScreen;