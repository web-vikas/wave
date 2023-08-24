import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Ionicons, AntDesign } from '@expo/vector-icons'

import ChatScreen from '../screens/ChatScreen'
import MainTabNavigator from "./MainTabNavigator"
import ContactScreen from "../screens/ContactScreen"

const Stack = createNativeStackNavigator();

const Navigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Wave"
                    component={MainTabNavigator}
                    options={{
                        headerShown: false,

                    }}
                />
                <Stack.Screen name="Chats" component={ChatScreen} />
                <Stack.Screen name="Contact" component={ContactScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator