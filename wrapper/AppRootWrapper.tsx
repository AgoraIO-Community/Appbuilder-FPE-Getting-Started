import {customEvents} from 'customization-api';
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CUSTOM_EVENT_NAME_FOR_HOST_JOINED} from './VideoCallWrapper';

export const AppRootContext = createContext({hostUid: null});

export const AppRootWrapper = props => {
  const [hostId, setHostId] = useState(null);
  const [ready, setReady] = useState(false);

  const updateDisplayName = async () => {
    //setting the name
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    //

    if (username) {
      const data = await AsyncStorage.getItem('store');
      console.log('debugging data', data);

      if (data) {
        try {
          console.log('debugging data', data);
          let parsedData = JSON.parse(data);
          parsedData.displayName = decodeURIComponent(username);
          await AsyncStorage.setItem('store', JSON.stringify(parsedData));
          setReady(true);
        } catch (error) {
          setReady(true);
        }
      } else {
        try {
          await AsyncStorage.setItem(
            'store',
            JSON.stringify({displayName: decodeURIComponent(username)}),
          );
          setReady(true);
        } catch (error) {
          setReady(true);
        }
      }
    } else {
      setReady(true);
    }
  };

  useEffect(() => {
    updateDisplayName();

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
      {ready ? props.children : <></>}
    </AppRootContext.Provider>
  );
};
