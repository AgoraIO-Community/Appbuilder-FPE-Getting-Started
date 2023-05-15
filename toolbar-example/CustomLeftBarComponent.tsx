import {ToolbarPreset} from 'customization-api';
import React from 'react';
import {CustomToolBarItems} from './ToolbarItems';

const CustomLeftBar = () => {
  return (
    <>
      <ToolbarPreset align="left" customItems={CustomToolBarItems} />
    </>
  );
};
export default CustomLeftBar;
