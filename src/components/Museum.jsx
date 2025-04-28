import React from 'react';

const artifacts = [
  {
    id: 1,
    name: 'Ancient Sculpture',
    description: 'A beautiful ancient sculpture from India\'s rich heritage.',
    img: '/assets/images/artifact1.jpg',
  },
  {
    id: 2,
    name: 'Traditional Painting',
    description: 'A traditional painting showcasing cultural motifs.',
    img: '/assets/images/artifact2.jpg',
  },
  {
    id: 3,
    name: 'Historic Pottery',
    description: 'Pottery artifacts from ancient Indian civilizations.',
    img: '/assets/images/artifact3.jpg',
  },
];

const Museum = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem', color: '#00fff7', fontFamily: "'Orbitron', monospace" }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', textShadow: '0 0 15px #00fff7' }}>Digital Museum</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', textShadow: '0 0 8px #00fff7' }}>Explore the rich cultural artifacts of India.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {artifacts.map((artifact) => (
          <div
            key={artifact.id}
            style={{
              width: '280px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1rem',
              boxSizing: 'border-box',
              backgroundColor: '#121233',
              borderRadius: '12px',
              boxShadow: '0 0 20px #00fff7',
              cursor: 'default',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 30px #ff00ff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 20px #00fff7';
            }}
          >
            <img
              src={artifact.img}
              alt={artifact.name}
              style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', textShadow: '0 0 10px #00fff7' }}>{artifact.name}</h3>
            <p style={{ margin: 0, textShadow: '0 0 6px #00fff7' }}>{artifact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Museum;
