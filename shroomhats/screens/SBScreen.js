import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';


const SBScreen = ({ route }) => {
  const { snapBackHats } = route.params;

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity>
        <ProductItem item={item} />
      </TouchableOpacity>
    );
  };

  return (    
      <FlatList
          data={snapBackHats}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        /> 
  );
};

export default SBScreen;