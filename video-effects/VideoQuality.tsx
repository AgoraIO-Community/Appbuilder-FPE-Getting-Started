import React, { useState, useEffect, useCallback } from "react";
import {
  useVideoQuality,
  $config,
  ScreenEncoderConfigurationPreset,
  VideoEncoderConfigurationPreset,
} from "customization-api";

const MinimizeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="9" width="20" height="2" fill="currentColor" />
  </svg>
);

const MaximizeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="9" y="0" width="2" height="20" fill="currentColor" />
    <rect x="0" y="9" width="20" height="2" fill="currentColor" />
  </svg>
);

function VideoQuality() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const {
    setVideoQuality,
    setScreenShareQuality,
    videoEncoderPresets,
    screenShareEncoderPresets,
    currentScreenShareQuality,
    currentVideoQuality,
  } = useVideoQuality();

  const toggleAccordion = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation(); // Prevent click event from affecting other elements
      setIsAccordionOpen((prev) => !prev);
    },
    [setIsAccordionOpen]
  );

  return (
    <div style={styles.accordionContainer}>
      <div style={styles.accordionHeader} onClick={toggleAccordion}>
        <h3 style={styles.label}>Video Quality Controls</h3>
        <div style={styles.iconContainer}>
          {isAccordionOpen ? <MinimizeIcon /> : <MaximizeIcon />}
        </div>
      </div>
      {isAccordionOpen && (
        <div
          style={styles.beautyContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={styles.row}>
            <label style={styles.label}>
              Video Quality:
              <select
                value={currentVideoQuality as VideoEncoderConfigurationPreset}
                onChange={(e) =>
                  setVideoQuality(
                    e.target.value as VideoEncoderConfigurationPreset
                  )
                }
                style={styles.dropdown}
              >
                {videoEncoderPresets.map((preset) => (
                  <option key={preset} value={preset}>
                    {preset}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <br />
          <div style={styles.row}>
            <label style={styles.label}>
              Screen Share Quality:
              <select
                value={
                  currentScreenShareQuality as ScreenEncoderConfigurationPreset
                }
                onChange={(e) =>
                  setScreenShareQuality(
                    e.target.value as ScreenEncoderConfigurationPreset
                  )
                }
                style={styles.dropdown}
              >
                {screenShareEncoderPresets.map((preset) => (
                  <option key={preset} value={preset}>
                    {preset}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoQuality;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "24rem",
    //backgroundColor: "#e7e0e0",
    backgroundColor: $config.CARD_LAYER_3_COLOR,
    borderRadius: "0.5rem",
    transition: "height 0.2s ease-in-out",
    userSelect: "none",
    zIndex: 999,
    left: 0,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid black",
    cursor: "pointer",
    backgroundColor: $config.CARD_LAYER_5_COLOR,
    // opacity: 0.9,
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    alignItems: "center",
  },
  headerText: {
    fontSize: "1.25rem",
    fontWeight: "600",
    fontFamily: "Source Sans Pro",
    color: $config.FONT_COLOR,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    color: $config.FONT_COLOR,
  },
  iconButton: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "16px",
    height: "16px",
    color: $config.FONT_COLOR,
  },
  infoText: {
    fontSize: "12px",
    padding: "6px 8px",
    opacity: 0.8,
    margin: "10px",
    fontFamily: "Source Sans Pro",
    border: `1px solid ${$config.INPUT_FIELD_BORDER_COLOR}`,
    borderRadius: "4px",
    backgroundColor: "antiquewhite",
  },
  bodyContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
  },
  inputContainer: {
    backgroundColor: $config.CARD_LAYER_5_COLOR,
  },
  body: {
    // flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "auto",
    height: "500px",
  },
  label: {
    fontSize: "16px",
    color: "#fff",
    display: "flex",
    gap: 5,
  },
  slider: {
    width: "100%",
    marginTop: "8px",
  },
  beautyContainer: {
    padding: 10,
  },
  accordionContainer: {
    border: `1px solid ${$config.INPUT_FIELD_BORDER_COLOR}`,
    borderRadius: "4px",
    margin: "10px 0",
  },
  accordionHeader: {
    display: "flex",
    gap: 20,
    alignItems: "center",
    padding: "10px",
    backgroundColor: "grey",
    cursor: "pointer",
  },
  dropdown: {
    backgroundColor: "grey",
  },
};
