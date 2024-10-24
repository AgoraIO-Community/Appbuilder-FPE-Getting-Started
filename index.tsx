import { customize, isMobileUA } from "customization-api";
import Topbar from "./topbar";
import Bottombar from "./bottombar";
import PollSidebar from "./polling/components/PollSidebar";
import Poll from "./polling/components/Poll";
import { POLL_SIDEBAR_NAME } from "./polling-ui";

const config = customize({
  components: {
    wrapper: Poll,
    customSidePanel: () => {
      return [
        {
          name: POLL_SIDEBAR_NAME,
          component: PollSidebar,
          title: "Polls",
          onClose: () => {},
        },
      ];
    },
    videoCall: {
      topToolBar: Topbar,
      bottomToolBar: Bottombar,
    },
  },
});

export default isMobileUA() ? {} : config;
