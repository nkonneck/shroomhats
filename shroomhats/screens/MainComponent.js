import DirectoryScreen from './DirectoryScreen';
import HatInfoScreen from './HatInfoScreen';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import Constants from 'expo-constants';
import AHScreen from './AHScreen';
import FFScreen from './FFScreen';
import { Platform, View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';



const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: 'black',
    headerStyle: { backgroundColor: '#fff' },
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
                name='Discover'
                component={HomeScreen}
                options={{ 
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerLeft: () => (
                        <Icon style={styles.searchIcon}
                            name='search'
                            size={20}
                            color={'#333'}
                        />
                    ),
                    headerRight: () => (
                        <Icon style={styles.cartIcon}
                            name="shopping-cart" 
                            size={20} 
                            color="#333"
                        />
                    )
            }}
            />
            <Stack.Screen 
                name='AHScreen'
                component={AHScreen} 
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    // headerLeft: () => (
                    //     <Icon style={styles.searchIcon}
                    //         name='search'
                    //         size={20}
                    //         color={'#333'}
                    //     />
                    // ),
                    headerRight: () => (
                        <Icon style={styles.cartIcon}
                            name="shopping-cart" 
                            size={20} 
                            color="#333"
                        />
                    )
                }}
            />
            <Stack.Screen 
                name='FFScreen'
                component={FFScreen} 
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    // headerLeft: () => (
                    //     <Icon style={styles.searchIcon}
                    //         name='search'
                    //         size={20}
                    //         color={'#333'}
                    //     />
                    // ),
                    headerRight: () => (
                        <Icon style={styles.cartIcon}
                            name="shopping-cart" 
                            size={20} 
                            color="#333"
                        />
                    )
                }}
            />
        </Stack.Navigator>
    );
};


// const DirectoryNavigator = () => {
//     const Stack = createStackNavigator();
//     return (
//         <Stack.Navigator
//             initialRouteName='Directory'
//             screenOptions={screenOptions}
//         >
//             <Stack.Screen
//                 name='Directory'
//                 component={DirectoryScreen}
//                 options={{ headerTitle: (props) => <LogoTitle {...props} />, }}
//             />
//             <Stack.Screen
//                 name='HatInfo'
//                 component={HatInfoScreen}
//                 options={({ route }) => ({
//                     title: route.params.hat.name
//                 })}
//             />
//         </Stack.Navigator>
//     );
// };

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
           
         <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{ 
                activeTintColor: '#ffffff',
                inactiveTintColor: '#abb8c3',
                style: {backgroundColor: '#374c45' },
            }}
            >
            <Tab.Screen
                name='Discover'
                component={HomeNavigator}
                options={{ 
                    tabBarLabel: 'Discover', 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-home-outline' size={size} color={color} />
                    )
                }}
            />
            {/* <Tab.Screen 
                name='Directory'
                component={DirectoryNavigator}
                options={{ 
                    tabBarLabel: 'Directory',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-list-outline' size={size} color={color}/>
                    )
                }}
            /> */}
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
                name='Account'
                component={ContactNavigator}
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