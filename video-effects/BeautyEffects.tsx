import React, { useState, useEffect, useCallback } from "react";
import { useBeautyEffects, $config } from "customization-api";

type Level = 0 | 1 | 2;

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

const BeautyEffects = () => {
  const [beautyEffectsOn, setBeautyEffectsOn] = useState<boolean>(false);
  const [lighteningContrastLevel, setLighteningContrastLevel] =
    useState<Level>(2);
  const [lighteningLevel, setLighteningLevel] = useState<number>(0.4);
  const [smoothnessLevel, setSmoothnessLevel] = useState<number>(0.6);
  const [sharpnessLevel, setSharpnessLevel] = useState<number>(0.5);
  const [rednessLevel, setRednessLevel] = useState<number>(0.5);

  const { applyBeautyEffect, removeBeautyEffect } = useBeautyEffects();
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  useEffect(() => {
    if (beautyEffectsOn) {
      applyBeautyEffect({
        lighteningContrastLevel,
        lighteningLevel,
        smoothnessLevel,
        sharpnessLevel,
        rednessLevel,
      });
    } else {
      removeBeautyEffect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    beautyEffectsOn,
    lighteningLevel,
    smoothnessLevel,
    sharpnessLevel,
    rednessLevel,
    lighteningContrastLevel,
  ]);

  const toggleAccordion = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation(); // Prevent click event from affecting other elements
      setIsAccordionOpen((prev) => !prev);
    },
    [setIsAccordionOpen]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation(); // Prevent change event from affecting other elements

    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setBeautyEffectsOn(checked);
    } else {
      const numericValue = Number(value);

      switch (name) {
        case "lighteningContrastLevel":
          setLighteningContrastLevel(numericValue as Level);
          break;
        case "lighteningLevel":
          setLighteningLevel(numericValue);
          break;
        case "smoothnessLevel":
          setSmoothnessLevel(numericValue);
          break;
        case "sharpnessLevel":
          setSharpnessLevel(numericValue);
          break;
        case "rednessLevel":
          setRednessLevel(numericValue);
          break;
      }
    }
  }, []);

  return (
    <div style={styles.accordionContainer}>
      <div style={styles.accordionHeader} onClick={toggleAccordion}>
        <h3 style={styles.label}>Beauty Effects Controls</h3>
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
              Enable Beauty Effects
              <input
                type="checkbox"
                checked={beautyEffectsOn}
                onChange={handleChange}
              />
            </label>
          </div>
          <div style={styles.row}>
            <label style={styles.label}>
              Lightening Contrast: {lighteningContrastLevel}
              <input
                type="range"
                min="0"
                max="2"
                step="1"
                name="lighteningContrastLevel"
                value={lighteningContrastLevel}
                onChange={handleChange}
                disabled={!beautyEffectsOn}
              />
            </label>
          </div>
          <div style={styles.row}>
            <label style={styles.label}>
              Lightening: {lighteningLevel.toFixed(1)}
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                name="lighteningLevel"
                value={lighteningLevel}
                onChange={handleChange}
                disabled={!beautyEffectsOn}
              />
            </label>
          </div>
          <div style={styles.row}>
            <label style={styles.label}>
              Smoothness: {smoothnessLevel.toFixed(1)}
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                name="smoothnessLevel"
                value={smoothnessLevel}
                onChange={handleChange}
                disabled={!beautyEffectsOn}
              />
            </label>
          </div>
          <div style={styles.row}>
            <label style={styles.label}>
              Sharpness: {sharpnessLevel.toFixed(1)}
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                name="sharpnessLevel"
                value={sharpnessLevel}
                onChange={handleChange}
                disabled={!beautyEffectsOn}
              />
            </label>
          </div>
          <div style={styles.row}>
            <label style={styles.label}>
              Redness: {rednessLevel.toFixed(1)}
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                name="rednessLevel"
                value={rednessLevel}
                onChange={handleChange}
                disabled={!beautyEffectsOn}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeautyEffects;
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
