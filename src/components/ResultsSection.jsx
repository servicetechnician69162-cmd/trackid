import React from 'react';

function ResultsSection({ result }) {
  const { animal, confidence, reasoning, alternates, animalDetails, fromLibrary } = result;
  
  const getConfidenceClass = (conf) => {
    if (conf >= 70) return 'high';
    if (conf >= 40) return 'medium';
    return 'low';
  };

  return (
    <div className="results animate-in">
      <div className="result-header">
        <h2>{fromLibrary ? 'Animal Info' : 'Identification'}</h2>
        {confidence !== null && (
          <span className={`confidence-badge ${getConfidenceClass(confidence)}`}>
            {confidence}% confident
          </span>
        )}
      </div>
      
      <div className="animal-card">
        {animalDetails ? (
          <>
            <img 
              src={animalDetails.image} 
              alt={animalDetails.name}
              className="animal-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
              }}
            />
            
            <h3 className="animal-name">{animalDetails.name}</h3>
            <p className="scientific-name">{animalDetails.scientificName}</p>
            <span className="animal-category">{animalDetails.category}</span>
            
            {reasoning && (
              <div className="reasoning">
                <div className="reasoning-label">Why this track?</div>
                <p>{reasoning}</p>
              </div>
            )}
            
            <div className="info-sections">
              <div className="info-section">
                <h4>📝 Description</h4>
                <p>{animalDetails.description}</p>
              </div>
              
              <div className="info-section">
                <h4>🐾 Track Details</h4>
                <p>{animalDetails.trackDescription}</p>
              </div>
              
              <div className="info-section">
                <h4>🌲 Habitat</h4>
                <p>{animalDetails.habitat}</p>
              </div>
              
              <div className="info-section">
                <h4>🗺️ Range</h4>
                <p>{animalDetails.range}</p>
              </div>
              
              <div className="info-section">
                <h4>🍽️ Diet</h4>
                <p>{animalDetails.diet}</p>
              </div>
              
              <div className="info-section">
                <h4>🦌 Behavior</h4>
                <p>{animalDetails.behavior}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="animal-name" style={{ textTransform: 'capitalize' }}>
              {animal}
            </h3>
            
            {reasoning && (
              <div className="reasoning">
                <div className="reasoning-label">Analysis</div>
                <p>{reasoning}</p>
              </div>
            )}
            
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-md)' }}>
              This animal is not yet in our database. We're constantly adding new species!
            </p>
          </>
        )}
        
        {alternates && alternates.length > 0 && (
          <div className="alternates">
            <h3>Other Possibilities</h3>
            <div className="alternate-list">
              {alternates.map((alt, index) => (
                <div key={index} className="alternate-item">
                  <span className="alternate-name" style={{ textTransform: 'capitalize' }}>
                    {alt.name}
                  </span>
                  <span className="alternate-confidence">{alt.confidence}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsSection;
