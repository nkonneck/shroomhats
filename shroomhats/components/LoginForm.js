import React, {useState} from "react";
import { TextInput, StyleSheet, View } from "react-native";
import {  Button} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [focused, setFocused] = useState('');

    const handleFocus = (field) => {
        setFocused(field);
    };

    return (
        <>
            <TextInput
                style={[
                    styles.input,
                    focused === 'userName' && styles.focusedInput, 
                ]}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                keyboardAppearance='dark'
                selectionColor='slategrey'
                selectTextOnFocus='true'
                onFocus={() => handleFocus('userName')}   
            />
            <TextInput
                style={[
                    styles.input,
                    focused === 'password' && styles.focusedInput, 
                ]}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                keyboardAppearance='dark'
                selectionColor='slategrey'
                selectTextOnFocus='true'
                secureTextEntry='true'
                onFocus={() => handleFocus('password')}
            />
            <BouncyCheckbox
                size={20}
                //fillColor='rgba(0, 128, 0, 0.5)'
                fillColor='rgba(0, 0, 0, 1)'
                text="Remember Me?"
                onPress={() => setRemember(!remember)}
                textStyle={{
                    textDecorationLine: 'none',
                }}
                style={styles.formCheckbox}
            />
            <View style={styles.formButton}>
                <Button
                    //onPress={() => handleLogin()} will be added later
                    title='Login'
                    icon={
                        <Icon
                            name='enter'
                            size={20}
                            color='black'  
                        />
                    }
                    buttonStyle={{ backgroundColor: 'rgba(0, 128, 0, 0.4)', borderRadius: 10, }}
                    titleStyle={{ color: 'black', marginLeft: 20, }}
                />
            </View>  
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 20,
    },
    focusedInput: {
        borderColor: 'rgba(0, 128, 0, 0.2)',
        borderWidth: 3,
    },
    buttonStyle: {
         backgroundColor: 'rgba(0, 128, 0, 0.4)',
         width: '30%', 
         margin: 20, 
         padding: 10,
         borderRadius: 20, 
         alignItems: 'center',
         alignSelf: 'center',
    },
    formCheckbox: {
        margin: 8,
        borderColor: 'rgba(204, 204, 204, 0.6)',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 8,
    },
    formButton: {
        margin: 20,
        marginRight: 40,
        marginLeft: 40,
        alignContent: 'space-evenly'
    },
});

export default LoginForm;