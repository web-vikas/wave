import { StyleSheet, Text, View, FlatList, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';
import BG from '../assets/images/BG.png'
import Message from '../components/Message';
import messages from '../assets/data/messages.json'
import MessageInput from '../components/MessageInput';
const ChatScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()

    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name])

    // console.log(route);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.bg}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
        >
            <ImageBackground source={BG} style={styles.bg}>
                <FlatList
                    style={styles.message}
                    data={messages}
                    renderItem={({ item }) =>
                        <Message messages={item} />
                    }
                    inverted
                />
                <MessageInput />
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    message: {
        padding: 10,
    }
})