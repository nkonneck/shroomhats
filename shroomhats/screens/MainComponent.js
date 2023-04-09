// import { useState } from 'react';
// import { HATS } from '../shared/hats';
import DirectoryScreen from './DirectoryScreen';
import HatInfoScreen from './HatInfoScreen';
import Header from '../components/headercomponent';
// import Footer from '../components/footercomponent';
import Constants from 'expo-constants';
import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffffff'
                },
                headerTintColor: '#abb8c3'
            }}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Hats Directory' }}
            />
            <Stack.Screen
                name='HatInfo'
                component={HatInfoScreen}
                options={({ route }) => ({
                    title: route.params.hat.name
                })}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    // const [hats, setHats] = useState(HATS);
    // const [selectedHatId, setSelectedHatId] = useState();

    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Header />
            <DirectoryNavigator />
        </View>
    );
    
};

export default Main;