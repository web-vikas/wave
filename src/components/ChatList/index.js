import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
const ChatList = ({ chat }) => {
  const navigation = useNavigation()

  // navigation.setOptions({title:route.params.name})

  const chatDateTime = new Date(chat.lastMessage.lastSeen);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  let formattedOutput = "";

  if (chatDateTime.toDateString() === today.toDateString()) {
    // If the date is today, print the time only
    formattedOutput = chatDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (chatDateTime.toDateString() === yesterday.toDateString()) {
    // If the date is yesterday, print "Yesterday"
    formattedOutput = "Yesterday";
  } else {
    // For any other date, print the date in "dd/mm/yy" format
    const yearLastTwoDigits = chatDateTime.toLocaleDateString([], { year: '2-digit' });
    const monthTwoDigits = chatDateTime.toLocaleDateString([], { month: '2-digit' });
    const dayTwoDigits = chatDateTime.toLocaleDateString([], { day: '2-digit' });
    formattedOutput = `${dayTwoDigits}/${monthTwoDigits}/${yearLastTwoDigits}`;
  }

  const [displayCount, setDisplayCount] = useState(
    chat.lastMessage.unreadMessagesCount !== 0
      ? chat.lastMessage.unreadMessagesCount < 99
        ? chat.lastMessage.unreadMessagesCount
        : "99+"
      : null
  );
  const messageCounterStyle = displayCount !== null ? { color: '#42C100' } : null;

  return (
    <Pressable style={styles.container} onPress={() =>
      navigation.navigate('Chats',
        {
          id: chat.id,
          name: chat.user.name
        }
      )}>
      <View style={styles.profileContainer}>
        {displayCount !== null && (
          <Text numberOfLines={1} style={styles.messageCounter}>
            {displayCount}
          </Text>
        )}

        <Image
          source={{ uri: chat.user.image }}
          style={styles.profile}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
          <Text style={[styles.subTitle, messageCounterStyle]}>
            {formattedOutput}
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
      </View>
    </Pressable>
  );
};

export default ChatList;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginHorizontal: 10,
    marginVertical: 1,
    height: 70,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 7,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  profileContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  messageCounter: {
    position: "absolute",
    top: -10,
    right: 5,
    backgroundColor: '#42C100',
    color: 'white',
    padding: 5,
    borderRadius: 10,
    zIndex: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 10,
    fontWeight: 'bold'
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  name: {
    flex: 1,
    fontWeight: 'bold'
  },
  subTitle: {
    color: 'gray',
  },
})