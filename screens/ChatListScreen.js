import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import ChatListItem from '../components/ChatListItem';

const chatData = [
  { id: '1', initials: 'MA', name: 'Mahasiswa TI UIR', message: 'Silahkan untuk mahas...', time: 'Fri' },
  { id: '2', initials: 'LA', name: 'Lamont Hodge', message: 'Ini ada yang coba ga?', time: 'Fri' },
  { id: '3', initials: '31', name: '31 DPM F', message: 'Baik pak terima kasih', time: 'Thu' },
  { id: '4', initials: 'MR', name: 'M Rizki Fadhilah', message: 'Referensi Judul untuk...', time: 'Thu' },
];

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={chatData}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.fab}>
        <Icon name="camera" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0088cc',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});

export default ChatListScreen;
