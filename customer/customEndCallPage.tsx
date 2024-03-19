import React from 'react';
import {endCallEveryOne, getCustomRoute, useParams} from 'customization-api';

const CustomEndCallPage = () => {
  const {by}: {by: string} = useParams();

  return (
    <div style={style.containerStyle}>
      <span style={style.textStyle as any}>
        {by === 'self'
          ? 'You have left the meeting'
          : 'Host ended the meeting for everyone'}
      </span>
    </div>
  );
};

const useBeforeEndCall = () => isHost => {
  if (isHost) {
    endCallEveryOne();
  }
  return null;
};

const useAfterEndCall = () => (isHost, history, isTriggeredByHost) => {
  if (isHost) {
    history.push('/');
  } else {
    history.push(
      getCustomRoute(isTriggeredByHost ? 'call-ended/host' : 'call-ended/self'),
    );
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
