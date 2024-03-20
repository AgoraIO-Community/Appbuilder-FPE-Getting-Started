import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';

export const CustomWrapperContext =
  createContext<CustomWrapperContextInterface>({
    triggerEndCallEvent: true,
    setTriggerEndCallEvent: () => {},
    triggerEndCallEventRef: {current: true},
  });

interface CustomWrapperProviderProps {
  children: React.ReactNode;
}
interface CustomWrapperContextInterface {
  triggerEndCallEvent: boolean;
  setTriggerEndCallEvent: Dispatch<SetStateAction<boolean>>;
  triggerEndCallEventRef: MutableRefObject<boolean>;
}

const CustomWrapperProvider: React.FC<CustomWrapperProviderProps> = props => {
  const [triggerEndCallEvent, setTriggerEndCallEvent] = useState(true);

  const triggerEndCallEventRef = useRef(triggerEndCallEvent);

  useEffect(() => {
    triggerEndCallEventRef.current = triggerEndCallEvent;
  }, [triggerEndCallEvent]);

  return (
    <CustomWrapperContext.Provider
      value={{
        triggerEndCallEvent,
        setTriggerEndCallEvent,
        triggerEndCallEventRef,
      }}>
      {props.children}
    </CustomWrapperContext.Provider>
  );
};

export default CustomWrapperProvider;
