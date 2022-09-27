import {customize} from 'customization-api';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ChatSendButton = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#90EE90',
    marginLeft: 10,
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

const customization = customize({
  components: {
    videoCall: {
      chat: {
        chatSentButton: ChatSendButton,
      },
    },
  },
});

export default customization;
