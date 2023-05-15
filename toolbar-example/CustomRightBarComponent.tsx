import {ToolbarPreset} from 'customization-api';
import React from 'react';
import {CustomToolBarItems} from './ToolbarItems';

const CustomRightBar = () => {
  return (
    <>
      <ToolbarPreset align="right" customItems={CustomToolBarItems} />
    </>
  );
};
export default CustomRightBar;
