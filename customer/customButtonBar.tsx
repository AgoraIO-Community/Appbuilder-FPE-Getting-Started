import {
  ToolbarPreset,
  ToolbarItem,
  useRoomInfo,
  useDisableButton,
  MUTE_REMOTE_TYPE,
  TertiaryButton,
} from 'customization-api';
import React, {useState} from 'react';

const DisableUnmuteButton = () => {
  const {
    data: {isHost},
  } = useRoomInfo();
  const disableButton = useDisableButton();

  const [micDisabled, setMicDisabled] = useState(false);

  if (!isHost) {
    return null;
  }
  return (
    <ToolbarItem style={style.toolbarItemStyle as any}>
      <TertiaryButton
        containerStyle={style.containerStyle}
        textStyle={style.textStyle as any}
        text={micDisabled ? 'Enable Attendee Mic' : 'Disable Attendee Mic'}
        onPress={() => {
          if (!micDisabled) {
            disableButton(MUTE_REMOTE_TYPE.video, true);
            setMicDisabled(true);
          } else {
            disableButton(MUTE_REMOTE_TYPE.video, false);
            setMicDisabled(false);
          }
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
