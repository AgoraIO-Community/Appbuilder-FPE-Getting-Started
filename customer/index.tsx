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
  },
  i18n: [
    {
      label: 'English',
      locale: 'en-us',
      data: {
        leaveRoomPopupSubHeading:
          'Are you sure you want to leave this meeting and end the call for everyone?',
      },
    },
  ],
});

export default config;
