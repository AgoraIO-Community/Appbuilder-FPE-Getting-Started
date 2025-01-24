import React, {useContext, useEffect, useState} from 'react';
import {
  AI_AGENT_STATE,
  AIAgentState,
  AgentState,
  AGENT_PROXY_URL,
} from './const';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {AgentContext} from './AgentContext';
import {
  isMobileUA,
  ThemeConfig,
  UidType,
  useContent,
  useEndCall,
  useLocalUid,
  useHistory,
  useStorageContext,
  Toast,
} from 'customization-api';
import {CallIcon, EndCall} from '../icons';

const connectToAIAgent = async (
  agentAction: 'start' | 'stop',
  channel_name: string,
  localUid: UidType,
  agentAuthToken: string,
): Promise<{}> => {
  // const apiUrl = '/api/proxy';
  const apiUrl = $config.BACKEND_ENDPOINT + '/v1/convoai';
  const requestBody = {
    channel_name: channel_name,
    uid: localUid, // user uid // localUid or 0
  };
  console.log({requestBody});
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${agentAuthToken}`,
  };

  try {
    const response = await fetch(`${apiUrl}/${agentAction}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // console.log({data}, "X-Client-ID start stop")
    console.log(
      `AI agent ${agentAction === 'start' ? 'connected' : 'disconnected'}`,
      data,
    );
    if (agentAction === 'start') {
      return data;
    }
  } catch (error) {
    console.error(`Failed to ${agentAction} AI agent connection:`, error);
    throw error;
  }
};

