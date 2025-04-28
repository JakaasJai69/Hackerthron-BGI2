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
      <div className="home-cards">
        {artifacts.map((artifact) => (
          <div key={artifact.id} className="card">
            <img src={artifact.img} alt={artifact.name} />
            <h3>{artifact.name}</h3>
            <p>{artifact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Museum;
