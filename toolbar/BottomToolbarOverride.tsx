import React from 'react';
import {ToolbarPreset} from 'customization-api';

export const BottomToolbarOverride = () => {
  /**
   * Overiding the bottom toolbar to hide layout button,invite,chat button
   */
  return (
    <ToolbarPreset
      align="bottom"
      items={{
        layout: {hide: true},
        invite: {
          hide: true,
        },
        chat: {
          hide: true,
        },
      }}
    />
  );
};
