import { StyleSheet, Text, View, FlatList } from "react-native";
import ChatList from "../components/ChatList";
import chats from "../assets/data/chats.json";
const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatList chat={item} />}
    />
  );
};

export default ChatsScreen;
