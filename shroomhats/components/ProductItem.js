import React, { useState }  from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import  { BlurView }  from 'expo-blur';
import Icon from 'react-native-vector-icons/AntDesign';


const ProductItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
          <TouchableOpacity style={styles.detailsContainer}
            onPress={() => setShowModal(true)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>   
          </TouchableOpacity>
      </View>
      <Modal 
        isVisible={showModal}
        style={styles.modal}
      >
        <View style={styles.modalBackground}>
            <BlurView intensity={10} style={styles.modalBlur}>
            </BlurView>
          <View style={styles.modalContainer}>
              <TouchableOpacity
                  style={styles.closeButton} 
                  onPress={() => setShowModal(false)}
              >
                <Icon name="closecircleo" size={40} color={'black'} />
            </TouchableOpacity>
            <Image source={item.image} style={styles.modalImage} />
                <Text style={styles.modalName}>{item.name}</Text>
                <Text style={styles.modalDescription}>{item.description}</Text>
                <Text style={styles.modalPrice}>${item.price}</Text>
            <View style={styles.formContainer}>
            <TouchableOpacity 
                  style={styles.formLabel}
                  onPress={removeItem}>
                    <Icon name='minuscircle' size={25} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.formQuantityText}>{quantity}</Text>
                <TouchableOpacity 
                  style={styles.formLabel}
                  onPress={addItem}>
                    <Icon name='pluscircle' size={25} color={'black'} />
                </TouchableOpacity> 
              </View> 
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
    backgroundColor: "rgba(40, 91, 2, 0.1)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    margin: 0,
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
    justifyContent: 'space-evenly',
    height: '70%',
    width: '90%',  
  },
  modalImage: {
    height: 200,
    width: 200,
    borderRadius: 20,
    backgroundColor: 'rgba(220, 220, 220, 0.1)'
  },
  modalName: {
    fontSize: 20,
    fontWeight: 'bold',
    //backgroundColor: 'rgba(50, 50, 50, 0.5)'
  },
  modalDescription: {
    fontSize: 16,
    //backgroundColor: 'rgba(50, 50, 50, 0.5)'
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    //backgroundColor: 'rgba(50, 50, 50, 0.5)'
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 130,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  formLabel: {
    fontSize: 18,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FormButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  formQuantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    position: 'absolute',
    top: '1%',
    left: '1%',
  },
});

export default ProductItem;




{/* <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View> */}