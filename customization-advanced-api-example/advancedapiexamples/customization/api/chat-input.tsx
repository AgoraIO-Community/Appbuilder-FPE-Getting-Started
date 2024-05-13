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
import {customize} from 'customization-api';
import {
  type ChatOption,
  SDKChatType,
  ChatMessageType,
  useRoomInfo,
  ChatAttachmentButton,
  UploadStatus,
  isWeb,
} from 'customization-api';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  useChatUIControls,
  useMessages,
  TextInput,
  $config,
} from 'customization-api';

const CustomChatInput = () => {
  const {
    privateChatUser: selectedUserId,
    message,
    setMessage,
    uploadStatus,
    uploadedFiles,
    setUploadedFiles,
  } = useChatUIControls();
  const {sendMessage} = useMessages();
  const chatMessageInputPlaceholder =
    uploadedFiles.length > 0
      ? uploadStatus === UploadStatus.IN_PROGRESS
        ? 'Uploading pls wait'
        : 'Uploaded , click send'
      : 'Type your message here...';
  const onChangeText = (text: string) => setMessage(text);
  const {data} = useRoomInfo();
  const isValidMsg =
    message.length > 0 ||
    (uploadedFiles.length > 0 && uploadStatus === UploadStatus.SUCCESS);

  const sendChatMessage = () => {
    if (!isValidMsg) return;
    const groupID = data.chat.group_id;
    const msgType =
      uploadedFiles.length > 0
        ? uploadedFiles[0].file_type
        : ChatMessageType.TXT;

    const {
      file_ext = '',
      file_length = 0,
      file_name = '',
      file_url = '',
    } = uploadedFiles[0] || {};

    const option = {
      chatType: selectedUserId
        ? SDKChatType.SINGLE_CHAT
        : SDKChatType.GROUP_CHAT,
      type: msgType as ChatMessageType,
      msg: msgType === ChatMessageType.TXT ? message : '', // currenlt not supporting combinarion msg (file+txt)
      from: data.uid.toString(),
      to: selectedUserId ? selectedUserId.toString() : groupID,
      ext: {
        file_length,
        file_ext,
        file_url,
        file_name,
        from_platform: isWeb() ? 'web' : 'native',
      },
    };

    // const option: ChatOption = {
    //   chatType: selectedUserId
    //     ? SDKChatType.SINGLE_CHAT
    //     : SDKChatType.GROUP_CHAT,
    //   type: ChatMessageType.TXT,
    //   from: data.uid.toString(),
    //   to: selectedUserId ? selectedUserId.toString() : data.chat.group_id,
    //   msg: message,
    // };
    sendMessage(option);
    setMessage('');
    setUploadedFiles && setUploadedFiles(prev => []);
  };

  const SendButton = () => {
    return (
      <TouchableOpacity onPress={sendChatMessage} style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    );
  };

  const isUploaded =
    uploadStatus === UploadStatus.IN_PROGRESS || uploadedFiles.length > 0;

  return (
    <View style={styles.container}>
      <TextInput
        value={message}
        onChangeText={onChangeText}
        style={[styles.textInputStyle, isUploaded && {backgroundColor: 'grey'}]}
        blurOnSubmit={false}
        onSubmitEditing={sendChatMessage}
        placeholder={chatMessageInputPlaceholder}
        placeholderTextColor={
          isUploaded ? '#f2f2f2' : $config.PRIMARY_ACTION_BRAND_COLOR
        }
        autoCorrect={false}
        editable={!isUploaded}
      />
      <ChatAttachmentButton />
      <SendButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 16,
  },
  textInputStyle: {
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    color: '#333333',
    textAlign: 'left',
    height: 40,
    paddingVertical: 10,
    flex: 1,
    alignSelf: 'center',
  },
  sendButton: {
    backgroundColor: '#5DADE2', // blue color, you can change it as needed
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


const customization = customize({
  components: {
    videoCall: {
      chat: {
        chatInput: CustomChatInput,
      },
    },
  },
});

export default customization;
