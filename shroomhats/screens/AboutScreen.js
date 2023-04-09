import { Card } from "react-native-elements";
import { Text, ScrollView, View, Linking, StyleSheet, TouchableOpacity } from "react-native";

const AboutScreen = () => {
    return( 
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Mission />
            </ScrollView>
        <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://shroomhats.com/privacy-policy/')}>
                <Text style={styles.linkText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://shroomhats.com/refunds_returns_exchanges/')}>
                <Text style={styles.linkText}>Refund and Returns Policy</Text>
            </TouchableOpacity>
    </View>
    </View>
    );
};

const CustomButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

const Mission = () => {
    const handeDonatePress = () => {
        Linking.openURL('https://thethirdwave.co/donate/');
    };

    return (
        <Card>
            <Card.Title h1>About Us</Card.Title>
            <Card.Divider style={{ borderWidth: 2, borderColor: 'black' }}/>
            <Text
                style={{ margin: 10 }}
            >
            Shroom Hats, LLC sells hats with custom mushroom-themed designs embroidered on them. Our designs are created in-house. 
            We strongly support the legalization and decriminalization of psychedelics. 
            </Text>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Starting at the end of 2023, Shroom Hats, LLC will begin making lump-sum donations of 10% of our annual profits to psychedelic and psilocybin research. You can donate too!
            </Text>
            <View style={styles.buttonContainer}>
                <CustomButton title='DONATE' onPress={handeDonatePress} />
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //width: '100%',
      },
      button: {
        backgroundColor: '#4c4139',
        paddingVertical: 15,
        paddingHorizontal: 26,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
      linksContainer: {
        backgroundColor: '#e5e4e2',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
      },
      linkText: {
        marginVertical: 40,
        marginHorizontal: 10,
        color: 'black',
        fontSize: 15,
      },
  });

export default AboutScreen;