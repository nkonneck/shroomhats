import React, { useState } from 'react';
import { View, FlatList, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ProductItem from '../components/ProductItem';

const FFScreen = ({ route }) => {
    const { flexFitHats } = route.params;
    
    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity>
                    <ProductItem item={item} />
                </TouchableOpacity>
            </View>
    );
};
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

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'red',
      borderRadius: 20,
      padding: 100,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    closeButton: {
      backgroundColor: '#2196F3',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 20,
    },
    closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
export default FFScreen;

