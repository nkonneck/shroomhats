import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderHat = ({ hat }) => {
    if (hat) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={hat.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {hat.name}
                        </Text>
                    </View>
                </Card.Image>
            </Card>
        );
    }
    return <View />;
};
 
export default RenderHat;