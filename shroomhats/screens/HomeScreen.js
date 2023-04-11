import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { HATS } from "../shared/hats";


const HomeScreen = ({ navigation }) => {
    const adjustableHats = HATS.filter(hat => hat.type === 'adjustable');
    const flexFitHats = HATS.filter(hat => hat.type === 'flexfit');

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('AHScreen', { adjustableHats })}
        >
          <Text style={styles.buttonText}>Adjustable Hats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('FFScreen', { flexFitHats })}
        >
          <Text style={styles.buttonText}>Flexfit Hats</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;




//const [hats, setHats] = useState(HATS);
//    const renderDirectoryItem = ({ item: hat }) => {
//     
//   return (
//     <FlatList
//       data={hats}
//       renderItem={renderDirectoryItem}
//       keyExtractor={(item) => item.id.toString()}
//     />
//   )
// };


  // const filterHatsByType = (type) => {
  //   const filtered = HATS.filter((hat) => hat.type === type);
  //   setFilteredHats(filtered);

  // };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => 
//           navigation.navigate('AHScreen',)
//           }
//       >
//         <Text style={styles.buttonText}>Adjustable Hats</Text>
//       </TouchableOpacity>
//       
//       <FlatList 
//         data={filteredHats}
//         renderItem={({ item }) => <ProductItem item={item} />}
//         keyExtractor={(item) => item.id.toString()}
//       /> */}
//     </View>
//   );
// };