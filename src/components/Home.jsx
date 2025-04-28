import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Digital Museum',
    description: 'Explore artifacts and cultural exhibits with immersive experiences that bring history to life.',
    link: '/museum',
    img: '/assets/images/museum-placeholder.jpg',
  },
  {
    title: 'AI Heritage Guide',
    description: 'Chat with an AI to learn about India\'s rich cultural heritage, traditions, and stories.',
    link: '/heritage-guide',
    img: '/assets/images/heritage-guide-placeholder.jpg',
  },
  {
    title: 'Gamified Learning',
    description: 'Engage with quizzes and storytelling games to deepen your cultural knowledge.',
    link: '/quiz-game',
    img: '/assets/images/quiz-game-placeholder.jpg',
  },
  {
    title: 'Language Learning',
    description: 'Learn basic phrases and scripts of Indian languages through interactive lessons.',
    link: '/language-learning',
    img: '/assets/images/language-learning-placeholder.jpg',
  },
  {
    title: 'Cultural Map',
    description: 'Discover the diverse regions and vibrant traditions of India through an interactive map.',
    link: '/cultural-map',
    img: '/assets/images/cultural-map-placeholder.jpg',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/assets/images/futuristic-background-placeholder.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#00fff7',
        fontFamily: "'Orbitron', monospace",
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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

      <h1 style={{ textShadow: '0 0 15px #00fff7', marginBottom: '2rem' }}>
        Welcome to Swarn Sanskriti
      </h1>
      <div style={{ maxWidth: '1000px', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
        {features.map((feature) => (
          <div
            key={feature.title}
            onClick={() => navigate(feature.link)}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigate(feature.link)}
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
        ))}
      </div>
    </div>
  );
};

export default Home;
