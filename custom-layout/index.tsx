import { customize } from "customization-api";
import TopPinnedVideo from "./TopPinnedLayout";
import CustomIcon from "./custom-layout.png";
const userCustomization = customize({
  components: {
    videoCall: {
      //we should new layout in the layout dropdown button, top-pinned layout
      customLayout: (defaultLayouts) => {
        return defaultLayouts.concat({
          component: TopPinnedVideo,
          icon: CustomIcon,
          label: "Top Pinned",
          name: "top-pinned",
        });
      },
    },
  },
});
export default userCustomization;
