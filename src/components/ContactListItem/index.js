import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
const ContactListItem = ({ user }) => {

  return (
    <Pressable style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: user.image }}
          style={styles.profile}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>{user.name}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>{user?.status}</Text>
      </View>
    </Pressable>
  );
};

export default ContactListItem;


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