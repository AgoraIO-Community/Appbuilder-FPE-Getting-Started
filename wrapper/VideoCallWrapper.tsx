import {
  useRoomInfo,
  customEvents,
  useLayout,
  PersistanceLevel,
  useRtm,
  useHideShareTitle,
} from 'customization-api';
import React, {useEffect} from 'react';
import {ChatOverlayUI} from '../chat/ChatOverlayUI';

export const CUSTOM_EVENT_NAME_FOR_HOST_JOINED = 'custom-event-host-joined';
export const CUSTOM_LAYOUT_NAME = 'attendee-layout';

export const VideoCallWrapper = props => {
  const {
    data: {isHost, uid},
    isJoinDataFetched,
    roomPreference: {disableShareTile},
  } = useRoomInfo();
  const {hasUserJoinedRTM} = useRtm();
  const {setLayout, currentLayout} = useLayout();
  const hideShareTile = useHideShareTitle();

  useEffect(() => {
    if (!isJoinDataFetched) {
      return;
    }
    if (disableShareTile === false) {
      hideShareTile(true);
    }
    if (isHost) {
      if (hasUserJoinedRTM) {
        customEvents.send(
          CUSTOM_EVENT_NAME_FOR_HOST_JOINED,
          uid?.toString(),
          PersistanceLevel.Channel,
        );
      }
    } else {
      if (currentLayout !== CUSTOM_LAYOUT_NAME) {
        setLayout(CUSTOM_LAYOUT_NAME);
      }
    }
  }, [
    isHost,
    uid,
    setLayout,
    hasUserJoinedRTM,
    isJoinDataFetched,
    currentLayout,
    disableShareTile,
    hideShareTile,
  ]);
  return (
    <>
      <ChatOverlayUI />
      {props.children}
    </>
  );
};
