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
    <div>
      <h1>Interactive Cultural Map of India</h1>
      <p>Click on a region to learn more.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setSelectedRegion(region)}
            style={{
              padding: '1rem 2rem',
              backgroundColor: selectedRegion?.id === region.id ? '#a67c52' : '#d9cbb6',
              color: selectedRegion?.id === region.id ? '#fff' : '#4b3b2b',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              minWidth: '150px',
            }}
          >
            {region.name}
          </button>
        ))}
      </div>
      {selectedRegion && (
        <div style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto', backgroundColor: '#fff8f0', padding: '1rem', borderRadius: '8px', border: '1px solid #d9cbb6' }}>
          <h3>{selectedRegion.name}</h3>
          <p>{selectedRegion.description}</p>
        </div>
      )}
    </div>
  );
};

export default CulturalMap;
