import React from 'react';

const FeatureTile = ({ feature, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
      style={{
        backgroundImage: `url(${feature.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '220px',
        minHeight: '260px',
        borderRadius: '12px',
        boxShadow: '0 0 15px #00fff7',
        cursor: 'pointer',
        color: '#00fff7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '1rem',
        textShadow: '0 0 8px #000',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 0 25px #ff00ff';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 0 15px #00fff7';
      }}
    >
      <h3 style={{ margin: 0 }}>{feature.title}</h3>
      <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '6px', padding: '0.25rem' }}>
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureTile;
