import React, { useState }  from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { BlurView } from 'expo-blur';
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
      <View styles={styles.centeredView}>
        <Modal
         visible={showModal}
         animationType='slide'
         transparent={true}
           >   
        <View style={styles.centeredView}>
        <BlurView intensity={20} style={styles.blurModal} />
            <View style={styles.modalView}>
                <Image style={styles.modalImage} source={item.image}  />
                <Text style={styles.modalText}>{item.name}</Text>
                <View style={styles.divider} />
                <Text style={styles.modalText}>{item.description}</Text>
                <View style={styles.divider} />
                <Text style={styles.modalText}>Price: ${item.price}</Text>
                <View style={styles.formContainer}>
                  <TouchableOpacity
                      style={styles.formLabel}
                      onPress={removeItem}>
                      <Icon name='minuscircle' size={25} color={'black'} />
                  </TouchableOpacity>
                    <Text style={styles.formLabel}>{quantity}</Text>
                    <TouchableOpacity
                      style={styles.formLabel}
                      onPress={addItem}>
                      <Icon name='pluscircle' size={25} color={'black'} />
                    </TouchableOpacity>
                    </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowModal(!showModal)}
              >
                <Icon name='closecircle' size={40} color='black' /> 
              </TouchableOpacity>
              </View>
            </View>
        </Modal>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
              onPress={() => setShowModal(true)}
            >
              <Image source={item.image} style={styles.buttonImage} />
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
            </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
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
  buttonImage: {
    height: 120,
    width: 120,
  },
  buttonText: {
    fontSize: 18,
    margin: 10,
  },
  modalImage: {
    height: 250,
    width: 250,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
  divider: {
    backgroundColor: 'gray',
    height: 3,
    width: 300,
  },
  blurModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 130,
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  formLabel: {
    fontSize: 18, 
  },
  closeButton: {
    position: 'absolute',
    top: '1%',
    left: '2%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.7,
  shadowRadius: 6,
},
});

export default ProductItem;