import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import Loading from '../components/LoadingComponent';


const AHScreen = ({ route }) => {
  const { adjustableHats } = route.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
      return () => clearTimeout(timeoutId);
  }, []);

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity>
        <ProductItem item={item} />
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return <Loading />
  }

  return (    
      <FlatList
          data={adjustableHats}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        /> 
  );
};

export default AHScreen;