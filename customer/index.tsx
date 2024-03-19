import {customize} from 'customization-api';
import BottomToolBarOverride from './customButtonBar';
import CustomEndCallPage, {
  useAfterEndCall,
  useBeforeEndCall,
} from './customEndCallPage';

const config = customize({
  //override the bottom bar to add button for disable attendee mic button
  components: {
    videoCall: {
      bottomToolBar: BottomToolBarOverride,
    },
  },
  customRoutes: [{component: CustomEndCallPage, path: 'call-ended/:by?'}],
  lifecycle: {
    useBeforeEndCall: useBeforeEndCall,
    useAfterEndCall: useAfterEndCall,
  },
});

export default config;
