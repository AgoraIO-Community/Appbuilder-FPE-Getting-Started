import React from 'react';
import {ToolbarPreset, isMobileUA} from 'customization-api';

export const TopToolbarOverride = () => {
  //mobile web we are hiding the top toolbar so we will have extra space to view host video
  if (isMobileUA()) {
    return null;
  }

  return <ToolbarPreset align="top" items={{chat: {hide: true}}} />;
};
