import {customize} from 'customization-api';
import BottomToolBarOverride from './customBottomBar';

const config = customize({
  //override the bottom bar to add button for disable attendee mic button
  components: {
    videoCall: {
      bottomToolBar: BottomToolBarOverride,
    },
  },
});

export default config;
