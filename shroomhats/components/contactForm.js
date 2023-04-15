import React, {useState, useRef} from "react";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const SubmitButton = ({ onPress }) => {
    return (
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onPress}
      >
        {/* <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Submit</Text> */}
        <FontAwesomeIcon icon={faArrowRightLong} size={20} color='black' />
        
      </TouchableOpacity>
    );
  };

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState('');

    const handleFocus = (field) => {
        setFocused(field);
    };

    const refPhone = useRef();
    const refEmail = useRef();

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
            onSubmitEditing={() => refPhone.current.focus()}
            onFocus={() => handleFocus('name')}
        />
        <TextInput 
            style={[
                styles.input,
                focused === 'phoneNum' && styles.focusedInput, 
            ]}
            value={phoneNum}
            onChangeText={(text) => {
                setPhoneNum(text);
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
        />
        <TextInput 
            style={[
                styles.input,
                focused === 'email' && styles.focusedInput, 
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
            onFocus={() => handleFocus('email')}
            onSubmitEditing={() => setFocused(' ')} 
        />
        <SubmitButton onPress={() => console.log({ name, phoneNum, email })} />
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
});

export default ContactForm;