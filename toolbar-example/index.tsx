import {customize} from 'customization-api';
import CustomTopBar from './CustomTopBarComponent';
import CustomRightBar from './CustomRightBarComponent';
import CustomBottomBar from './CustomBottomBarComponent';
import CustomLeftBar from './CustomLeftBarComponent';
import {CustomToolBarItems} from './ToolbarItems';

const userCustomization = customize({
  components: {
    videoCall: {
      //topToolBar: CustomTopBar,
      /**
       * uncomment above line to verify the topToolBar override
       * it will use default top bar and add additional 5 toolbar items into the topbar
       * it will insert items in below order
       * Start section
       * - TB1 will be inserted after meeting title
       * - TB2 will be inserted after participant count/recording status
       * Center section
       * - TB3 will be single item - first
       * End section
       * - TB4 will be inserted after settings
       * - TB5 will be inserted after TB4
       */
      //bottomToolBar: CustomBottomBar,
      /**
       * uncomment above line to verify the bottomToolBar override
       * it will use default bottom bar and add additional 5 toolbar items into the bottombar
       * it will insert items in below order
       * * Start section
       * - TB1 will be inserted after layout
       * - TB2 will be inserted after invite
       * Center section
       * - TB3 will be first item
       * End section
       * - TB4 will be first item
       * - TB5 will be inserted after TB4
       */
      //leftToolBar: CustomLeftBar,
      /**
       * uncomment above line to verify the leftToolBar override
       * it will use default left bar and add additional 5 toolbar items into the leftbar
       * it will insert items in below order
       * Start section
       * - TB1 will be first item
       * - TB2 will be second item
       * Center section
       * - TB3 will be first item
       * End section
       * - TB4 will be first item
       * - TB5 will be inserted after TB4
       */
      //rightToolBar: CustomRightBar,
      /**
       * uncomment above line to verify the rightToolBar override
       * it will use default right bar and add additional 5 toolbar items into the rightbar
       * Start section
       * - TB1 will be first item
       * - TB2 will be second item
       * Center section
       * - TB3 will be first item
       * End section
       * - TB4 will be first item
       * - TB5 will be inserted after TB4
       */
    },
  },
});

export default userCustomization;
