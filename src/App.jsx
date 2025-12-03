import React, { useState, useRef, useEffect } from 'react';
import { animals, getAnimalList, searchAnimals } from './data/animals';
import Header from './components/Header';
import CaptureSection from './components/CaptureSection';
import ResultsSection from './components/ResultsSection';
import LibrarySection from './components/LibrarySection';
import HistorySection from './components/HistorySection';
import Navigation from './components/Navigation';

function App() {
  const [activeTab, setActiveTab] = useState('identify');
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('trackid-history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [location, setLocation] = useState(null);

  // Get user location on mount
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            // Reverse geocode to get state/region
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`
            );
            const data = await response.json();
            setLocation({
              state: data.address?.state,
              region: data.address?.country || 'North America'
            });
          } catch {
            setLocation({ region: 'North America' });
          }
        },
        () => {
          setLocation({ region: 'North America' });
        }
      );
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem('trackid-history', JSON.stringify(history));
  }, [history]);

  const handleImageCapture = (imageData) => {
    setImage(imageData);
    setResult(null);
    setError(null);
  };

  const handleIdentify = async () => {
    if (!image) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          image,
          location 
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to identify track');
      }
      
      // Get animal details from our database
      const animalKey = data.animal?.toLowerCase();
      const animalData = animals[animalKey];
      
      const resultWithDetails = {
        ...data,
        animalDetails: animalData || null,
        timestamp: new Date().toISOString(),
        imagePreview: image
      };
      
      setResult(resultWithDetails);
      
      // Add to history
      setHistory(prev => [resultWithDetails, ...prev.slice(0, 19)]);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setImage(null);
    setResult(null);
    setError(null);
  };

  const handleHistoryClick = (item) => {
    setImage(item.imagePreview);
    setResult(item);
    setActiveTab('identify');
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleAnimalClick = (animal) => {
    setResult({
      animal: animal.name.toLowerCase(),
      animalDetails: animal,
      confidence: null,
      reasoning: null,
      fromLibrary: true
    });
    setActiveTab('identify');
  };

  return (
    <div className="app">
      <Header location={location} />
      
      <main className="main">
        {activeTab === 'identify' && (
          <>
            <CaptureSection
              image={image}
              onCapture={handleImageCapture}
              onClear={handleClear}
              onIdentify={handleIdentify}
              isLoading={isLoading}
            />
            
            {isLoading && (
              <div className="loading">
                <div className="loading-spinner"></div>
                <span className="loading-text">Analyzing track...</span>
              </div>
            )}
            
            {error && (
              <div className="error animate-in">
                <div className="error-icon">⚠️</div>
                <p className="error-message">{error}</p>
                <button className="btn btn-secondary" onClick={handleClear}>
                  Try Again
                </button>
              </div>
            )}
            
            {result && !isLoading && (
              <ResultsSection result={result} />
            )}
            
            {history.length > 0 && !result && !isLoading && (
              <HistorySection 
                history={history} 
                onItemClick={handleHistoryClick}
                onClear={handleClearHistory}
              />
            )}
          </>
        )}
        
        {activeTab === 'library' && (
          <LibrarySection 
            animals={getAnimalList()} 
            onAnimalClick={handleAnimalClick}
          />
        )}
        
        {activeTab === 'history' && (
          <HistorySection 
            history={history} 
            onItemClick={handleHistoryClick}
            onClear={handleClearHistory}
            fullView
          />
        )}
      </main>
      
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
