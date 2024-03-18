import {
  customize,
  ToolbarPreset,
  ToolbarItem,
  IconButton,
  useRoomInfo,
  useDisableButton,
  MUTE_REMOTE_TYPE,
  getCustomRoute,
  endCallEveryOne,
  useParams,
} from "customization-api";
import React, { useEffect, useState } from "react";

const DisableAudioUnmuteButton = () => {
  const {
    data: { isHost },
  } = useRoomInfo();
  const disableButton = useDisableButton();

  const [disabled, setDisabled] = useState(false);

  if (!isHost) {
    return null;
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ToolbarItem style={{ position: "relative" }}>
      <IconButton
        iconProps={{
          name: "mic-off",
          iconSize: 28,
        }}
        btnTextProps={{
          textColor: "white",
          text: disabled ? "Enable Audio" : "Disable Audio",
        }}
        onPress={() => {
          if (!disabled) {
            disableButton(MUTE_REMOTE_TYPE.audio, true);
            setDisabled(true);
          } else {
            disableButton(MUTE_REMOTE_TYPE.audio, false);
            setDisabled(false);
          }
        }}
      />
    </ToolbarItem>
  );
};

const DisableVideoUnmuteButton = () => {
  const {
    data: { isHost },
  } = useRoomInfo();
  const disableButton = useDisableButton();

  const [disabled, setDisabled] = useState(false);

  if (!isHost) {
    return null;
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ToolbarItem style={{ position: "relative" }}>
      <IconButton
        iconProps={{
          name: "video-off",
          iconSize: 28,
        }}
        btnTextProps={{
          textColor: "white",
          text: disabled ? "Enable Video" : "Disable Video",
        }}
        onPress={() => {
          if (!disabled) {
            disableButton(MUTE_REMOTE_TYPE.video, true);
            setDisabled(true);
          } else {
            disableButton(MUTE_REMOTE_TYPE.video, false);
            setDisabled(false);
          }
        }}
      />
    </ToolbarItem>
  );
};

/* use existing toolbar and a custom item at any point with order */
const BottomToolBarOverride = () => {
  return (
    <ToolbarPreset
      align="bottom"
      customItems={[
        {
          component: DisableAudioUnmuteButton,
          order: 9,
          align: "center",
          hide: "no",
        },
        {
          component: DisableVideoUnmuteButton,
          order: 10,
          align: "center",
          hide: "no",
        },
      ]}
      snapPointsMinMax={[100, 300]}
    />
  );
};

const CustomEndCallPage = () => {
  const { by }: { by: string } = useParams();
  console.log("debugging by", by);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <span style={{ color: "white", fontSize: 20, textAlign: "center" }}>
        {by === "self"
          ? "You have left the meeting"
          : "Host ended the meeting for everyone"}
      </span>
    </div>
  );
};

const useBeforeEndCall = () => (isHost) => {
  if (isHost) {
    console.log("debugging triggering end call for everyone");
    endCallEveryOne();
  } else {
    console.log("debugging your not a host");
  }
  return null;
};

const useAfterEndCall = () => (isHost, history, isTriggeredByHost) => {
  if (isHost) {
    history.push("/");
  } else {
    history.push(
      getCustomRoute(isTriggeredByHost ? "call-ended/host" : "call-ended/self"),
    );
  }
  return null;
};

const config = customize({
  components: {
    videoCall: {
      bottomToolBar: BottomToolBarOverride,
    },
  },
  customRoutes: [{ component: CustomEndCallPage, path: "call-ended/:by?" }],
  lifecycle: {
    // useBeforeEndCall: useBeforeEndCall,
    // useAfterEndCall: useAfterEndCall,
  },
});

export default config;
