import React from 'react';
import {
  useContent,
  useLocalUid,
  ChatMessageType,
  $config,
  UploadStatus as LoadingStatus,
} from 'customization-api';
import UploadIndicator from './UploadIndicator';

function formatTime(date: Date): string {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
  const strTime = `${hours}:${strMinutes} ${ampm}`;
  return strTime;
}

const CustomChatBubble = ({msg}) => {
  const {defaultContent} = useContent();
  const localUid = useLocalUid();
  const isLocal = msg.uid === localUid;
  const name = isLocal ? 'You' : defaultContent[msg.uid]?.name;
  let time = formatTime(new Date(parseInt(msg.createdTimestamp)));
  const [isImgLoading, setIsImgLoading] = React.useState(true);
  const handleImgLoad = () => {
    setIsImgLoading(false);
  };

  return (
    <div
      style={{
        ...styles.messageBubbleContainer,
        ...(isLocal ? styles.outgoingMessage : styles.incomingMessage),
      }}>
      <div style={styles.nameContainer}>
        <p style={styles.userNameStyle}>{isLocal ? 'You' : name}</p>
        <p style={styles.timestampStyle}>{time}</p>
      </div>
      <div
        key={msg.msgId}
        style={{
          ...styles.messageBubble,
          ...(isLocal
            ? styles.outgoingMessageBubble
            : styles.incomingMessageBubble),
        }}>
        {msg.type === ChatMessageType.TXT && msg.msg}
        {msg.type === ChatMessageType.IMAGE && (
          <div style={styles.previewImg}>
            {isImgLoading ? (
              <UploadIndicator uploadStatus={LoadingStatus.IN_PROGRESS} />
            ) : (
              <></>
            )}
            <img alt="img" src={msg.thumb} onLoad={handleImgLoad} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomChatBubble;

const styles: {[key: string]: React.CSSProperties} = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    height: '32rem',
    width: '24rem',
    backgroundColor: '#e7e0e0',
    borderRadius: '0.5rem',
    transition: 'height 0.2s ease-in-out',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    borderBottom: '1px solid black',
    cursor: 'pointer',
    backgroundColor: 'whitesmoke',
  },
  headerText: {
    fontSize: '1.25rem',
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
  },
  closeButton: {
    cursor: 'pointer',
  },
  iconButton: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    width: '14px',
    height: '14px',
  },
  messageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  infoText: {
    fontSize: '12px',
    padding: '6px 8px',
    opacity: 0.8,
    margin: '10px',
    fontFamily: 'Source Sans Pro',
    border: `1px solid ${$config.INPUT_FIELD_BORDER_COLOR}`,
    borderRadius: '4px',
    backgroundColor: 'antiquewhite',
  },
  messageBubble: {
    maxWidth: '200px',
    wordBreak: 'break-all',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
  },
  messageBubbleContainer: {
    maxWidth: '200px',
  },
  outgoingMessage: {
    alignSelf: 'flex-end',
    marginRight: '1rem',
  },
  incomingMessage: {
    alignSelf: 'flex-start',
    marginLeft: '1rem',
  },
  outgoingMessageBubble: {
    backgroundColor: '#DED3D3',
  },
  incomingMessageBubble: {
    backgroundColor: '#A9A5A5',
  },
  inputContainer: {
    backgroundColor: $config.CARD_LAYER_5_COLOR,
  },
  input: {
    border: '2px solid #d1d1d1',
    borderRadius: '0.5rem',
    width: '15rem',
    height: '2.5rem',
    padding: '0.5rem',
    marginRight: '1rem',
    fontSize: '0.875rem',
  },
  sendButton: {
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    padding: '0 2rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
  },
  modal: {
    display: 'flex',
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    width: '16rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
  modalClose: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    padding: '0.25rem',
    width: '1.5rem',
    height: '1.25rem',
    alignItems: 'center',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
  },
  userNameStyle: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '600',
    fontSize: '12px',
    opacity: 0.7,
    color: $config.FONT_COLOR,
    margin: '5px',
    textTransform: 'capitalize',
  },
  timestampStyle: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    fontSize: '12px',
    color: $config.FONT_COLOR,
    opacity: 0.3,
    margin: '5px',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  previewImg: {
    width: '170px',
    height: '120px',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
