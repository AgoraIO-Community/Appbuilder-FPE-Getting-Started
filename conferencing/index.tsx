import { customize } from "customization-api";
import Bottombar from "./bottombar";

const config = customize({
  components: {
    videoCall: {
      bottomToolBar: Bottombar,
    },
  },
});

export default config;
