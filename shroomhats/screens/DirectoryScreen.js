import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: hat }) => {
        return (
            <ListItem onPress={() => props.onPress(hat.id)}>
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
            data={props.hats}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;