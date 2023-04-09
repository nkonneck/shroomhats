import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Card } from "react-native-elements";

const ContactScreen = () => {
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
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title h2>Contact Us</Card.Title>
                <Card.Divider style={{ borderWidth: 2, borderColor: 'black'}} />
            </Card>
            <View style={styles.contact}>
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
                <Text style={styles.text}>© 2023 Shroom Hats. All rights reserved.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contact: {
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

export default ContactScreen;