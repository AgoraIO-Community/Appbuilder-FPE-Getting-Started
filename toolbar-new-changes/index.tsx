import React from "react";
import { customize, ToolbarPreset } from "customization-api";

const customTopToolbar = () => {
  return (
    <ToolbarPreset
      align="top"
      items={{
        chat: {
          label: "CHAT",
          onPress: () => {
            console.log("customization CHAT button clicked");
          },
        },
        participant: {
          label: "PARTICIPANT",
          onPress: () => {
            console.log("customization PARTICIPANT button clicked");
          },
        },
        settings: {
          label: "SETTINGS",
          onPress: () => {
            console.log("customization SETTINGS button clicked");
          },
        },
      }}
    />
  );
};

const customBottomToolbar = () => {
  return (
    <ToolbarPreset
      align="bottom"
      items={{
        "local-audio": {
          label: "AUDIO",
          onPress: () => {
            console.log("customization AUDIO button clicked");
          },
        },
        "local-video": {
          label: "VIDEO",
          onPress: () => {
            console.log("customization VIDEO button clicked");
          },
        },
        screenshare: {
          label: "SCREENSHARE",
          onPress: () => {
            console.log("customization SCREENSHARE button clicked");
          },
        },
        recording: {
          label: "RECORDING",
          onPress: () => {
            console.log("customization RECORDING button clicked");
          },
        },
        more: {
          label: "MORE",
          fields: {
            "noise-cancellation": {
              label: "NOISE-CANCELLATION",
              onPress: () => {
                console.log("customization NOISE-CANCELLATION button clicked");
              },
            },
            "view-recordings": {
              label: "VIEW-RECORDINGS",
              onPress: () => {
                console.log("customization VIEW-RECORDINGS button clicked");
              },
            },
            "virtual-background": {
              label: "VIRTUAL-BACKGROUND",
              onPress: () => {
                console.log("customization VIRTUAL-BACKGROUND button clicked");
              },
            },
            caption: {
              label: "CAPTION",
              onPress: () => {
                console.log("customization CAPTION button clicked");
              },
            },
            transcript: {
              label: "TRANSCRIPT",
              onPress: () => {
                console.log("customization TRANSCRIPT button clicked");
              },
            },
            whiteboard: {
              label: "WHITEBOARD",
              onPress: () => {
                console.log("customization WHITEBOARD button clicked");
              },
            },
          },
        },
        "end-call": {
          label: "END-CALL",
          onPress: () => {
            console.log("customization END-CALL button clicked");
          },
        },
        layout: {
          label: "LAYOUT",
        },
        invite: {
          label: "INVITE",
          onPress: () => {
            console.log("customization INVITE button clicked");
          },
        },
      }}
    />
  );
};

const config = customize({
  components: {
    videoCall: {
      bottomToolBar: customBottomToolbar,
      topToolBar: customTopToolbar,
    },
  },
});

export default config;