export const AgentControl: React.FC<{channel_name: string}> = ({
  channel_name,
}) => {
  const {
    agentConnectionState,
    setAgentConnectionState,
    agentAuthToken,
    setAgentAuthToken,
    agentUID,
    setAgentUID,
  } = useContext(AgentContext);
  // console.log("X-Client-ID state", clientId)
  // const { users } = useContext(UserContext)
  const {activeUids: users, defaultContent} = useContent();
  const endcall = useEndCall();
  const history = useHistory();
  const {store} = useStorageContext();
  const localUid = useLocalUid();

  // stop_agent API is successful, but agent has not yet left the RTC channel
  const isAwaitingLeave = agentConnectionState === AgentState.AWAITING_LEAVE;

  // const { toast } = useToast()
  console.log(
    'Agent Control--',
    {agentConnectionState},
    {bth: AI_AGENT_STATE[agentConnectionState]},
  );

  const handleConnectionToggle = async () => {
    try {
      // connect to agent when agent is in not connected state or when earlier connect failed
      if (
        agentConnectionState === AgentState.NOT_CONNECTED ||
        agentConnectionState === AgentState.AGENT_REQUEST_FAILED ||
        isAwaitingLeave
      ) {
        try {
          setAgentConnectionState(AgentState.REQUEST_SENT);
          const data = await connectToAIAgent(
            'start',
            channel_name,
            localUid,
            store.token,
          );
          // console.log("response X-Client-ID", newClientId, typeof newClientId)
          // @ts-ignore
          const {agent_uid = null} = data;

          //setClientId(agent_id);
          setAgentUID(agent_uid);

          setAgentConnectionState(AgentState.AWAITING_JOIN);
          //   toast({title: "Agent requested to join"})

          Toast.show({
            leadingIconName: 'tick-fill',
            type: 'success',
            text1: 'Agent requested to join',
            text2: null,
            visibilityTime: 3000,
            primaryBtn: null,
            secondaryBtn: null,
            leadingIcon: null,
          });
        } catch (agentConnectError) {
          setAgentConnectionState(AgentState.AGENT_REQUEST_FAILED);
          //   toast({
          //     title: "Uh oh! Agent failed to connect",
          //     description: `${agentConnectError}`,
          //     variant: "destructive",
          //     action: <ToastAction altText="Try again">Try again</ToastAction>,
          //   })

          if (agentConnectError.toString().indexOf('401') !== -1) {
            Toast.show({
              leadingIconName: 'alert',
              type: 'error',
              text1: 'Your session is expired. Please sign in to join call.',
              text2: null,
              visibilityTime: 5000,
              primaryBtn: null,
              secondaryBtn: null,
              leadingIcon: null,
            });
            // window.location.href = '/create'
            await endcall();
            setAgentAuthToken(null);
            return;
          } else {
            Toast.show({
              leadingIconName: 'alert',
              type: 'error',
              text1: 'Uh oh! Agent failed to connect',
              text2: null,
              visibilityTime: 5000,
              primaryBtn: null,
              secondaryBtn: null,
              leadingIcon: null,
            });
          }

          throw agentConnectError;
        }
      }
      // disconnect agent with agent is already connected or when earlier disconnect failed
      if (
        agentConnectionState === AgentState.AGENT_CONNECTED ||
        agentConnectionState === AgentState.AGENT_DISCONNECT_FAILED
      ) {
        if (isMobileUA()) {
          await endcall();
          setAgentConnectionState(AgentState.NOT_CONNECTED);
          setAgentAuthToken(null);
          return; // check later
        }
        try {
          setAgentConnectionState(AgentState.AGENT_DISCONNECT_REQUEST);
          await connectToAIAgent('stop', channel_name, localUid, store.token);
          setAgentConnectionState(AgentState.AWAITING_LEAVE);
          // toast({ title: "Agent disconnecting..."})
          Toast.show({
            leadingIconName: 'tick-fill',
            type: 'success',
            text1: 'Agent disconnected',
            text2: null,
            visibilityTime: 3000,
            primaryBtn: null,
            secondaryBtn: null,
            leadingIcon: null,
          });
        } catch (agentDisconnectError) {
          setAgentConnectionState(AgentState.AGENT_DISCONNECT_FAILED);
          //   toast({
          //     title: "Uh oh! Agent failed to disconnect",
          //     description: `${agentDisconnectError}`,
          //     variant: "destructive",
          //     action: <ToastAction altText="Try again">Try again</ToastAction>,
          //   })
          Toast.show({
            leadingIconName: 'alert',
            type: 'error',
            text1: 'Uh oh! Agent failed to disconnect',
            text2: null,
            visibilityTime: 5000,
            primaryBtn: null,
            secondaryBtn: null,
            leadingIcon: null,
          });

          throw agentDisconnectError;
        }
      }
    } catch (error) {
      console.log(`Agent failed to connect/disconnect - ${error}`);
    }
  };

  useEffect(() => {
    console.log('agent contrl', {users});
    // welcome agent
    const aiAgentUID = users.filter(item => item === agentUID);
    if (
      aiAgentUID.length &&
      agentConnectionState === AgentState.AWAITING_JOIN
    ) {
      setAgentConnectionState(AgentState.AGENT_CONNECTED);
      // toast({title: "Say Hi!!"})
      Toast.show({
        leadingIconName: 'tick-fill',
        type: 'success',
        text1: 'Say Hi!!',
        text2: null,
        visibilityTime: 3000,
        primaryBtn: null,
        secondaryBtn: null,
        leadingIcon: null,
      });
    }
    // when agent leaves, show left toast, and set agent to not connected state
    if (
      !aiAgentUID.length &&
      agentConnectionState === AgentState.AWAITING_LEAVE
    ) {
      // toast({ title: "Agent left the call"})
      // Toast.show({
      //   leadingIconName: 'tick-fill',
      //   type: 'success',
      //   text1: "Agent left the call",
      //   text2: null,
      //   visibilityTime: 3000,
      //   primaryBtn: null,
      //   secondaryBtn: null,
      //   leadingIcon: null,
      // })
      setAgentConnectionState(AgentState.NOT_CONNECTED);
    }
  }, [users]);

  const isLoading =
    agentConnectionState === AgentState.REQUEST_SENT ||
    agentConnectionState === AgentState.AGENT_DISCONNECT_REQUEST ||
    // || agentConnectionState === AgentState.AWAITING_LEAVE
    agentConnectionState === AgentState.AWAITING_JOIN;

  const isStartAgent =
    agentConnectionState === AgentState.NOT_CONNECTED ||
    agentConnectionState === AgentState.AGENT_REQUEST_FAILED ||
    isAwaitingLeave;
  const isEndAgent =
    agentConnectionState === AgentState.AGENT_CONNECTED ||
    agentConnectionState === AgentState.AGENT_DISCONNECT_FAILED;

  const backgroundColorStyle = isMobileUA()
    ? {backgroundColor: isEndAgent ? '#FF414D' : '#00C2FF', height: 72}
    : {};
  const fontcolorStyle = isMobileUA()
    ? {color: '#FFF'}
    : {color: isEndAgent ? '#FF414D' : '#00C2FF'};
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        height: 48,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        borderRadius: 40,
        borderWidth: isMobileUA() ? 0 : 1,
        borderColor: isEndAgent ? '#FF414D' : '#00C2FF',
        flexDirection: 'row',
        ...backgroundColorStyle,
      }}
      onPress={handleConnectionToggle}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={isMobileUA() ? '#FFFFFF' : '#00C2FF'}
        />
      ) : isStartAgent ? (
        <CallIcon fill={isMobileUA() ? '#FFFFFF' : '#00C2FF'} />
      ) : (
        <EndCall fill={isMobileUA() ? '#FFFFFF' : '#FF414D'} />
      )}

      <Text
        style={{
          fontFamily: ThemeConfig.FontFamily.sansPro,
          ...fontcolorStyle,
        }}>{`${AI_AGENT_STATE[agentConnectionState]}`}</Text>
    </TouchableOpacity>
  );
};
