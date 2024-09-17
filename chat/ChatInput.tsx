import React from 'react';
import {
  useChatUIControls,
  useMessages,
  $config,
  SDKChatType,
  ChatMessageType,
  useRoomInfo,
  ChatAttachmentButton,
  UploadStatus,
  isWeb,
  type ChatOption,
} from 'customization-api';

import UploadIndicator from './UploadIndicator'; // Import the UploadIndicator component

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
  const onChangeText = (text: string) => setMessage(text);
  const {data} = useRoomInfo();
  const host_passPhrase = data?.roomId?.host;
  const isValidMsg =
    message.length > 0 ||
    (uploadedFiles.length > 0 && uploadStatus === UploadStatus.SUCCESS);

  const sendChatMessage = () => {
    if (!isValidMsg) return;
    const groupID = data?.chat?.group_id;
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
      type: msgType,
      msg: msgType === ChatMessageType.TXT ? message : '', // currently not supporting combination msg (file+txt)
      from: data?.uid?.toString(),
      to: selectedUserId ? selectedUserId.toString() : groupID,
      ext: {
        file_length,
        file_ext,
        file_url,
        file_name,
        from_platform: isWeb() ? 'web' : 'native',
      },
    };

    sendMessage(option as ChatOption);
    setMessage('');
    setUploadedFiles && setUploadedFiles(prev => []);
  };

  const SendButton = () => {
    return (
      <button onClick={sendChatMessage} style={styles.sendButton}>
        Send
      </button>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputWrapper}>
        <input
          value={message}
          onChange={e => onChangeText(e.target.value)}
          style={{
            ...styles.textInputStyle,
            ...(uploadedFiles.length > 0 && {paddingRight: '40px'}),
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') sendChatMessage();
          }}
          placeholder={
            uploadedFiles.length > 0
              ? uploadStatus === UploadStatus.IN_PROGRESS
                ? 'Uploading, please wait'
                : 'Uploaded, please send'
              : 'Type your message here...'
          }
          disabled={
            uploadedFiles.length > 0 && uploadStatus !== UploadStatus.SUCCESS
          }
        />
        {uploadedFiles.length > 0 && (
          <UploadIndicator uploadStatus={uploadStatus} />
        )}
      </div>
      <ChatAttachmentButton />
      <SendButton />
    </div>
  );
};

const styles: {[key: string]: React.CSSProperties} = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '10px',
    padding: '8px',
    position: 'relative',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  textInputStyle: {
    borderRadius: '10px',
    backgroundColor: '#F2F2F2',
    borderColor: '#CCCCCC',
    borderWidth: '1px',
    color: '#333333',
    textAlign: 'left',
    height: '40px',
    flex: 1,
    alignSelf: 'center',
    paddingRight: '30px', // Adding space for the indicator
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: '10px',
  },
  sendButton: {
    backgroundColor: $config.PRIMARY_ACTION_BRAND_COLOR,
    borderRadius: '20px',
    padding: '10px 16px',
    color: $config.PRIMARY_ACTION_TEXT_COLOR,
    fontSize: '14px',
    cursor: 'pointer',
    border: 0,
  },
};

export default CustomChatInput;
