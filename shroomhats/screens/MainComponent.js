import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import Constants from 'expo-constants';
import AHScreen from './AHScreen';
import FFScreen from './FFScreen';
import SBScreen from './SBScreen';
import LoginScreen from './LoginScreen';
import { Platform, View, Image, StyleSheet, StatusBar, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';



const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: 'black',
    headerStyle: { backgroundColor: 'rgba(50, 50, 20 , 0.1)',  },
};

const LogoTitle = () => {
    return (
        <Image 
            style={{width: 100, height: 50, marginBottom: 10 }} 
            source={require('../assets/images/logo.png')}
        />
    );
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Back'
                component={HomeScreen}
                options={{ 
                    headerTitle: (props) => <LogoTitle {...props} />,
                    // headerLeft: () => (
                    //     <Icon style={styles.searchIcon}
                    //         name='search'
                    //         size={20}
                    //         color={'#333'}
                    //     />
                    // ),
                    // headerRight: () => (
                    //     <Icon style={styles.cartIcon}
                    //         name="shopping-cart" 
                    //         size={20} 
                    //         color="#333"
                    //     />
                    // )
            }}
            />
            <Stack.Screen 
                name='AHScreen'
                component={AHScreen} 
                options={{
                    headerTitle: () => <Text>Adjustable Hats</Text>,
                    // headerRight: () => (
                    //     <Icon style={styles.cartIcon}
                    //         name="shopping-cart" 
                    //         size={20} 
                    //         color="#333"
                    //     />
                    // )
                }}
            />
            <Stack.Screen 
                name='FFScreen'
                component={FFScreen} 
                options={{
                    headerTitle: () => <Text>Flexfit Hats</Text>,
                    // headerRight: () => (
                    //     <Icon style={styles.cartIcon}
                    //         name="shopping-cart" 
                    //         size={20} 
                    //         color="#333"
                    //     />
                    // )
                }}
            />
            <Stack.Screen 
                name='SBScreen'
                component={SBScreen} 
                options={{
                    headerTitle: () => <Text>Snapback Hats</Text>,
                    // headerRight: () => (
                    //     <Icon style={styles.cartIcon}
                    //         name="shopping-cart" 
                    //         size={20} 
                    //         color="#333"
                    //     />
                    // )
                }}
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
                options={{ headerTitle: (props) => <LogoTitle {...props} />, }}

            />
        </Stack.Navigator>
    );
};

const LoginNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={LoginScreen}
                options={{ headerTitle: (props) => <LogoTitle {...props} />, }}
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
                options={{ headerTitle: (props) => <LogoTitle {...props} />, }}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    return ( 
        
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
         >
            <StatusBar barStyle="dark-content"/>  

         <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{ 
                activeTintColor: '#ffffff',
                inactiveTintColor: '#abb8c3',
                style: {backgroundColor: '#374c45' },
            }}
            >
            <Tab.Screen
                name='Shop'
                component={HomeNavigator}
                options={{ 
                    tabBarLabel: 'Shop', 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-home-outline' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name='Account'
                component={LoginNavigator}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='person-circle' size={size} color={color}/>
                    ),
                }}
            /> 
            <Tab.Screen 
                name='Contact'
                component={ContactNavigator}
                options={{
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-chatbubbles-outline' size={size} color={color}/>
                    ),
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
         </Tab.Navigator> 
        </View>
    );
};

const styles = StyleSheet.create({
    searchIcon: {
        marginLeft: 20,
        alignItems: 'center'
    },
    cartIcon: {
        marginRight: 20,
        alignItems: 'center'
    },
});

export default Main;