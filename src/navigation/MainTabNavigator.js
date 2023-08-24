import { StyleSheet, Text, View, FlatList, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotImplementedScreen from '../screens/NotImplementedScreen'
import { Ionicons, Entypo } from '@expo/vector-icons'
import ChatsScreen from '../screens/ChatsScreen';
const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Chats' screenOptions={{
            tabBarStyle: { backgroundColor: "white", justifyContent: 'center', alignItems: 'center', height: 55, paddingBottom: 9, paddingTop: 6 },
            headerStyle: { backgroundColor: "white" },
        }}>
            <Tab.Screen
                name="Chat"
                component={ChatsScreen}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbox-outline" size={size} color={color} />
                    ),
                    headerRight: () => (
                        <Entypo
                            onPress={() => navigation.navigate('Contact')}
                            name="new-message"
                            size={21}
                            color={"royalblue"}
                            style={{ marginRight: 15, padding:10 }}
                        />
                    ),
                })} />
            <Tab.Screen name="Moments" component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="logo-ionic" size={size} color={color} />
                    ),
                    // headerShown: false,
                }} />
            <Tab.Screen name="Calls" component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call-outline" size={size} color={color} />
                    ),
                    // headerShown: false,
                }} />
            <Tab.Screen name="Setting" component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cog-outline" size={size} color={color} />
                    ),
                    // headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator