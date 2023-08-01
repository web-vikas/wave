import ChatList from '../components/ChatList'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import chats from '../assets/data/chats.json'
const ChatsScreen = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) =>

                <ChatList chat={item} />

            }
        />
    )
}

export default ChatsScreen