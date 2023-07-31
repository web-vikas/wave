import ChatList from '../components/ChatList'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import chats from '../assets/data/chats.json'
const ChatScreen = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) =>

                <ChatList chat={item} />

            }
        />
    )
}

export default ChatScreen