import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ messages }) => {

    const isMyMessage = () => {
        return messages.user.id === 'u1'
    }

    return (
        <View style={[styles.container, {
            backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        }]}>
            <Text>{messages.text}</Text>
            <Text style={styles.time}>{dayjs(messages.createdAt).format('h:mm A')}</Text>
        </View>
    )
}

export default Message


const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'white',
            margin: 5,
            padding: 10,
            borderRadius: 10,
            maxWidth: '80%',
        },
        time: {
            color: 'gray',
            alignSelf: 'flex-end',
        }
    }
)