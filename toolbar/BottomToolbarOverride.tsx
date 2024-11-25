import React from "react";
import {
  ToolbarPreset,
  ToolbarItem,
  IconButton,
  customEvents,
  PersistanceLevel,
  useLocalUid,
  useContent,
  useIsAttendee,
} from "customization-api";

export const BottomToolbarOverride = () => {
  /**
   * Overiding the bottom toolbar to hide layout button,invite,chat button
   */
  return (
    <ToolbarPreset
      align="bottom"
      items={{
        layout: { hide: true },
        invite: {
          hide: true,
        },
        chat: {
          hide: true,
        },
        "raise-hand": {
          component: RaiseHandOption,
          order: 10,
          align: "center",
        },
      }}
    />
  );
};

const RaiseHandOption = () => {
  const [isHandRaised, setIsHandRaised] = React.useState(false);
  const localUid = useLocalUid();
  const { defaultContent } = useContent();
  const isAttendee = useIsAttendee()(localUid);

  React.useEffect(() => {
    customEvents.on("LowerHandEvent", handleLowerHandCallback);
  }, []);

  // When Host / Self (Attendee) lowers raised hand
  const handleLowerHandCallback = (data) => {
    const payload = JSON.parse(data?.payload);
    if (payload.data.user_uid === localUid) {
      setIsHandRaised(false);
    }
  };

  // When Self (Attendee) toggle  raises Hand Option
  const handleRaiseHand = () => {
    setIsHandRaised((prev) => {
      const newHandRaisedState = !prev;

      const data = {
        hand_raised: newHandRaisedState,
        user_uid: localUid,
      };

      customEvents.send(
        "RaiseHandEvent",
        JSON.stringify({ data }),
        PersistanceLevel.Session
      );

      return newHandRaisedState;
    });
  };

  // Raise Hand Option is only for attendee
  return isAttendee ? (
    <ToolbarItem style={{ position: "relative" }}>
      <IconButton
        iconProps={{
          name: isHandRaised ? "lower-hand" : "raise-hand",
          iconSize: 28,
          tintColor: "orange",
        }}
        btnTextProps={{
          textColor: "white",
          text: isHandRaised ? "Lower Hand" : "Raise Hand",
        }}
        onPress={() => {
          handleRaiseHand();
        }}
      />
    </ToolbarItem>
  ) : null;
};
