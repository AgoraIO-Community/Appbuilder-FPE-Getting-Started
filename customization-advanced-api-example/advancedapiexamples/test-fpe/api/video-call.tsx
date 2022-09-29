/*
********************************************
 Copyright © 2021 Agora Lab, Inc., all rights reserved.
 AppBuilder and all associated components, source code, APIs, services, and documentation 
 (the “Materials”) are owned by Agora Lab, Inc. and its licensors. The Materials may not be 
 accessed, used, modified, or distributed for any purpose without a license from Agora Lab, Inc.  
 Use without a license or in violation of any license terms and conditions (including use for 
 any purpose competitive to Agora Lab, Inc.’s business) is strictly prohibited. For more 
 information visit https://appbuilder.agora.io. 
*********************************************
*/
import {
  customize,
  VideoComponent,
  Controls,
  Navbar,
  useSidePanel,
  ParticipantsView,
  Chat,
  SettingsView,
  useIsWeb,
  UiKitBtnTemplate,
} from 'customization-api';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SidePanelType} from '../../src/subComponents/SidePanelEnum';

const VideoCallPage = () => {
  const {sidePanel} = useSidePanel();
  const isWeb = useIsWeb();
  const [showNotice, setShowNotice] = useState(false);

  const renderNotice = () => {
    return (
      <View style={styles.noticeContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            paddingVertical: 20,
          }}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              This video call page rebuilt using the sub-components
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <UiKitBtnTemplate
              style={{width: 25, height: 25, marginTop: 5, marginLeft: 20}}
              color={'#FD0845'}
              name={'close'}
              onPress={() => setShowNotice(false)}
            />
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setShowNotice(true);
  }, []);

  return (
    <View style={{flex: 1}}>
      {showNotice ? renderNotice() : <></>}
      <View style={styles.container}>
        <Navbar />
        <View style={[styles.videoView, {backgroundColor: '#ffffff00'}]}>
          <VideoComponent />
          {sidePanel === SidePanelType.Participants ? (
            <ParticipantsView />
          ) : (
            <></>
          )}
          {sidePanel === SidePanelType.Chat ? (
            $config.CHAT ? (
              <Chat />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
          {sidePanel === SidePanelType.Settings ? <SettingsView /> : <></>}
        </View>
        {!isWeb() && sidePanel === SidePanelType.Chat ? <></> : <Controls />}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  videoView: {
    flex: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  noticeContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#90EE90',
    maxHeight: 50,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  textContainer: {
    justifyContent: 'center',
  },
});

const customization = customize({
  components: {
    videoCall: VideoCallPage,
  },
});

export default customization;
