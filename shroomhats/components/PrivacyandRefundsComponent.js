import { Text, View, Linking, StyleSheet, TouchableOpacity } from "react-native";

const PRScreen = () => {
    return( 
        <View style={{ flex: 1 }}>
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

const styles = StyleSheet.create({
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

export default PRScreen;