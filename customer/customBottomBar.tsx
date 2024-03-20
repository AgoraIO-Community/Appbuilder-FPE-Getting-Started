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
  const {
    data: {isHost},
  } = useRoomInfo();
  const {enableAudioButton, disableAudioButton} = useLocalAudio();
  const [disableAttendeeMic, setDisableAttendeeMic] = useState(false);
  const {setTriggerEndCallEvent} = useContext(CustomWrapperContext);
  const isHostRef = useRef(isHost);
  useEffect(() => {
    isHostRef.current = isHost;
  }, [isHost]);

  const executeEndCall = useEndCall();

  useEffect(() => {
    customEvents.on('HOST_ENDED_THE_CALL', () => {
      try {
        setTriggerEndCallEvent(false);
        setTimeout(() => {
          executeEndCall();
        });
      } catch (error) {}
    });

    customEvents.on('DISABLE_ATTENDEE_MIC', ({payload}) => {
      try {
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
    return () => {
      customEvents.off('DISABLE_ATTENDEE_MIC', () => {});
      customEvents.off('HOST_ENDED_THE_CALL', () => {});
    };
  }, []);

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
        onPress={() => {
          setDisableAttendeeMic(!disableAttendeeMic);
          customEvents.send(
            'DISABLE_ATTENDEE_MIC',
            JSON.stringify(!disableAttendeeMic),
            PersistanceLevel.Session,
          );
        }}
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
