import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { HATS } from "../shared/hats";
import beachhat from "../assets/images/beachhat.png";
import yodahat from "../assets/images/yodahat.png";
import pizzahat from "../assets/images/pizzahat.png";
import blueshroom from "../assets/images/blueshroom-blackteal.png";


const HomeScreen = ({ navigation }) => {
    const adjustableHats = HATS.filter(hat => hat.type === 'adjustable');
    const flexFitHats = HATS.filter(hat => hat.type === 'flexfit');
    const snapBackHats = HATS.filter(hat => hat.type === 'snapback');

    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('AHScreen', { adjustableHats })}
          >
              <Text style={styles.buttonText}>Adjustable Hats</Text>
              <Image source={beachhat} style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('FFScreen', { flexFitHats })
            }
          >
              <Text style={styles.buttonText}>Flexfit Hats</Text>
              <Image source={pizzahat} style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('SBScreen', { snapBackHats })
            }
          >
              <Text style={styles.buttonText}>Snapback Hats</Text>
              <Image source={blueshroom} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: '90%',
    backgroundColor: "rgba(40, 91, 2, 0.2)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  buttonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default HomeScreen;