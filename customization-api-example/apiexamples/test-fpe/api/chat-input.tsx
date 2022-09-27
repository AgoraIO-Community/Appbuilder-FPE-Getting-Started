import {customize} from 'customization-api';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ChatInput = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    justifyContent: 'center',
    height: 40,
    alignSelf: 'center',
  },
});

const customization = customize({
  components: {
    videoCall: {
      chat: {
        chatInput: ChatInput,
      },
    },
  },
});

export default customization;
