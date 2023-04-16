import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator 
                animating={true} 
                color={MD2Colors.deepPurple300} 
                size="large"
                />  
        </View>
    )

}

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: '#5637DD',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default Loading;