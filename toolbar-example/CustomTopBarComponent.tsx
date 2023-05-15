import {ToolbarPreset} from 'customization-api';
import React from 'react';
import {CustomToolBarItems} from './ToolbarItems';

const CustomTopBar = () => {
  return (
    <>
      <ToolbarPreset align="top" customItems={CustomToolBarItems} />
    </>
  );
};
export default CustomTopBar;
