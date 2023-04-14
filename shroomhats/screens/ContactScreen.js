import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import SocialMedia from "../components/socialMedia";
import ContactForm from "../components/contactForm";

const ContactScreen = () => {
    

    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title h2>Contact Us</Card.Title>
                <Card.Divider style={styles.cardDivide} />
                <ContactForm />
                <Card.Divider style={styles.cardDivide} />
                <SocialMedia />
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardDivide:{
        borderWidth: 2, 
        borderColor: 'black',
        margin: 10,
    },
});

export default ContactScreen;