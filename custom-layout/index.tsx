import { customize } from "customization-api";
import TopPinnedVideo from "./TopPinnedLayout";
import CustomIcon from "./custom-layout.png";
const userCustomization = customize({
  components: {
    videoCall: {
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
