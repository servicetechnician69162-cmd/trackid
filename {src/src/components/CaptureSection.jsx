import React, { useRef } from 'react';

function CaptureSection({ image, onCapture, onClear, onIdentify, isLoading }) {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onCapture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBoxClick = () => {
    if (!image) {
      // On mobile, show camera option first
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        cameraInputRef.current?.click();
      } else {
        fileInputRef.current?.click();
      }
    }
  };

  return (
    <section className="capture-section">
      <div 
        className={`capture-box ${image ? 'has-image' : ''}`}
        onClick={handleBoxClick}
      >
        {image ? (
          <img src={image} alt="Captured track" className="preview-image" />
        ) : (
          <>
            <div className="capture-icon">📷</div>
            <div className="capture-text">
              <strong>Capture a Track</strong>
              Tap to take a photo or upload an image
            </div>
          </>
        )}
      </div>

      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden-input"
      />
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden-input"
      />

      <div className="button-group">
        {image ? (
          <>
            <button 
              className="btn btn-ghost"
              onClick={onClear}
            >
              ✕ Clear
            </button>
            <button 
              className="btn btn-primary"
              onClick={onIdentify}
              disabled={isLoading}
            >
              {isLoading ? 'Analyzing...' : '🔍 Identify Track'}
            </button>
          </>
        ) : (
          <>
            <button 
              className="btn btn-secondary"
              onClick={() => cameraInputRef.current?.click()}
            >
              📷 Camera
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => fileInputRef.current?.click()}
            >
              📁 Upload
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default CaptureSection;
