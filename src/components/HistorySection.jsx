import React from 'react';

function HistorySection({ history, onItemClick, onClear, fullView = false }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  if (history.length === 0) {
    return (
      <div className="history-section" style={{ 
        textAlign: 'center', 
        padding: '3rem',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>📜</div>
        <p>No scans yet. Take a photo of an animal track to get started!</p>
      </div>
    );
  }

  if (fullView) {
    return (
      <div className="history-section">
        <div className="history-header">
          <h3>Scan History</h3>
          <button className="history-clear" onClick={onClear}>
            Clear All
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {history.map((item, index) => (
            <div 
              key={index}
              className="results animate-in"
              style={{ cursor: 'pointer', animationDelay: `${index * 0.05}s` }}
              onClick={() => onItemClick(item)}
            >
              <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
                <img 
                  src={item.imagePreview} 
                  alt="Track"
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    textTransform: 'capitalize',
                    color: 'var(--accent)',
                    marginBottom: '0.25rem'
                  }}>
                    {item.animalDetails?.name || item.animal}
                  </h4>
                  <div style={{ 
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem'
                  }}>
                    {formatDate(item.timestamp)}
                  </div>
                  {item.confidence !== null && (
                    <span className={`confidence-badge ${
                      item.confidence >= 70 ? 'high' : 
                      item.confidence >= 40 ? 'medium' : 'low'
                    }`} style={{ fontSize: '0.75rem' }}>
                      {item.confidence}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="history-section">
      <div className="history-header">
        <h3>Recent Scans</h3>
        <button className="history-clear" onClick={onClear}>
          Clear
        </button>
      </div>
      
      <div className="history-list">
        {history.slice(0, 10).map((item, index) => (
          <div 
            key={index}
            className="history-item"
            onClick={() => onItemClick(item)}
          >
            <img 
              src={item.imagePreview} 
              alt="Track thumbnail"
              className="history-thumb"
            />
            <div className="history-info">
              <div className="history-name">
                {item.animalDetails?.name || item.animal}
              </div>
              <div className="history-date">
                {formatDate(item.timestamp)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistorySection;
