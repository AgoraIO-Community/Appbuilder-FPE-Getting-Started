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
import React from 'react';
import {customize,  
    ToolbarPreset,
    ToolbarItem,
    IconButton,
    customEvents,
    PersistanceLevel,
} from 'customization-api';


import styles from "./bottom-toolbar.module.css";

interface EmojiDisplayProps {
  selectedEmoji: string;
  onAnimationEnd: (emoji: string) => void;
}

const EmojiDisplay = ({ selectedEmoji, onAnimationEnd }: EmojiDisplayProps) => {
  const handleTransitionEnd = () => {
    onAnimationEnd(selectedEmoji);
  };
  return (
    <div className={styles.selectedEmoji} onTransitionEnd={handleTransitionEnd}>
      <span>{selectedEmoji}</span>
    </div>
  );
};

interface EmojiButtonProps {
  emoji: string;
  onSelect: (emoji: string) => void;
}
const EmojiButton = ({ emoji, onSelect }: EmojiButtonProps) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = "scale(1.5)";
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = "scale(1)";
    }
  };
  return (
    <button
      ref={buttonRef}
      style={{
        fontSize: "24px",
        margin: "5px",
        transition: "transform 0.3s ease",
      }}
      onClick={() => onSelect(emoji)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {emoji}
    </button>
  );
};

interface EmojiMenuProps {
  onSelect: (emoji: string) => void;
}

const EmojiMenu = ({ onSelect }: EmojiMenuProps) => {
  return (
    <div className={styles.emojiMenu}>
      <EmojiButton emoji="👍" onSelect={onSelect} />
      <EmojiButton emoji="👎" onSelect={onSelect} />
      <EmojiButton emoji="❤️" onSelect={onSelect} />
    </div>
  );
};

const Reactions = () => {
  const [showEmojiMenu, setShowEmojiMenu] = React.useState(false);
  const [selectedEmojis, setSelectedEmojis] = React.useState<string[]>([]);

  React.useEffect(() => {
    customEvents.on("Reaction", handleReactionCallback);
  }, []);

  const handleReactionCallback = (data) => {
    const payload = JSON.parse(data?.payload);
    setSelectedEmojis((prevEmojis) => [...prevEmojis, payload.emoji]);
  };

  const handleEmojiClick = () => {
    setShowEmojiMenu(!showEmojiMenu);
  };

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmojis((prevEmojis) => [...prevEmojis, emoji]);
    customEvents.send(
      "Reaction",
      JSON.stringify({ emoji }),
      PersistanceLevel.Session
    );

    // trigger custom event for emojis
  };
  const handleEmojiAnimationEnd = (emojiToRemove: string) => {
    setSelectedEmojis((prevEmojis) =>
      prevEmojis.filter((emoji) => emoji !== emojiToRemove)
    );
  };

  return (
    <ToolbarItem style={{ position: "relative" }}>
      <IconButton
        iconProps={{
          name: "celebration",
          iconSize: 28,
          tintColor: "orange",
        }}
        btnTextProps={{
          textColor: "white",
          text: "Reactions",
        }}
        onPress={() => {
          handleEmojiClick();
          console.warn("emoji triggered");
        }}
      />
      {showEmojiMenu && (
        <div className={styles.emojiMenuContainer}>
          <EmojiMenu onSelect={handleEmojiSelect} />
        </div>
      )}

      {selectedEmojis.map((emoji, index) => (
        <EmojiDisplay
          key={index}
          selectedEmoji={emoji}
          onAnimationEnd={() => handleEmojiAnimationEnd(emoji)}
        />
      ))}
    </ToolbarItem>
  );
};

/* use existing toolbar and a custom item at any point with order */
const BottomToolBarOverride = () => {
  return (
    <ToolbarPreset
      align="bottom"
      customItems={[
        {
          component: Reactions,
          order: 9,
          align: "center",
          hide: "no",
        },
      ]}
      snapPointsMinMax={[100, 300]}
    />
  );
};

const customization = customize({
  components: {
    videoCall: {
      bottomBar: BottomToolBarOverride,
    },
  },
});

export default customization;
