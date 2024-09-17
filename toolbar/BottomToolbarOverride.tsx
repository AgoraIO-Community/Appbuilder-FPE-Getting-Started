import React from 'react';
import {ToolbarPreset} from 'customization-api';

export const BottomToolbarOverride = () => {
  return (
    <ToolbarPreset
      align="bottom"
      items={{
        layout: {hide: true},
        invite: {
          hide: true,
        },
      }}
    />
  );
};
