import React from 'react';
import {UploadStatus} from 'customization-api';

interface UploadIndicatorProps {
  uploadStatus: UploadStatus;
}

const UploadIndicator: React.FC<UploadIndicatorProps> = ({uploadStatus}) => {
  return (
    <div style={styles.container}>
      {uploadStatus === UploadStatus.IN_PROGRESS ? (
        <div style={styles.spinner} />
      ) : uploadStatus === UploadStatus.SUCCESS ? (
        <div style={styles.checkmark}>✓</div>
      ) : null}
    </div>
  );
};

const styles: {[key: string]: React.CSSProperties} = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    marginLeft: '5px',
  },
  spinner: {
    width: '24px',
    height: '24px',
    border: '3px solid #f3f3f3',
    borderTop: '3px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  checkmark: {
    fontSize: '22px',
    color: '#3498db',
  },
};

// Add keyframes for spinner animation
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default UploadIndicator;
