import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import ChatList from './src/components/ChatList';
import ChatScreen from './src/screens/ChatScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30,
    justifyContent: 'center',
  },
});
