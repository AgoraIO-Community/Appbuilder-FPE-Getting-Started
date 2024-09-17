import {customize} from 'customization-api';
import AttendeeLayout from './layout/AttendeeLayout';
import {CUSTOM_LAYOUT_NAME, VideoCallWrapper} from './wrapper/VideoCallWrapper';
import {AppRootWrapper} from './wrapper/AppRootWrapper';
import {BottomToolbarOverride} from './toolbar/BottomToolbarOverride';
import {RightToolbarOverride} from './toolbar/RightToolbarOverride';
import {TopToolbarOverride} from './toolbar/TopToolbarOverride';
import {PrecallCallWrapper} from './wrapper/PrecallWrapper';

const config = customize({
  components: {
    //to register event listener -> getting host user uid
    appRoot: AppRootWrapper,
    //to update name in the store so UI will pick that name
    precall: {
      wrapper: PrecallCallWrapper,
    },
    videoCall: {
      //to hide the default chat option
      topToolBar: TopToolbarOverride,
      //placeholder to hold overlay chat
      rightToolBar: RightToolbarOverride,
      //hiding the unnessary controls
      bottomToolBar: BottomToolbarOverride,
      //to update layout for attendee and hide the share tile for the host
      wrapper: VideoCallWrapper,
      //adding custom layout
      customLayout: defaultLayouts => {
        return defaultLayouts.concat([
          {
            component: AttendeeLayout,
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABrYAAAa2AGP9iLXAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABJQTFRF////AAAAAAAAAAAAAAAAAAAAZJzAmgAAAAV0Uk5TADhWeLi9mUy9AAAAQUlEQVRIS2MIhYJgBgYWGNuBgcEUxmYYVTCqAFmBMRQYMjAwwdgKDAzCMDbDkAAuBAA8HHCBUQWjCkYVjCoY4QoAw0lL0bRtNkoAAAAASUVORK5CYII=',
            label: 'Custom Layout',
            name: CUSTOM_LAYOUT_NAME,
          },
        ]);
      },
    },
  },
});

export default config;
