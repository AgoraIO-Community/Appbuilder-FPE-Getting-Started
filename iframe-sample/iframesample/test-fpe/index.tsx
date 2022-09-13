import {installFPE} from 'fpe-api/install';
import iFrameView from './custom-components/iFrameView';
import CustomBottomBar from './custom-components/CustomBottomBar';
const userCustomization = installFPE({
  components: {
    videoCall: {
      bottomBar: CustomBottomBar,
      customContent: {
        iframe: iFrameView,
      },
    },
  },
});

export default userCustomization;
