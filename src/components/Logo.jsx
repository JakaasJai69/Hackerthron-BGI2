import React from 'react';

const Logo = () => {
  return (
    <img
      src="/assets/images/futuristic-logo-placeholder.jpg"
      alt="Swarn Sanskriti Logo"
      style={{
        width: '250px',
        height: '250px',
        marginBottom: '2rem',
        border: '4px solid #00fff7',
        borderRadius: '50%',
        filter: 'drop-shadow(0 0 15px #00fff7)',
        objectFit: 'cover',
      }}
    />
  );
};

export default Logo;
