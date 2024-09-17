import React from 'react';
import {ToolbarPreset} from 'customization-api';

export const TopToolbarOverride = () => {
  return <ToolbarPreset align="top" items={{chat: {hide: true}}} />;
};
