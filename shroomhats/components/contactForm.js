import React, {useState} from "react";
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

return (
    <>
        <TextInput 
            style={[
                styles.input,
                focused === 'name' && styles.focusedInput, 
            ]}
            value={name}
            onChangeText={setName}
            placeholder="Name"
            keyboardAppearance='dark'
            selectionColor='slategrey'
            selectTextOnFocus='true'
            onFocus={() => handleFocus('name')}
        />
        <TextInput 
            style={[
                styles.input,
                focused === 'phoneNum' && styles.focusedInput, 
            ]}
            value={phoneNum}
            onChangeText={setPhoneNum}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            keyboardAppearance='dark'
            selectionColor='slategrey'
            selectTextOnFocus='true'
            maxLength= '10'
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
            onFocus={() => handleFocus('email')}
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