/*
********************************************
 Copyright © 2021 Agora Lab, Inc., all rights reserved.
 AppBuilder and all associated components, source code, APIs, services, and documentation 
 (the “Materials”) are owned by Agora Lab, Inc. and its licensors. The Materials may not be 
 accessed, used, modified, or distributed for any purpose without a license from Agora Lab, Inc.  
 Use without a license or in violation of any license terms and conditions (including use for 
 any purpose competitive to Agora Lab, Inc.’s business) is strictly prohibited. For more 
 information visit https://appbuilder.agora.io. 
*********************************************
*/
import {customize, useRoomInfo} from 'customization-api';
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {
  ChatBubbleProps,
  ChatBubble,
  useMessages,
  useChatUIControls,
  useLocalUid,
  $config,
  SDKChatType,
} from 'customization-api';

export const CustomChatBubble = (props: ChatBubbleProps) => {
  const [editActive, setEditActive] = useState(false);
  const {deleteMessage, removeMessageFromPrivateStore, removeMessageFromStore} =
    useMessages();
  const localUid = useLocalUid();
  const [editMsgLocal, setEditMsgLocal] = useState('');
  const {
    privateChatUser: selectedUserId,
    message,
    setMessage,
  } = useChatUIControls();
  const {data} = useRoomInfo();
  debugger;
  // if (editActive) {
  //   return (
  //     <View style={styles.container}>
  //       <TextInput
  //         style={styles.textInputStyle}
  //         placeholder={'Edit message'}
  //         onChangeText={txt => setEditMsgLocal(txt)}
  //       />
  //       <View style={styles.btnContainer}>
  //         <TouchableOpacity
  //           onPress={() => {
  //             //do edit
  //             // editMessage(
  //             //   props.msgId,
  //             //   editMsgLocal,
  //             //   privateActive ? selectedChatUserId : undefined,
  //             // );
  //             setEditActive(false);
  //           }}>
  //           <Text>Submit</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={{marginHorizontal: 10}}
  //           onPress={() => {
  //             setEditActive(false);
  //           }}>
  //           <Text>Cancel</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // }

  const handleDelete = () => {
    const chatType = selectedUserId
      ? SDKChatType.SINGLE_CHAT
      : SDKChatType.GROUP_CHAT;
    deleteMessage(
      props.msgId,
      selectedUserId ? selectedUserId.toString() : data.chat.group_id,
      chatType,
    );
    if (chatType === SDKChatType.SINGLE_CHAT) {
      removeMessageFromPrivateStore(props.msgId, props.isLocal);
    }
    if (chatType === SDKChatType.GROUP_CHAT) {
      removeMessageFromStore(props.msgId, props.isLocal);
    }
  };
  return (
    <View style={styles.container}>
      <ChatBubble
        {...props}
        message={props.isDeleted ? 'This message was deleted' : props.message}
      />
      {/* local user has access to delete */}
      {props.uid === localUid && (
        <View style={styles.btnContainer}>
          {!props?.isDeleted && (
            <>
              {/* <TouchableOpacity
                onPress={() => {
                  setEditActive(true);
                }}>
                <Text>Edit</Text>
              </TouchableOpacity> */}

              <TouchableOpacity
                style={{marginHorizontal: 10}}
                onPress={handleDelete}>
                <Text style={{color: 'red'}}>DEL</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#5DADE2',
    borderWidth: 2,
    borderStyle: 'dotted',
  },
  textInputStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: '90%',
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderColor: $config.PRIMARY_ACTION_BRAND_COLOR,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const customization = customize({
  components: {
    videoCall: {
      chat: {
        chatBubble: CustomChatBubble,
      },
    },
  },
});

export default customization;
