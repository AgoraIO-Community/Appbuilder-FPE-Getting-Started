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
      //added wrapper to pass/share data state in between customization components
      //access to appbuilder hooks and state
      wrapper: CustomWrapperProvider,
    },
  },
  /**
   * custom route
   * we can use this custom route functionality to redirect the attendee after host end the meeting
   */
  customRoutes: [{component: CustomEndCallPage, path: 'call-ended'}],
  /**
   * lifecyle
   * used to register customhook which will executed by the system on before/after end call
   */
  lifecycle: {
    useBeforeEndCall: useBeforeEndCall,
    useAfterEndCall: useAfterEndCall,
  },
});

export default config;
