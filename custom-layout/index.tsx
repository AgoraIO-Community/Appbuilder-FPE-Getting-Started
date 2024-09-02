import { customize } from "customization-api";
import TopPinnedVideo from "./TopPinnedLayout";

const userCustomization = customize({
  components: {
    videoCall: {
      //we should new layout in the layout dropdown button, top-pinned layout
      customLayout: (defaultLayouts) => {
        return defaultLayouts.concat({
          component: TopPinnedVideo,
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABrYAAAa2AGP9iLXAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABJQTFRF////AAAAAAAAAAAAAAAAAAAAZJzAmgAAAAV0Uk5TADhWeLi9mUy9AAAAQUlEQVRIS2MIhYJgBgYWGNuBgcEUxmYYVTCqAFmBMRQYMjAwwdgKDAzCMDbDkAAuBAA8HHCBUQWjCkYVjCoY4QoAw0lL0bRtNkoAAAAASUVORK5CYII=",
          label: "Top Pinned",
          name: "top-pinned",
        });
      },
    },
  },
});
export default userCustomization;
