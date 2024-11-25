import React, { useContext } from "react";
import {
  ToolbarPreset,
  isMobileUA,
  useLocalUid,
  useIsHost,
  useSidePanel,
  ToolbarItem,
  IconButton,
} from "customization-api";
import { CustomWrapperContext } from "../wrapper/VideoCallWrapper";
import { View } from "react-native";

export const TopToolbarOverride = () => {
  const { raisedHandUsers } = useContext(CustomWrapperContext);
  const localUid = useLocalUid();
  const isHost = useIsHost()(localUid);
  const { sidePanel, setSidePanel } = useSidePanel();
  const hasRaisedHands = raisedHandUsers?.some(
    (user) => user.hand_raised === true
  );

  const NewToolBarItem = () => {
    const isOpen = sidePanel === "raise-hand-panel";

    const handlePress = () => {
      setSidePanel(isOpen ? null : "raise-hand-panel");
    };

    return (
      <ToolbarItem style={{ position: "relative" }}>
        <IconButton
          iconProps={{
            name: "list-view",
            iconSize: 28,
            tintColor: "white",
          }}
          btnTextProps={{
            textColor: "white",
            text: "Raised Hands",
          }}
          onPress={handlePress}
        />
        {hasRaisedHands && (
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "red",
            }}
          />
        )}
      </ToolbarItem>
    );
  };

  //mobile web we are hiding the top toolbar so we will have extra space to view host video
  if (isMobileUA()) {
    return null;
  }

  return (
    <ToolbarPreset
      align="top"
      items={{
        chat: { hide: true },
        raisehand: {
          component: isHost ? NewToolBarItem : null,
          order: 6,
          align: "end",
        },
      }}
    />
  );
};
