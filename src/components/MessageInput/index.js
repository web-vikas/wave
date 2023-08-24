import { StyleSheet, Text, View, FlatList, ImageBackground, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
const MessageInput = () => {
    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <AntDesign name='plus' size={24} color={'royalblue'} />
            <TextInput style={styles.input} placeholder='Type Your Message ..' />
            <MaterialIcons style={styles.send} name='send' size={24} color={'white'} />
        </SafeAreaView>
    )
}

export default MessageInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        alignItems: 'center',
        gap: 5
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        fontSize: 16,
    },
    send: {
        backgroundColor: '#42C100',
        padding: 7,
        borderRadius: 10,
        overflow: "hidden",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})