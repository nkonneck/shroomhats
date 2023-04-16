import React, {useState, useRef} from "react";
import { TextInput, StyleSheet, View } from "react-native";
import {  Button} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Text } from "react-native-elements";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [focused, setFocused] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);
    
    const handleFocus = (field) => {
        setFocused(field);
    };

    const validateUsername = () => {
        if (!username) {
            setUsernameError('Username is required.');
            setUsernameValid(false);
        } else {
            setUsernameError('');
            setUsernameValid(true);
        }
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError('Password is required.');
            setPasswordValid(false);
        } else {
            setPasswordError('');
            setPasswordValid(true);
        }
    };

    const validateForm = () => {
        validateUsername();
        validatePassword();
            if (!usernameValid) {
                setUsernameError('Username is required.');
                setAttemptedSubmit(true);
                return false;
            } 
            if (!passwordValid) {
                setPasswordError('Password is required.')
                setAttemptedSubmit(true);
                return false;
            }
        return true;
    };   
    


    const resetForm = () => {
        setUsername('');
        setPassword('');
        setUsernameError('');
        setPasswordError('');
        setUsernameValid(false);
        setPasswordValid(false);
        setAttemptedSubmit(false);
    };

    const refPassword = useRef();

    return (
        <>
            <TextInput
                style={[
                    styles.input,
                    focused === 'userName' && styles.focusedInput, 
                    (attemptedSubmit && !usernameValid) && { borderColor: 'red', borderWidth: 1 }
                ]}
                value={username}
                onChangeText={(text) => {
                    setUsername(text);
                    validateUsername(text);
                }}
                placeholder="Username"
                autoFocus={true}
                keyboardAppearance='dark'
                selectionColor='slategrey'
                selectTextOnFocus='true'
                autoCapitalize='words'
                returnKeyType='next'
                onSubmitEditing={() => refPassword.current.focus()}
                onFocus={() => handleFocus('userName')}   
                onBlur={() => {
                    validateUsername();
                    setFocused('');
                    setAttemptedSubmit(true);
                }}
            />
            {usernameError ? <Text style={[styles.error, { marginTop: -20, marginBottom: 10, alignSelf: 'center' }]}>{usernameError}</Text> : null}
            
            <TextInput
                style={[
                    styles.input,
                    focused === 'password' && styles.focusedInput,
                    (attemptedSubmit && !passwordValid) && { borderColor: 'red', borderWidth: 1} 
                ]}
                value={password}
                onChangeText={(text) => {
                    setPassword(text);
                    validatePassword(text);
                }}
                placeholder="Password"
                keyboardAppearance='dark'
                selectionColor='slategrey'
                selectTextOnFocus='true'
                secureTextEntry='true'
                returnKeyType='done'
                onFocus={() => handleFocus('password')}
                ref={refPassword}
                onSubmitEditing={() => setFocused(' ')}
                onBlur={() => {
                    validatePassword();
                    setFocused('');
                    setAttemptedSubmit(true);
                }}
            />
            {passwordError ? <Text style={[styles.error, { marginTop: -20, marginBottom: 10, alignSelf: 'center' }]}>{passwordError}</Text> : null}
            
            <BouncyCheckbox
                size={20}
                fillColor='rgba(0, 0, 0, 1)'
                text="Remember Me?"
                isChecked={remember}
                onPress={() => setRemember(!remember)}
                textStyle={{
                    textDecorationLine: 'none',
                }}
                style={styles.formCheckbox}
            />
            
            <View style={styles.formButton}>
                <Button
                    onPress={() => {
                        console.log({ username, password });
                        const formValid = validateForm();
                            if (formValid) {
                                resetForm();
                            }
                    }}
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
    error: {
        color: 'red',
        fontSize: 10,
    },
});

export default LoginForm;