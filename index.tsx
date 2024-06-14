import {customize, isMobileUA} from 'customization-api';
import Topbar from './topbar';
import Bottombar from './bottombar';

const config = customize({
  components: {
    videoCall: {
      topToolBar: Topbar,
      bottomToolBar: Bottombar,
    },
  },
});

export default isMobileUA() ? {} : config;
