import { View, Text, FlatList } from 'react-native'
import ContactListItem from '../components/ContactListItem'
import chats from '../assets/data/chats.json'
const ContactScreen = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) =>

                <ContactListItem user={item.user} />

            }
        />
    )
}

export default ContactScreen