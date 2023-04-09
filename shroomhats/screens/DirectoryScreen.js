import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { HATS } from '../shared/hats';



const DirectoryScreen = ({ navigation }) => {
    const [hats, setHats] = useState(HATS);

    const renderDirectoryItem = ({ item: hat }) => {
        return (
            <ListItem 
                onPress={() => 
                    navigation.navigate('HatInfo', { hat })
                }
            >
                <Avatar source={hat.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{hat.name}</ListItem.Title>
                    <ListItem.Subtitle>{hat.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        ); 
    };
    return (
        <FlatList 
            data={hats}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;