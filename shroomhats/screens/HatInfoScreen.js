import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductItem from '../components/ProductItem';

const HatInfoScreen = ({ route }) => {
  const { adjustableHats, flexFitHats } = route.params;
  //const { flexFitHats } = route.params;

const renderItem = ({ item }) => (
  <ProductItem item={item} />
);

  return (
    <View>
        <FlatList
          data={[...adjustableHats, ...flexFitHats]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          //extraData={flexFitHats}
        /> 
    </View>
  );
};

export default HatInfoScreen;