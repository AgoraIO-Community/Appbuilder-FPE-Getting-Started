import {customize} from 'customization-api';
import BottomToolBarOverride from './customBottomBar';
import CustomEndCallPage, {
  useAfterEndCall,
  useBeforeEndCall,
} from './customEndCallPage';
import CustomWrapperProvider from './customWrapper';

const config = customize({
  //override the bottom bar to add button for disable attendee mic button
  components: {
    videoCall: {
      bottomToolBar: BottomToolBarOverride,
      wrapper: CustomWrapperProvider,
    },
  },
  customRoutes: [{component: CustomEndCallPage, path: 'call-ended'}],
  lifecycle: {
    useBeforeEndCall: useBeforeEndCall,
    useAfterEndCall: useAfterEndCall,
  }
});

export default config;
