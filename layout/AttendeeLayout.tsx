import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  useContent,
  VideoRenderer,
  GridLayout,
  useGetHostIds,
} from 'customization-api';
import {AppRootContext} from '../wrapper/AppRootWrapper';

const AttendeeLayout = ({renderData}) => {
  const {defaultContent, spotlightUid} = useContent();

  //to get recent host who joined on the call
  const {hostUid} = useContext(AppRootContext);

  // uncomment below code if we want to show all the host to the attendee
  // const hostUids = useGetHostIds();
  // return <GridLayout renderData={hostUids} />;

  /**
   * Only show last host who joined the call
   */
  /**
   * If the host id is not present in the call then we will display the message
   */
  if (renderData && renderData?.length && renderData.indexOf(hostUid) === -1) {
    return (
      <View style={[style.videoContainer, {justifyContent: 'center'}]}>
        <Text style={style.textStyle}>Waiting for Host to Join!</Text>
      </View>
    );
  }
  return (
    <View style={style.videoContainer}>
      <VideoRenderer user={defaultContent[spotlightUid || hostUid]} />
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
