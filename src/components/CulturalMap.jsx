import React, { useState } from 'react';

const regions = [
  { id: 1, name: 'North India', description: 'Known for its rich history and monuments like the Taj Mahal.' },
  { id: 2, name: 'South India', description: 'Famous for its temples, classical dance, and cuisine.' },
  { id: 3, name: 'East India', description: 'Known for its festivals, arts, and cultural heritage.' },
  { id: 4, name: 'West India', description: 'Famous for deserts, forts, and vibrant traditions.' },
];

const CulturalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', color: '#00fff7', fontFamily: "'Orbitron', monospace" }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', textShadow: '0 0 15px #00fff7' }}>Interactive Cultural Map of India</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', textShadow: '0 0 8px #00fff7' }}>Click on a region to learn more.</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', maxWidth: '900px', margin: 'auto' }}>
        <img
          src="/assets/images/cultural-map-placeholder.jpg"
          alt="Cultural Map Placeholder"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0 0 20px #00fff7' }}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              style={{
                padding: '1rem 2rem',
                backgroundColor: selectedRegion?.id === region.id ? '#ff00ff' : '#121233',
                color: selectedRegion?.id === region.id ? '#000' : '#00fff7',
                border: '2px solid #00fff7',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '1.1rem',
                boxShadow: selectedRegion?.id === region.id ? '0 0 15px #ff00ff' : '0 0 10px #00fff7',
                transition: 'all 0.3s ease',
                minWidth: '150px',
                textAlign: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px #00fff7'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = selectedRegion?.id === region.id ? '0 0 15px #ff00ff' : '0 0 10px #00fff7'}
            >
              {region.name}
            </button>
          ))}
        </div>
        {selectedRegion && (
          <div style={{ marginTop: '2rem', backgroundColor: '#121233', padding: '1rem', borderRadius: '12px', boxShadow: '0 0 20px #00fff7', maxWidth: '600px', color: '#00fff7' }}>
            <h3 style={{ marginBottom: '1rem', textShadow: '0 0 10px #00fff7' }}>{selectedRegion.name} - Cultural Facts</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5', textShadow: '0 0 6px #00fff7' }}>
              {selectedRegion.description} This region is known for its vibrant traditions and rich cultural heritage that continues to thrive in modern times.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CulturalMap;
