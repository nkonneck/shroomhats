import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
 
const Footer = () => {
    const handleFacebookPress = () => {
        Linking.openURL('https://www.facebook.com/shroomhats');
    };

    const handleInstagramPress = () => {
        Linking.openURL('https://www.instagram.com/shroomhats/');
    };

    const handleRedditPress = () => {
        Linking.openURL('https://www.reddit.com/user/shroomhats');
    };

    return (
        <View style={styles.footer}>
            <Text style={styles.text}>© 2023 Shroom Hats. All rights reserved.</Text>
            <View style={styles.icons}>
                <TouchableOpacity onPress={handleFacebookPress}>
                    <AntDesign name="facebook-square" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleInstagramPress}>
                    <AntDesign name="instagram" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRedditPress}>
                    <FontAwesome name="reddit-square" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 60,
        backgroundColor: '#374c45',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        color: '#ffffff'
    },
    icons: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 8,
    },
});

export default Footer;