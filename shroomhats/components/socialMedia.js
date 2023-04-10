import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
 
const SocialMedia = () => {
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
            <View style={styles.icons}>
                <TouchableOpacity onPress={handleFacebookPress}>
                    <AntDesign name="facebook-square" size={40} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleInstagramPress}>
                    <AntDesign name="instagram" size={40} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRedditPress}>
                    <FontAwesome name="reddit-square" size={40} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>© 2023 Shroom Hats. All rights reserved.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 80,
        backgroundColor: 'rgba(231, 244, 228, 0.35)',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
       // marginTop: 5,
        position: 'relative',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#212121',
        position: 'absolute',
        bottom: 0,
    },
    icons: {
        flexDirection: 'row',
        paddingBottom: 15,
    },
    icon: {
        marginHorizontal: 8,
    },
});

export default SocialMedia;