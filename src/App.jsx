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
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/museum" element={<Museum />} />
            <Route path="/heritage-guide" element={<HeritageGuide />} />
            <Route path="/quiz-game" element={<QuizGame />} />
            <Route path="/language-learning" element={<LanguageLearning />} />
            <Route path="/cultural-map" element={<CulturalMap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
