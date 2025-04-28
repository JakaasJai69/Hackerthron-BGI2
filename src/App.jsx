import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Museum from './components/Museum';
import HeritageGuide from './components/HeritageGuide';
import QuizGame from './components/QuizGame';
import LanguageLearning from './components/LanguageLearning';
import CulturalMap from './components/CulturalMap';

function App() {
  return (
    <Router>
    <div className="app-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(/assets/images/futuristic-background-placeholder.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#00fff7',
        fontFamily: "'Orbitron', monospace",
      }}
    >
      {/* Removed absolute positioned blur layer */}
      <Header />
      <div
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '60px', // padding inside blur area for header space
          paddingBottom: '60px', // padding inside blur area for footer space
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(3px)',  // increased blur from 8px to 10px
          WebkitBackdropFilter: 'blur(10px)',  // increased blur from 8px to 10px
          borderRadius: '12px',
          position: 'relative',
          zIndex: 1,
          boxSizing: 'border-box',
        }}
      >
        <main style={{ position: 'relative', zIndex: 2, width: '95%', marginLeft: 'auto', marginRight: 'auto', padding: 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/museum" element={<Museum />} />
            <Route path="/heritage-guide" element={<HeritageGuide />} />
            <Route path="/quiz-game" element={<QuizGame />} />
            <Route path="/language-learning" element={<LanguageLearning />} />
            <Route path="/cultural-map" element={<CulturalMap />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
