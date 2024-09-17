import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useContent, VideoRenderer} from 'customization-api';
import {AppRootContext} from '../wrapper/AppRootWrapper';

const AttendeeLayout = ({renderData}) => {
  const {defaultContent} = useContent();
  const {hostUid} = useContext(AppRootContext);

  if (renderData && renderData?.length && renderData.indexOf(hostUid) === -1) {
    return (
      <View style={[style.videoContainer, {justifyContent: 'center'}]}>
        <Text style={style.textStyle}>Waiting for Host to Join!</Text>
      </View>
    );
  }

  return (
    <View style={style.videoContainer}>
      <VideoRenderer user={defaultContent[hostUid]} />
    </View>
  );
};

const style = StyleSheet.create({
  videoContainer: {
    flex: 1,
    backgroundColor: '#ffffff00',
    flexDirection: 'column',
    padding: 4,
  },
  textStyle: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});

export default AttendeeLayout;
