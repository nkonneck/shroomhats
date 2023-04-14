import React from 'react';
import { FlatList, TouchableOpacity, } from 'react-native';
import ProductItem from '../components/ProductItem';

const FFScreen = ({ route }) => {
    const { flexFitHats } = route.params;
    
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity>
          <ProductItem item={item} />
        </TouchableOpacity>      
      );
    };

    return ( 
          <FlatList   
            data={flexFitHats}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
    );
  };
 
  
export default FFScreen;

