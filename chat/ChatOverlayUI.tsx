import React from 'react';
import {useMessages, $config, useRoomInfo, isMobileUA} from 'customization-api';

import CustomChatInput from './ChatInput';
import ChatBubble from './ChatBubble';

const ChatActiveIcon = ({isActive, toggleExpand}) => {
  return (
    <div
      onClick={toggleExpand}
      style={{
        background: isActive ? $config.PRIMARY_ACTION_BRAND_COLOR : 'grey',
        display: 'flex',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        alignItems: 'center',
        position: 'absolute',
        bottom: isMobileUA() ? '120px' : '50px',
        right: '50px',
        zIndex: 999,
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <g clip-path="url(#clip0_9175_50517)">
          <path
            d="M6.75 15.0549H13.1C13.3 15.0549 13.4708 14.9839 13.6125 14.8419C13.7542 14.6998 13.825 14.5202 13.825 14.303C13.825 14.0858 13.7542 13.9062 13.6125 13.7642C13.4708 13.6222 13.2917 13.5512 13.075 13.5512H6.725C6.525 13.5512 6.35417 13.6222 6.2125 13.7642C6.07083 13.9062 6 14.0858 6 14.303C6 14.5202 6.07083 14.6998 6.2125 14.8419C6.35417 14.9839 6.53333 15.0549 6.75 15.0549ZM6.75 11.7968H17.275C17.475 11.7968 17.6458 11.7258 17.7875 11.5838C17.9292 11.4418 18 11.2621 18 11.0449C18 10.8277 17.9292 10.6481 17.7875 10.5061C17.6458 10.3641 17.4667 10.2931 17.25 10.2931H6.725C6.525 10.2931 6.35417 10.3641 6.2125 10.5061C6.07083 10.6481 6 10.8277 6 11.0449C6 11.2621 6.07083 11.4418 6.2125 11.5838C6.35417 11.7258 6.53333 11.7968 6.75 11.7968ZM6.75 8.53873H17.275C17.475 8.53873 17.6458 8.46772 17.7875 8.3257C17.9292 8.18368 18 8.00407 18 7.78686C18 7.56966 17.9292 7.39005 17.7875 7.24803C17.6458 7.10601 17.4667 7.035 17.25 7.035H6.725C6.525 7.035 6.35417 7.10601 6.2125 7.24803C6.07083 7.39005 6 7.56966 6 7.78686C6 8.00407 6.07083 8.18368 6.2125 8.3257C6.35417 8.46772 6.53333 8.53873 6.75 8.53873ZM2 21.2452V4.50373C2 4.11944 2.15 3.77275 2.45 3.46365C2.75 3.15455 3.1 3 3.5 3H20.5C20.8833 3 21.2292 3.15455 21.5375 3.46365C21.8458 3.77275 22 4.11944 22 4.50373V17.536C22 17.9203 21.8458 18.267 21.5375 18.5761C21.2292 18.8852 20.8833 19.0398 20.5 19.0398H6L3.275 21.7715C3.04167 22.0054 2.77083 22.0597 2.4625 21.9344C2.15417 21.8091 2 21.5794 2 21.2452Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_9175_50517">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export const ChatOverlayUI = () => {
  const {
    data: {isHost},
    isJoinDataFetched,
  } = useRoomInfo();
  const {groupMessages} = useMessages();
  const [isChatOpen, setIsChatOpen] = React.useState(true);
  const [isMinimized, setIsMinimized] = React.useState(true);

  // Positioning and dragging state
  const [dragging, setDragging] = React.useState(false);
  const [position, setPosition] = React.useState({x: -150, y: 350});
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

  let transformcss = {};

  if (isMobileUA()) {
    transformcss = {
      bottom: '170px',
    };
  } else {
    transformcss = {transform: `translate(${position.x}px, ${position.y}px)`};
  }

  return isChatOpen ? (
    <>
      <ChatActiveIcon isActive={isMinimized} toggleExpand={toggleExpand} />
      <div
        style={{
          ...styles.chatContainer,
          ...transformcss,
          cursor: dragging ? 'grabbing' : 'grab',
        }}>
        <div
          onMouseDown={handleMouseDown}
          style={{
            ...styles.body,
            display: isMinimized ? 'none' : 'flex',
            cursor: dragging ? 'grabbing' : 'grab',
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
    </>
  ) : (
    <></>
  );
};

const styles: {[key: string]: React.CSSProperties} = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: isMobileUA() ? '80%' : '24rem',
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
