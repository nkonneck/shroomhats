import React, {useState, useRef} from "react";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Text } from "react-native-elements";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState('');
    const [phoneNumError, setPhoneNumError] = useState('');
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [emailValid, setEmailValid] = useState(false);

    const handleFocus = (field) => {
        setFocused(field);
    };

    const validatePhoneNum = () => {
        if (!phoneNum) {
            setPhoneNumError('');
        } else if (phoneNum.length < 10 && attemptedSubmit) {
            setPhoneNumError('Phone number should be 10 digits. Ex: 555-555-5555');
        } else if (phoneNum.length > 1 && phoneNum.length < 10) {
            setPhoneNumError('Phone number should be at least 10 digits. Ex: 555-555-5555');
        } else {
            setPhoneNumError('');
        }
    };

    const validateEmail = () => {
        if (email.trim() === '') {
          setEmailError('');
          setEmailValid(false);
        } else if (!email.includes('@')) {
          setEmailError('Email must contain "@" symbol.');
          setEmailValid(false);
        } else {
          setEmailError('');
          setEmailValid(true);
        }
    };

    const validateForm = () => {
        validateEmail();
            if (!emailValid) {
                setEmailError('Email is required.');
            }
            if (!emailValid) {
                setAttemptedSubmit(true);
                return false;
            }
         return true;
    };

    const resetForm = () => {
        setName('');
        setPhoneNum('');
        setEmail('');
        setPhoneNumError('');
        setAttemptedSubmit(false);
        setEmailValid(false);
    };

    const refPhone = useRef();
    const refEmail = useRef();

    const SubmitButton = ({ onPress }) => {
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}
          >
            <FontAwesomeIcon icon={faArrowRightLong} size={20} color='black' /> 
          </TouchableOpacity>
        );
      };

return (
    <> 
        <TextInput 
            style={[
                styles.input,
                focused === 'name' && styles.focusedInput, 
            ]}
            value={name}
            autoFocus={true}
            onChangeText={setName}
            placeholder="Name"
            keyboardAppearance='dark'
            selectionColor='slategrey'
            selectTextOnFocus='true'
            autoCapitalize='words'
            returnKeyType='next'
            onBlur={() => setFocused('')}
            onSubmitEditing={() => refPhone.current.focus()}
            onFocus={() => setFocused('name')}
        />
        <TextInput 
            style={[
                styles.input,
                focused === 'phoneNum' && styles.focusedInput, 
            ]}
            value={phoneNum}
            onChangeText={(text) => {
                setPhoneNum(text);
                validatePhoneNum(text);
                if (text.length === 10) {
                    refEmail.current.focus()
                }
            }}
            placeholder="Phone Number"
            keyboardType="numeric"
            keyboardAppearance='dark'
            selectionColor='slategrey'
            selectTextOnFocus='true'
            maxLength= '10'
            ref={refPhone}
            onFocus={() => handleFocus('phoneNum')}
            onBlur={() => {
                validatePhoneNum();
                setAttemptedSubmit(true);
                setFocused('');
            }}
            />
            {phoneNumError ? <Text style={[styles.error, { marginTop: -20, marginBottom: 10, alignSelf: 'center' }]}>{phoneNumError}</Text> : null}
        <TextInput 
            style={[
                styles.input,
                focused === 'email' && styles.focusedInput,
                (attemptedSubmit && !emailValid ) && { borderColor: 'red', borderWidth: 1 } 
            ]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            keyboardAppearance='dark'
            selectionColor='slategrey'
            selectTextOnFocus='true'
            returnKeyType='done'
            ref={refEmail}
            onFocus={() => setFocused('email')}
            onSubmitEditing={() => setFocused(' ')}
            onBlur={() => {
                validateEmail();
                setFocused('');
            }}
        />
            {attemptedSubmit && !emailValid && (
            <Text style={[styles.error, { marginTop: -20, marginBottom: 10, alignSelf: 'center'}]}>{emailError}</Text>
            )} 
        <SubmitButton onPress={() => {
            console.log({ name, phoneNum, email });
            const formValid = validateForm();
                if (formValid) {
                    resetForm();
                }
            }}
        />
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
    error: {
        color: 'red',
        fontSize: 10,
    },
});

export default ContactForm;