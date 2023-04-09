import { useState } from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { HATS } from "../shared/hats";

const FeaturedItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Title h3>Beach Hat</Card.Title>
                <Card.Divider />
                <View style={{ position:'relative', alignItems: 'center' }}>
                    <Image 
                    source={item.image} 
                    style={{ width: 200, height: 200, resizeMode: 'contain' }} />       
                </View>
                <Card.Divider />
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        );
    }
    return <View />;
};

const HomeScreen = () => {
    const [hats, SetHats] = useState(HATS);
    
    const featHat = hats.find((item) => item.featured);
    

    return (
        <ScrollView>
           <FeaturedItem item={featHat} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

})

export default HomeScreen;