// import { useState } from 'react';
// import { HATS } from '../shared/hats';
import DirectoryScreen from './DirectoryScreen';
import HatInfoScreen from './HatInfoScreen';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import Header from '../components/headercomponent';
// import Footer from '../components/footercomponent';
import Constants from 'expo-constants';
import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: '#abb8c3',
    headerStyle: { backgroundColor: '#ffffff'}
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    );
};

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
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

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='About'
                component={AboutScreen}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={{ title: 'Contact Us '}}
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
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{ 
                    activeTintColor: '#ffffff',
                    inactiveTintColor: '#abb8c3',
                    style: {backgroundColor: '#374c45' }}}
            >
            <Tab.Screen
                name='Home'
                component={HomeNavigator}
                options={{ 
                    tabBarLabel: 'Home', 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-home-outline' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name='Directory'
                component={DirectoryNavigator}
                options={{ 
                    tabBarLabel: 'Directory',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-list-outline' size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name='About'
                component={AboutNavigator}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='information-circle' size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name='Contact'
                component={ContactNavigator}
                options={{
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-chatbubbles-outline' size={size} color={color}/>
                    )
                }}
            />
            </Tab.Navigator>
        </View>
    );
    
};

export default Main;