import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}></Image> 
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 40,
    },
    logo: {
        width: 120,
        height: 50,
        resizeMode: 'contain',
    },
});

export default Header;