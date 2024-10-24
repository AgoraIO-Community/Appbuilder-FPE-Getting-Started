import {
  ToolbarPreset,
  ToolbarComponents,
  useSidePanel,
} from "customization-api";
import React from "react";
import { PollButtonWithSidePanel, POLL_SIDEBAR_NAME } from "./polling-ui";

const Bottombar = () => {
  const { setSidePanel } = useSidePanel();
  const {
    MeetingTitleToolbarItem,
    ParticipantCountToolbarItem,
    RecordingStatusToolbarItem,
    InviteToolbarItem,
    ChatToolbarItem,
    ParticipantToolbarItem,
  } = ToolbarComponents;

  return (
    <>
      <ToolbarPreset
        align="bottom"
        items={{
          layout: {
            hide: true,
          },
          recording: {
            hide: (w) => {
              return w <= 767 ? true : false;
            },
          },
          screenshare: {
            hide: (w) => {
              return w <= 767 ? true : false;
            },
          },
          more: {
            fields: {
              layout: {
                hide: false,
              },
              settings: {
                hide: false,
              },
              invite: {
                hide: (w) => {
                  return w > 992 ? true : false;
                },
              },
              chat: {
                hide: (w) => {
                  return w > 767 ? true : false;
                },
              },
              participant: {
                hide: (w) => {
                  return w > 767 ? true : false;
                },
              },
              recording: {
                hide: (w) => {
                  return w > 767 ? true : false;
                },
              },
              screenshare: {
                hide: (w) => {
                  return w > 767 ? true : false;
                },
              },
              poll: {
                hide: (w) => {
                  return w > 767 ? true : false;
                },
                component: PollButtonWithSidePanel,
                onPress: () => {
                  setSidePanel(POLL_SIDEBAR_NAME);
                },
              },
            },
          },
          "meeting-title": {
            align: "start",
            component: MeetingTitleToolbarItem,
            order: 0,
          },
          "participant-count": {
            align: "start",
            component: ParticipantCountToolbarItem,
            order: 1,
            hide: (w) => {
              return w <= 992 ? true : false;
            },
          },
          "recording-status": {
            align: "start",
            component: RecordingStatusToolbarItem,
            order: 2,
          },
          participant: {
            align: "end",
            component: ParticipantToolbarItem,
            order: 1,
            hide: (w) => {
              return w <= 767 ? true : false;
            },
          },
          chat: {
            align: "end",
            component: ChatToolbarItem,
            order: 2,
            hide: (w) => {
              return w <= 767 ? true : false;
            },
          },
          invite: {
            align: "end",
            component: InviteToolbarItem,
            order: 3,
            hide: (w) => {
              return w <= 992 ? true : false;
            },
          },
        }}
      />
    </>
  );
};

export default Bottombar;
