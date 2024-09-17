import {customEvents} from 'customization-api';
import React, {createContext, useEffect, useState} from 'react';
import {CUSTOM_EVENT_NAME_FOR_HOST_JOINED} from './VideoCallWrapper';

export const AppRootContext = createContext({hostUid: null});

export const AppRootWrapper = props => {
  const [hostId, setHostId] = useState(null);

  useEffect(() => {
    customEvents.on(CUSTOM_EVENT_NAME_FOR_HOST_JOINED, data => {
      if (data && data?.payload) {
        try {
          setHostId(parseInt(data.payload));
        } catch (error) {
          console.error('Error on setting host id');
        }
      }
    });
    return () => {
      customEvents.off(CUSTOM_EVENT_NAME_FOR_HOST_JOINED, () => {});
    };
  }, []);

  return (
    <AppRootContext.Provider value={{hostUid: hostId}}>
      {props.children}
    </AppRootContext.Provider>
  );
};
