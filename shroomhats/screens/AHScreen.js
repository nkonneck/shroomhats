import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductItem from '../components/ProductItem';

const AHScreen = () => {
  return (
    <View>
        <Text>Test</Text>
    </View>
  );
};

export default AHScreen;




 //const { filterFunction } = route.params;
  //const [filteredHats, setFilteredHats] = useState([]);

//   useEffect(() => {
//     if (filterFunction) {
//         setFilteredHats(filterFunction());
//     }
    
//   }, [filterFunction]);

  
      {/* <FlatList
        data={filteredHats}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      /> */}