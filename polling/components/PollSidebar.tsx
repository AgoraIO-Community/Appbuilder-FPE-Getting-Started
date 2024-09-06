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
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {PrimaryButton, ThemeConfig} from 'customization-api';
import {usePoll} from '../context/poll-context';
import PollList from './PollList';

const PollSidebar = () => {
  const {startPollForm, isHost} = usePoll();

  return (
    <View style={style.pollSidebar}>
      {/* Header */}
      {isHost() ? (
        <>
          <View style={style.headerSection}>
            <View style={style.headerCard}>
              <Text style={style.bodyXSmallText}>
                Create a new poll and boost interaction with your audience
                members now!
              </Text>
              <View>
                <PrimaryButton
                  containerStyle={style.btnContainer}
                  textStyle={style.btnText}
                  onPress={() => startPollForm()}
                  text="Create Poll"
                />
              </View>
            </View>
          </View>
          <View style={style.separator} />
        </>
      ) : (
        <></>
      )}
      <PollList />
    </View>
  );
};

const style = StyleSheet.create({
  pollSidebar: {
    backgroundColor: $config.CARD_LAYER_1_COLOR,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 16,
    padding: 20,
    backgroundColor: $config.CARD_LAYER_3_COLOR,
    borderRadius: 15,
  },
  bodyXSmallText: {
    color: $config.FONT_COLOR + ThemeConfig.EmphasisPlus.medium,
    fontSize: ThemeConfig.FontSize.small,
    fontFamily: ThemeConfig.FontFamily.sansPro,
    fontWeight: '400',
    lineHeight: 16,
  },
  btnContainer: {
    minWidth: 150,
    height: 36,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  btnText: {
    color: $config.FONT_COLOR,
    fontSize: ThemeConfig.FontSize.small,
    fontFamily: ThemeConfig.FontFamily.sansPro,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  separator: {
    marginVertical: 24,
    height: 1,
    display: 'flex',
    backgroundColor: $config.CARD_LAYER_3_COLOR,
  },
});

export default PollSidebar;
