import {
  useRoomInfo,
  customEvents,
  useLayout,
  PersistanceLevel,
  useChatContext,
  useHideShareTitle,
} from 'customization-api';
import {useEffect} from 'react';

export const CUSTOM_EVENT_NAME_FOR_HOST_JOINED = 'custom-event-host-joined';
export const CUSTOM_LAYOUT_NAME = 'attendee-layout';

export const VideoCallWrapper = props => {
  const {
    data: {isHost, uid},
    isJoinDataFetched,
    roomPreference: {disableShareTile},
  } = useRoomInfo();
  const {hasUserJoinedRTM} = useChatContext();
  const {setLayout, currentLayout} = useLayout();
  const hideShareTile = useHideShareTitle();

  useEffect(() => {
    if (disableShareTile === false) {
      hideShareTile(true);
    }

    if (!isJoinDataFetched) {
      return;
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
  return props.children;
};
