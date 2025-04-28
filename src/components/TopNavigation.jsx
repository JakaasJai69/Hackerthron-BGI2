import React, { useState } from 'react';
import { FaHome, FaBook, FaGamepad, FaMapMarkedAlt, FaLanguage } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Language Learning', path: '/language-learning', icon: <FaLanguage /> },
  { name: 'Quiz Game', path: '/quiz-game', icon: <FaGamepad /> },
  { name: 'Heritage Guide', path: '/heritage-guide', icon: <FaBook /> },
  { name: 'Cultural Map', path: '/cultural-map', icon: <FaMapMarkedAlt /> },
];

const TopNavigation = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(10, 10, 35, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1000,
        boxShadow: '0 0 15px #ff00ff, 0 0 30px #00ffff',
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          margin: 0,
          padding: '0.5rem 1rem',
          gap: '2rem',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredIndex === index;
          return (
            <li
              key={item.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: isActive || isHovered ? '#ff00ff' : '#00ffff',
                textShadow: isActive || isHovered ? '0 0 10px #ff00ff' : '0 0 5px #00ffff',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease, text-shadow 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <Link
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                {item.name}
              </Link>
              {(isActive || isHovered) && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '3px',
                    width: '100%',
                    background: isActive ? 'linear-gradient(90deg, #ff00ff, #00ffff)' : '#ff00ff',
                    borderRadius: '2px',
                    animation: isActive ? 'underlineGlow 1.5s ease-in-out infinite' : 'none',
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
      <style>{`
        @keyframes underlineGlow {
          0%, 100% {
            box-shadow: 0 0 5px #ff00ff, 0 0 10px #00ffff;
          }
          50% {
            box-shadow: 0 0 15px #ff00ff, 0 0 20px #00ffff;
          }
        }
        /* Hide scrollbar for Webkit browsers */
        ul::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default TopNavigation;
