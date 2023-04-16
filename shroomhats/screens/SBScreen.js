import React, { useEffect, useState} from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import Loading from '../components/LoadingComponent';

const SBScreen = ({ route }) => {
  const { snapBackHats } = route.params;
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
          data={snapBackHats}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        /> 
  );
};

export default SBScreen;