import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import BG from '../assets/images/BG.png'
import Message from '../components/Message';
import messages from '../assets/data/messages.json'
const ChatScreen = () => {
    return (
        <ImageBackground source={BG} style={styles.bg}>
            <FlatList
                style={styles.message}
                data={messages}
                renderItem={({ item }) =>
                    <Message messages={item} />
                }
                inverted
            />
        </ImageBackground>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        marginVertical:10,
    },
    message: {
        padding:10,
    }
})