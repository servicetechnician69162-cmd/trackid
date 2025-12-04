import React from 'react';

// Arterburn Outdoors Ad Component
export const ArterburnAd = ({ variant = 'default' }) => {
  const handleClick = () => {
    window.open('https://www.facebook.com/ArterburnOutdoors', '_blank');
  };

  if (variant === 'compact') {
    return (
      <div className="ad-banner arterburn-ad compact" onClick={handleClick}>
        <div className="ad-label">SPONSORED</div>
        <div className="ad-content-compact">
          <div className="ad-logo-small">AO</div>
          <div className="ad-text-compact">
            <strong>Arterburn Outdoors</strong>
            <span>Authentic Nebraska Hunting Camps</span>
          </div>
          <div className="ad-cta-small">Learn More →</div>
        </div>
      </div>
    );
  }

  return (
    <div className="ad-banner arterburn-ad" onClick={handleClick}>
      <div className="ad-label">SPONSORED</div>
      <div className="ad-content">
        <div className="ad-header">
          <div className="ad-logo">
            <svg viewBox="0 0 60 60" className="ad-logo-icon">
              {/* Tent/Mountain icon */}
              <polygon points="30,8 5,52 55,52" fill="none" stroke="#2d5016" strokeWidth="3"/>
              <line x1="30" y1="8" x2="30" y2="52" stroke="#2d5016" strokeWidth="2"/>
              <polygon points="20,52 30,35 40,52" fill="#c45d2c"/>
              {/* Stars */}
              <circle cx="15" cy="20" r="1.5" fill="#2d5016"/>
              <circle cx="45" cy="18" r="1.5" fill="#2d5016"/>
              <circle cx="50" cy="28" r="1" fill="#2d5016"/>
            </svg>
          </div>
          <div className="ad-title">
            <h3>ARTERBURN OUTDOORS</h3>
            <p className="ad-tagline">Where Stories Begin Around the Campfire</p>
          </div>
        </div>
        
        <div className="ad-body">
          <div className="ad-image-placeholder">
            <div className="ad-image-content">
              <svg viewBox="0 0 200 100" className="camp-scene">
                {/* Sky gradient */}
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a2e"/>
                    <stop offset="100%" stopColor="#c45d2c"/>
                  </linearGradient>
                </defs>
                <rect width="200" height="100" fill="url(#skyGrad)"/>
                
                {/* Stars */}
                <circle cx="20" cy="15" r="1" fill="#fff"/>
                <circle cx="50" cy="25" r="0.8" fill="#fff"/>
                <circle cx="80" cy="12" r="1.2" fill="#fff"/>
                <circle cx="120" cy="20" r="0.7" fill="#fff"/>
                <circle cx="160" cy="18" r="1" fill="#fff"/>
                <circle cx="180" cy="30" r="0.6" fill="#fff"/>
                
                {/* Hills */}
                <ellipse cx="40" cy="100" rx="60" ry="30" fill="#1a3d0c"/>
                <ellipse cx="160" cy="100" rx="70" ry="35" fill="#234d12"/>
                
                {/* Wall Tent */}
                <polygon points="85,50 100,30 115,50" fill="#d4c4a8" stroke="#8b7355" strokeWidth="1"/>
                <rect x="85" y="50" width="30" height="25" fill="#c9b896" stroke="#8b7355" strokeWidth="1"/>
                <rect x="95" y="60" width="10" height="15" fill="#5a4a3a"/>
                
                {/* Campfire */}
                <ellipse cx="135" cy="73" rx="8" ry="3" fill="#3a2a1a"/>
                <polygon points="132,73 135,60 138,73" fill="#ff6b35"/>
                <polygon points="134,73 136,63 139,73" fill="#ffcc00"/>
                <polygon points="130,73 133,65 136,73" fill="#ff6b35"/>
                
                {/* Pine trees */}
                <polygon points="60,75 65,45 70,75" fill="#1a3d0c"/>
                <polygon points="155,70 160,40 165,70" fill="#234d12"/>
                <polygon points="175,72 178,50 181,72" fill="#1a3d0c"/>
              </svg>
            </div>
          </div>
          
          <div className="ad-description">
            <p><strong>Authentic Wall-Tent Hunting Camps</strong></p>
            <p>Experience Nebraska whitetail hunts the way they should be — around a campfire, under canvas, with good people and great stories.</p>
            <ul className="ad-features">
              <li>✓ Premium Wall-Tent Accommodations</li>
              <li>✓ Expert Guides & Field-to-Fork Meals</li>
              <li>✓ Media & Brand Partnership Events</li>
            </ul>
          </div>
        </div>
        
        <div className="ad-footer">
          <span className="ad-location">📍 Sidney, Nebraska</span>
          <button className="ad-cta-button">
            Visit Us on Facebook →
          </button>
        </div>
      </div>
    </div>
  );
};

// Generic Ad Slot (for future ads or AdSense)
export const AdSlot = ({ size = 'banner', id }) => {
  return (
    <div className={`ad-slot ad-slot-${size}`} data-ad-slot={id}>
      <div className="ad-slot-placeholder">
        <span>Advertisement</span>
      </div>
    </div>
  );
};

// Ad styles are in styles.css

export default ArterburnAd;
