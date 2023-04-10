import React from "react";
import { View, Image,ImageBackground, StyleSheet, Linking, StyleProp, ViewStyle } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const logo = require('../assets/images/logo.png');

const Header = () => {
    return (
        <ImageBackground
            source={logo}
            style={styles.container}
            resizeMode= 'contain'
        >
        <View style={styles.contentContainer}>
            <View style={styles.searchContainer}>
                <Icon name='search' size={20} color={'#333'} />
            </View>
            {/* <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logoImage}>
                </Image> 
            </View> */}
            <View style={styles.cartContainer}>
                <Icon name="shopping-cart" size={20} color="#333" />
            </View>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
      },
      contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
      },
      searchContainer: {
        width: 40,
        alignItems: 'center',
      },
      cartContainer: {
        width: 40,
        alignItems: 'center',
      },
    });

export default Header;