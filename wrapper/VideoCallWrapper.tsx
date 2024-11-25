import {
  useRoomInfo,
  customEvents,
  useLayout,
  PersistanceLevel,
  useRtm,
  useHideShareTitle,
  UidType,
} from "customization-api";
import React, { useEffect, SetStateAction, useState } from "react";
import { ChatOverlayUI } from "../chat/ChatOverlayUI";

export const CUSTOM_EVENT_NAME_FOR_HOST_JOINED = "custom-event-host-joined";
export const CUSTOM_LAYOUT_NAME = "attendee-layout";

interface RaisedHandUser {
  hand_raised: boolean;
  user_uid: UidType;
}

export interface CustomWrapperContextInterface {
  raisedHandUsers: RaisedHandUser[];
  setRaisedHandUsers: React.Dispatch<SetStateAction<RaisedHandUser[]>>;
}

interface CustomWrapperProviderProps {
  children: React.ReactNode;
}

const CustomWrapperContext = React.createContext<CustomWrapperContextInterface>(
  {
    raisedHandUsers: [],
    setRaisedHandUsers: () => {},
  }
);

const CustomWrapperProvider = (props: CustomWrapperProviderProps) => {
  const {
    data: { isHost, uid },
    isJoinDataFetched,
    roomPreference: { disableShareTile },
  } = useRoomInfo();
  const { hasUserJoinedRTM } = useRtm();
  const { setLayout, currentLayout } = useLayout();
  const hideShareTile = useHideShareTitle();

  // List of users who have raised their hands
  const [raisedHandUsers, setRaisedHandUsers] = useState<RaisedHandUser[]>([]);

  // Event listener for handling raised hand events
  React.useEffect(() => {
    customEvents.on("RaiseHandEvent", handleRaiseHandCallback);
  }, []);

  // Event listener for handling lowered hand events
  React.useEffect(() => {
    customEvents.on("LowerHandEvent", handleLowerHandCallback);
  }, []);

  // Remove user from raised hands list when they lower their hand
  const handleLowerHandCallback = (data) => {
    const payload = JSON.parse(data?.payload);
    setRaisedHandUsers((prev) =>
      prev.filter((user) => user.user_uid !== payload.data.user_uid)
    );
  };

  // Add or update user in raised hands list when they raise their hand
  const handleRaiseHandCallback = (data) => {
    const payload = JSON.parse(data?.payload);
    setRaisedHandUsers((prev) => {
      const existingUserIndex = prev.findIndex(
        (user) => user.user_uid === payload.data.user_uid
      );

      if (existingUserIndex === -1) {
        // User doesn't exist
        return [...prev, payload.data];
      } else {
        // User exists
        const newArray = [...prev];
        newArray[existingUserIndex] = payload.data;
        return newArray;
      }
    });
  };

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
          PersistanceLevel.Channel
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
    <CustomWrapperContext.Provider
      value={{ raisedHandUsers, setRaisedHandUsers }}
    >
      <ChatOverlayUI />
      {props.children}
    </CustomWrapperContext.Provider>
  );
};

export { CustomWrapperProvider, CustomWrapperContext };
