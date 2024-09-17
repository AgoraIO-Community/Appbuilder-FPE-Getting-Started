import React, {useCallback, useEffect, useState} from 'react';
import {useUserName} from 'customization-api';

export const PrecallCallWrapper = props => {
  const [ready, setReady] = useState(false);
  const [_, setName] = useUserName();

  const updateDisplayName = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
      try {
        setName(decodeURIComponent(username));
        setReady(true);
      } catch (error) {
        console.error('Error on setting display name on appbuilder store');
        setReady(true);
      }
    } else {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    updateDisplayName();
  }, []);

  return ready ? props.children : <></>;
};
