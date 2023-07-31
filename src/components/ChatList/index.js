import { View, Text, Image, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
const ChatList = ({ chat }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {
          chat.lastMessage.unreadMessagesCount != 0 ? <Text numberOfLines={1} style={styles.messageCounter}>
            {
              chat.lastMessage.unreadMessagesCount < 99 ? chat.lastMessage.unreadMessagesCount : "99+"
            }
          </Text> : <></>
        }

        <Image
          source={{ uri: chat.user.image }}
          style={styles.profile}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.lastSeen).fromNow()}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
      </View>
    </View>
  );
};

export default ChatList;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 3,
    height: 70,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 7,
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
    backgroundColor: 'red',
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