import React, {useContext} from 'react';
import {
  customEvents,
  getCustomRoute,
  useLocalUserInfo,
} from 'customization-api';
import {CustomWrapperContext} from './customWrapper';

/**
 * Custom Page for attendee after call ended
 */
const CustomEndCallPage = () => {
  return (
    <div style={style.containerStyle}>
      <span style={style.textStyle as any}>{'The Meeting has been ended'}</span>
    </div>
  );
};

//hook that return function (this function will be executed by the system before end call)
const useBeforeEndCall = () => {
  const {uid} = useLocalUserInfo();
  const {triggerEndCallEventRef} = useContext(CustomWrapperContext);

  return isHost => {
    //checking if user is host
    if (isHost) {
      //to prevent multiple host sending the HOST_ENDED_THE_CALL event
      triggerEndCallEventRef.current &&
        customEvents.send(
          'HOST_ENDED_THE_CALL',
          JSON.stringify({triggeredByUid: uid}),
        );
    }
    return null;
  };
};

//hook that return function (this function will be executed by the system after end call)
const useAfterEndCall = () => (isHost, history) => {
  if (!isHost) {
    //for attendee user will need to redirect to custom page
    history.push(getCustomRoute('call-ended'));
  }
  return null;
};

const style = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '200px',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
};

export {useAfterEndCall, useBeforeEndCall};
export default CustomEndCallPage;
