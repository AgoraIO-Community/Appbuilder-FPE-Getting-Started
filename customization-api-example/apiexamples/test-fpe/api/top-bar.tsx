import {customize} from 'customization-api';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          Here is your new top bar component. Use app-state and sub-components
          to customize your top bar
          {'\n'} //TODO put documentation links which helpful to user
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    maxHeight: 200,
    borderRadius: 30,
  },
  textStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
  },
});

const customization = customize({
  components: {
    videoCall: {
      topBar: TopBar,
    },
  },
});

export default customization;
