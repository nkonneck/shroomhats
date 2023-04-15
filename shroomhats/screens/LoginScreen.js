import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import LoginForm from '../components/LoginForm';


const LoginScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title h2>Sign in</Card.Title>
                <Card.Divider style={styles.cardDivide} />
                <LoginForm />
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

export default LoginScreen;



// const handleLogin = () => {
    //     console.log('username:', username);
    //     console.log('password:', password);
    //     console.log('remember:', remember);
    //     if (remember) {
    //         SecureStore.setItemAsync(
    //             'userinfo',
    //             JSON.stringify({
    //                 username,
    //                 password
    //             })
    //         ).catch((error) => console.log('Could not save user info', error));
    //     } else {
    //         SecureStore.deleteItemAsync('userinfo').catch((error) =>
    //             console.log('Could not delete user info', error)
    //         );
    //     }
    // };