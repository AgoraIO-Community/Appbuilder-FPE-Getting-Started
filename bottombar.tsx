import {ToolbarPreset, ToolbarComponents} from 'customization-api';
import React from 'react';

const Bottombar = () => {
  const {
    MeetingTitleToolbarItem,
    ParticipantCountToolbarItem,
    InviteToolbarItem,
    ChatToolbarItem,
    ParticipantToolbarItem,
  } = ToolbarComponents;

  return (
    <ToolbarPreset
      align="bottom"
      defaultItemsConfig={{
        layout: {hide: 'yes'},
        invite: {hide: 'yes'},
      }}
      customItems={[
        {
          align: 'start',
          component: MeetingTitleToolbarItem,
          hide: 'no',
          order: 0,
        },
        {
          align: 'start',
          component: ParticipantCountToolbarItem,
          hide: 'no',
          order: 1,
        },
        {
          align: 'end',
          component: ParticipantToolbarItem,
          hide: 'no',
          order: 1,
        },
        {
          align: 'end',
          component: ChatToolbarItem,
          hide: 'no',
          order: 2,
        },
        {
          align: 'end',
          component: InviteToolbarItem,
          hide: 'no',
          order: 3,
        },
      ]}
    />
  );
};

export default Bottombar;
