import {ToolbarPreset, useSpeechToText} from 'customization-api';
import React, {useEffect} from 'react';

/* use existing toolbar and a custom item at any point with order */
const BottomToolBarOverride = () => {
  const {
    getActiveSpeakerName,
    getPrevSpeakerName,
    startSpeechToText,
    stopSpeechToText,
    changeSpeakingLanguage,
    showCaptionPanel,
    showTranscriptPanel,
    isSpeechToTextOn,
    captionData,
    transcriptData,
    downloadTranscript,
  } = useSpeechToText();

  useEffect(() => {
    console.log('debugging caption', captionData);
  }, [captionData]);

  useEffect(() => {
    console.log('debugging transcript', transcriptData);
  }, [transcriptData]);

  return (
    <>
      <div style={{background: 'white', display: 'flex', flexDirection: 'row'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>STT status {isSpeechToTextOn ? 'ON' : 'OFF'}</div>

          <div>active speaker name: {getActiveSpeakerName()}</div>
          <div>prev speaker name: {getPrevSpeakerName()}</div>

          <button
            type="button"
            onClick={() => {
              startSpeechToText(['en-IN']);
              showCaptionPanel(true);
              showTranscriptPanel(true);
            }}>
            start STT
          </button>
          <br />
          <button
            onClick={() => {
              stopSpeechToText();
              showCaptionPanel(false);
              showTranscriptPanel(false);
            }}>
            stop STT
          </button>
          <br />
          <button onClick={() => changeSpeakingLanguage(['hi-IN'])}>
            change lang
          </button>
          <br />
          <button
            onClick={() => {
              downloadTranscript();
            }}>
            Download Transcript
          </button>
          <br />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>
            caption data
            {JSON.stringify(captionData)}
          </div>
          <div>
            transcript data
            {JSON.stringify(transcriptData)}
          </div>
        </div>
      </div>
      <ToolbarPreset align="bottom" snapPointsMinMax={[100, 300]} />
    </>
  );
};

const style = {
  toolbarItemStyle: {
    position: 'relative',
  },
  containerStyle: {
    padding: 10,
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
  },
};

export default BottomToolBarOverride;
