import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Digital Museum',
    description: 'Explore artifacts and cultural exhibits.',
    link: '/museum',
    img: '/assets/images/museum-placeholder.jpg',
  },
  {
    title: 'AI Heritage Guide',
    description: 'Simulated chatbot for cultural guidance.',
    link: '/heritage-guide',
    img: '/assets/images/heritage-guide-placeholder.jpg',
  },
  {
    title: 'Gamified Learning',
    description: 'Quizzes and storytelling games.',
    link: '/quiz-game',
    img: '/assets/images/quiz-game-placeholder.jpg',
  },
  {
    title: 'Language Learning',
    description: 'Basic language lessons.',
    link: '/language-learning',
    img: '/assets/images/language-learning-placeholder.jpg',
  },
  {
    title: 'Cultural Map',
    description: 'Interactive map of India\'s culture.',
    link: '/cultural-map',
    img: '/assets/images/cultural-map-placeholder.jpg',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Swarn Sanskriti</h1>
      <p>Preserving and promoting India&apos;s rich cultural heritage.</p>
      <div className="home-cards">
        {features.map((feature) => (
          <div key={feature.title} className="card" onClick={() => navigate(feature.link)} role="button" tabIndex={0} onKeyPress={() => navigate(feature.link)}>
            <img src={feature.img} alt={`${feature.title} placeholder`} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
