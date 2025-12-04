import React from 'react';

function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'identify', icon: '🔍', label: 'Identify' },
    { id: 'library', icon: '📚', label: 'Library' },
    { id: 'history', icon: '📜', label: 'History' },
  ];

  return (
    <nav className="nav-tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="nav-tab-icon">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
