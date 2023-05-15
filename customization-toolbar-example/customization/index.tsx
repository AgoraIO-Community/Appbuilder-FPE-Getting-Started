import React from 'react';
import {Text} from 'react-native';
import {
  customize,
  ToolbarPreset,
  ToolbarItem,
  ToolbarComponents,
  ToolbarMenu,
} from 'customization-api';
import TopPinnedVideo from './custom-layout/TopPinnedLayout';
import customLayoutIcon from './custom-layout/custom-layout.png';

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

const CustomTopBar = () => {
  return (
    <>
      <ToolbarPreset
        align="top"
        customItems={[
          {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
          {component: CustomToolbarItem2, align: 'start', hide: 'no', order: 5},
          {
            component: CustomToolbarItem3,
            align: 'center',
            hide: 'no',
            order: 1,
          },
          {component: CustomToolbarItem4, align: 'end', hide: 'no', order: 1},
        ]}
      />
    </>
  );
};

const CustomBottomBar = () => {
  return (
    <>
      <ToolbarPreset
        align="bottom"
        customItems={[
          {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
          {component: CustomToolbarItem2, align: 'start', hide: 'no', order: 5},
          {
            component: CustomToolbarItem3,
            align: 'center',
            hide: 'no',
            order: 1,
          },
          {component: CustomToolbarItem4, align: 'end', hide: 'no', order: 1},
        ]}
      />
    </>
  );
};

const CustomLeftBar = () => {
  return (
    <>
      <ToolbarPreset
        align="left"
        customItems={[
          {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
          {component: CustomToolbarItem2, align: 'start', hide: 'no', order: 5},
          {
            component: CustomToolbarItem3,
            align: 'center',
            hide: 'no',
            order: 1,
          },
          {component: CustomToolbarItem4, align: 'end', hide: 'no', order: 1},
        ]}
      />
    </>
  );
};

const CustomRightBar = () => {
  return (
    <>
      <ToolbarPreset
        align="right"
        customItems={[
          {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
          {component: CustomToolbarItem2, align: 'start', hide: 'no', order: 5},
          {
            component: CustomToolbarItem3,
            align: 'center',
            hide: 'no',
            order: 1,
          },
          {component: CustomToolbarItem4, align: 'end', hide: 'no', order: 1},
        ]}
      />
    </>
  );
};

const userCustomization = customize({
  components: {
    videoCall: {
      topToolBar: CustomTopBar,
      // topToolBar: [
      //   {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
      //   {component: CustomToolbarItem2, align: 'center', hide: 'no', order: 5},
      // ],
      //bottomToolBar: CustomBottomBar,
      // bottomToolBar: [
      //   {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
      //   {component: CustomToolbarItem2, align: 'center', hide: 'no', order: 5},
      // ],
      //leftToolBar: CustomLeftBar,
      // leftToolBar: [
      //   {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
      //   {component: CustomToolbarItem2, align: 'center', hide: 'no', order: 5},
      // ],
      //rightToolBar: CustomRightBar,
      // rightToolBar: [
      //   {component: CustomToolbarItem1, align: 'start', hide: 'no', order: 1},
      //   {component: CustomToolbarItem2, align: 'center', hide: 'no', order: 5},
      // ],
      // customLayout(defaultLayouts) {
      //   return [
      //     ...defaultLayouts,
      //     {
      //       component: TopPinnedVideo,
      //       label: 'Top Pinned Layout',
      //       name: 'TopPinnedLayout',
      //       //icon: customLayoutIcon,
      //       icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFSSURBVHgB7ZvBSsNAEIZnRwvGU95QRT2rT2B8AvWsUn3D9RShmHU32ltbpGT/DpP/O5TCBnY+EsLPzCZI5nSZ7tMw3Oa/rUxPFNX3/iLc7boIVUNolulRfjeqSpZ5+LpedJvWkDVo3uhcAATVm62LwBpU6jxCm2j3XJuSVmVmUNg7FPYOhb1DYe9Q2DsU9s4shaNgQO2zE81dgGdBkIYPMYCObZc0Ste6A7G0VvqrRfUWzn8IYoDm7TsJCL6lvUNh78xO+Lj8WBi1oNAy5siyndRrhrdljHLysurEADZGLUCsjFpged7ESwuZ500II/N8QObY/vLo4NmdwcM7FPbOPLO0BVB53oTwX56v2fNa5/lPG480+NiSBXhsqRYU9g6FvUNh71DYOxT2DoW9w2NLFYl7rk1JNHFsCVnDOAloXldPuR1wJpX6SUVo21dpa1A1/ABO3KdhjAiPPAAAAABJRU5ErkJggg==',
      //     },
      //   ];
      // },
    },
  },
});

export default userCustomization;
