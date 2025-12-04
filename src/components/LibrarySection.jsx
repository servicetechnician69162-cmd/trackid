import React, { useState, useMemo } from 'react';
import { ArterburnAd } from './AdBanner';

const CATEGORIES = ['All', 'Big Game', 'Small Game', 'Predator', 'Fur-bearer', 'Domestic', 'Rodent', 'Bird'];

function LibrarySection({ animals, onAnimalClick }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAnimals = useMemo(() => {
    let filtered = animals;
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(a => a.category === activeCategory);
    }
    
    if (search) {
      const query = search.toLowerCase();
      filtered = filtered.filter(a => 
        a.name.toLowerCase().includes(query) ||
        a.scientificName.toLowerCase().includes(query)
      );
    }
    
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [animals, search, activeCategory]);

  return (
    <div className="library-section">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search animals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      <div className="filter-tabs">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="library">
        {filteredAnimals.map((animal, index) => (
          <React.Fragment key={animal.name}>
            <div 
              className="library-card"
              onClick={() => onAnimalClick(animal)}
            >
              <img 
                src={animal.image} 
                alt={animal.name}
                className="library-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x100?text=No+Image';
                }}
              />
              <div className="library-info">
                <div className="library-name">{animal.name}</div>
                <div className="library-category">{animal.category}</div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      
      {filteredAnimals.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
          No animals found matching your search.
        </div>
      )}
      
      {/* Compact Ad at bottom of library */}
      {filteredAnimals.length > 0 && (
        <ArterburnAd variant="compact" />
      )}
    </div>
  );
}

export default LibrarySection;
