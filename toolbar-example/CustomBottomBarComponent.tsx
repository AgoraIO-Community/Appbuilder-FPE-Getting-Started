import {ToolbarPreset} from 'customization-api';
import React from 'react';
import {CustomToolBarItems} from './ToolbarItems';

const CustomBottomBar = () => {
  return (
    <>
      <ToolbarPreset align="bottom" customItems={CustomToolBarItems} />
    </>
  );
};
export default CustomBottomBar;
