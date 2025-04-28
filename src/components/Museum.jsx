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
    <div>
      <h1>Digital Museum</h1>
      <p>Explore the rich cultural artifacts of India.</p>
      <div className="home-cards" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        {artifacts.map((artifact) => (
          <div
            key={artifact.id}
            className="card"
            style={{
              width: '280px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1rem',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={artifact.img}
              alt={artifact.name}
              style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{artifact.name}</h3>
            <p style={{ margin: 0 }}>{artifact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Museum;
