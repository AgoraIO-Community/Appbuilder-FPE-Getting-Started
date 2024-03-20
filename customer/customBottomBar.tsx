import {
  ToolbarPreset,
  ToolbarItem,
  useRoomInfo,
  useLocalAudio,
  TertiaryButton,
  customEvents,
  PersistanceLevel,
  useEndCall,
} from 'customization-api';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {CustomWrapperContext} from './customWrapper';

const DisableUnmuteButton = () => {
  //hook that returns the functions which enable/disable the audio button state
  const {enableAudioButton, disableAudioButton} = useLocalAudio();

  //hook to execute the endcall
  const executeEndCall = useEndCall();

  const {
    data: {isHost},
  } = useRoomInfo();
  const isHostRef = useRef(isHost);
  useEffect(() => {
    isHostRef.current = isHost;
  }, [isHost]);

  const [disableAttendeeMic, setDisableAttendeeMic] = useState(false);
  const {setTriggerEndCallEvent} = useContext(CustomWrapperContext);

  useEffect(() => {
    /**
     * custom event listener for disable attendee mic
     * Here we can call disableAudioButton/enableAudioButton function to update participant mic button state
     */
    customEvents.on('DISABLE_ATTENDEE_MIC', ({payload}) => {
      try {
        //host side we don't disable the button so ignoring it
        if (isHostRef.current) {
          return;
        }
        //attendee only disable the mic button
        const data = JSON.parse(payload);
        if (data && data === true) {
          disableAudioButton();
        } else {
          enableAudioButton();
        }
      } catch (error) {
        console.log('debugging error on DISABLE_ATTENDEE_MIC listener ');
      }
    });

    /**
     * custom event listener when host end the call
     */
    customEvents.on('HOST_ENDED_THE_CALL', () => {
      try {
        /**
         * when host 1 end the call and trigger event we don't want to other host to do the same
         * so setTriggerEndCallEvent will prevent the host to trigger custom event
         */
        setTriggerEndCallEvent(false);
        setTimeout(() => {
          executeEndCall();
        });
      } catch (error) {
        console.log('debugging error on HOST_ENDED_THE_CALL listener ');
      }
    });

    /**
     * unregistering the event on unmount
     */
    return () => {
      customEvents.off('DISABLE_ATTENDEE_MIC', () => {});
      customEvents.off('HOST_ENDED_THE_CALL', () => {});
    };
  }, []);

  /**
   * triggerCustomEventToDisableButton function will trigger custom event
   * it will send to the all the users in the call
   */
  const triggerCustomEventToDisableButton = () => {
    setDisableAttendeeMic(!disableAttendeeMic);
    customEvents.send(
      'DISABLE_ATTENDEE_MIC',
      JSON.stringify(!disableAttendeeMic),
      PersistanceLevel.Session,
    );
  };

  //only host will see the disable attendee mic button
  if (!isHost) {
    return null;
  }

  return (
    <ToolbarItem style={style.toolbarItemStyle as any}>
      <TertiaryButton
        containerStyle={style.containerStyle}
        textStyle={style.textStyle as any}
        text={
          disableAttendeeMic ? 'Enable Attendee Mic' : 'Disable Attendee Mic'
        }
        onPress={triggerCustomEventToDisableButton}
      />
    </ToolbarItem>
  );
};

/* use existing toolbar and a custom item at any point with order */
const BottomToolBarOverride = () => {
  return (
    <ToolbarPreset
      align="bottom"
      customItems={[
        {
          component: DisableUnmuteButton,
          order: 0,
          align: 'end',
          hide: 'no',
        },
      ]}
      snapPointsMinMax={[100, 300]}
    />
  );
};

const style = {
  toolbarItemStyle: {
    position: 'relative',
  },
  containerStyle: {
    padding: 10,
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
  },
};

export default BottomToolBarOverride;
