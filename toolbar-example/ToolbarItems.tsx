import {ToolbarCustomItem, ToolbarItem} from 'customization-api';
import React from 'react';
import {Text} from 'react-native';

const CustomToolbarItem1 = () => {
  return (
    <ToolbarItem>
      <Text style={{color: 'red'}}>TB1</Text>
    </ToolbarItem>
  );
};

const CustomToolbarItem2 = () => {
  return (
    <ToolbarItem>
      <Text style={{color: 'green'}}>TB2</Text>
    </ToolbarItem>
  );
};

const CustomToolbarItem3 = () => {
  return (
    <ToolbarItem>
      <Text style={{color: 'orange'}}>TB3</Text>
    </ToolbarItem>
  );
};

const CustomToolbarItem4 = () => {
  return (
    <ToolbarItem>
      <Text style={{color: 'yellow'}}>TB4</Text>
    </ToolbarItem>
  );
};

const CustomToolbarItem5 = () => {
  return (
    <ToolbarItem>
      <Text style={{color: 'pink'}}>TB5</Text>
    </ToolbarItem>
  );
};

export const CustomToolBarItems: ToolbarCustomItem[] = [
  {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
  {component: CustomToolbarItem2, align: 'start', hide: 'no', order: 5},
  {
    component: CustomToolbarItem3,
    align: 'center',
    hide: 'no',
    order: 1,
  },
  {component: CustomToolbarItem4, align: 'end', hide: 'no', order: 10},
  {component: CustomToolbarItem5, align: 'end', hide: 'no', order: 12},
];
