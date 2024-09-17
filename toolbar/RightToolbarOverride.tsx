import React from 'react';
import {useMessages, $config, useRoomInfo} from 'customization-api';

import CustomChatInput from '../chat/ChatInput';
import ChatBubble from '../chat/ChatBubble';

const MinimizeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect y="9" width="20" height="2" fill="currentColor" />
  </svg>
);

const MaximizeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="0" width="2" height="20" fill="currentColor" />
    <rect x="0" y="9" width="20" height="2" fill="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 20 20"
    style={{cursor: 'pointer'}}>
    <path
      fill="#333"
      d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
  </svg>
);

export const RightToolbarOverride = () => {
  const {
    data: {isHost},
    isJoinDataFetched,
  } = useRoomInfo();
  const {groupMessages} = useMessages();
  const [isChatOpen, setIsChatOpen] = React.useState(true);
  const [isMinimized, setIsMinimized] = React.useState(false);

  // Positioning and dragging state
  const [dragging, setDragging] = React.useState(false);
  const [position, setPosition] = React.useState({x: 10, y: 10});
  const [startPos, setStartPos] = React.useState({x: 0, y: 0});

  const toggleExpand = () => {
    setIsMinimized(prev => !prev);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    setStartPos({x: e.clientX - position.x, y: e.clientY - position.y});
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  React.useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  return isChatOpen ? (
    <div
      style={{
        ...styles.chatContainer,

        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: dragging ? 'grabbing' : 'grab',
      }}>
      <div
        style={{...styles.header, cursor: dragging ? 'grabbing' : 'grab'}}
        onMouseDown={handleMouseDown}>
        <span style={styles.headerText}>Chat</span>
        <div style={styles.iconContainer}>
          <div style={styles.iconButton} onClick={toggleExpand}>
            {isMinimized ? <MaximizeIcon /> : <MinimizeIcon />}
          </div>
          <div onClick={e => setIsChatOpen(false)} style={styles.iconButton}>
            {/* <CloseIcon /> */}
          </div>
        </div>
      </div>

      <div
        style={{
          ...styles.body,
          display: isMinimized ? 'none' : 'flex',
        }}>
        <div style={styles.messageContainer}>
          <p style={styles.infoText}>
            Welcome to the chat, all messages will be deleted after the call
            ends.
          </p>
          {groupMessages.map((msg, index) => (
            <ChatBubble key={msg.msgId} msg={msg} />
          ))}
        </div>
        {isJoinDataFetched && isHost ? (
          <div
            style={{
              ...styles.inputContainer,
            }}>
            <CustomChatInput />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

const styles: {[key: string]: React.CSSProperties} = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '24rem',
    //backgroundColor: "#e7e0e0",
    backgroundColor: $config.CARD_LAYER_3_COLOR,
    borderRadius: '0.5rem',
    transition: 'height 0.2s ease-in-out',
    userSelect: 'none',
    zIndex: 999,
    right: 0,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    borderBottom: '1px solid black',
    cursor: 'pointer',
    backgroundColor: $config.CARD_LAYER_5_COLOR,
    // opacity: 0.9,
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
    alignItems: 'center',
  },
  headerText: {
    fontSize: '1.25rem',
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
    color: $config.FONT_COLOR,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
  },
  iconButton: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    width: '16px',
    height: '16px',
    color: $config.FONT_COLOR,
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
  messageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  inputContainer: {
    backgroundColor: $config.CARD_LAYER_5_COLOR,
  },
  body: {
    // flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'auto',
    height: '500px',
  },
};
