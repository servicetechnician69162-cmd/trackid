import React from 'react';

function Header({ location }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">🐾</div>
        <div className="brand">
          <h1>TrackID</h1>
          <span>by Arterburn Outdoors</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
