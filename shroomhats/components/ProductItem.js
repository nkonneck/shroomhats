import React, { useState }  from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from "react-native";
import Modal from 'react-native-modal';
import  { BlurView }  from 'expo-blur';

const ProductItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
          <TouchableOpacity style={styles.detailsContainer}
          onPress={() => 
            setShowModal(true)}
          >
            <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              {/* <Text style={styles.description}>{item.description}</Text> */}
              <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
      </View>
      <Modal 
        isVisible={showModal}
        // onBackdropPress={() => setShowModal(false)}
        // backdropOpacity={0.7}
        style={styles.modal}
      >
        <View style={styles.modalBackground}>
          <BlurView intensity={10} style={styles.modalBlur}>
            <TouchableOpacity 
              style={styles.touchable}
              onPress={() => setShowModal(false)}
              />
          </BlurView>
          <View style={styles.modalContainer}>
            <Image source={item.image} style={styles.modalImage} />
                <Text style={styles.modalName}>{item.name}</Text>
                <Text style={styles.modalDescription}>{item.description}</Text>
                <Text style={styles.modalPrice}>${item.price}</Text>
                <Button title='close' onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  detailsContainer: {
    width: '90%',
    backgroundColor: "rgba(40, 91, 2, 0.2)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modal: {
    margin: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBlur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  touchable: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: '90%',
    
  },
  modalImage: {
    height: 200,
    width: 200,
    marginBottom: 5,
  },
  modalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ProductItem;
