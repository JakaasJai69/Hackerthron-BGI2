import React, { useState } from 'react';

const dummyMessages = [
  { id: 1, sender: 'bot', text: 'Welcome to the AI Heritage Guide! How can I assist you today?' },
  { id: 2, sender: 'user', text: 'Tell me about the Taj Mahal.' },
  { id: 3, sender: 'bot', text: 'The Taj Mahal is a white marble mausoleum located in Agra, India, built by Mughal emperor Shah Jahan.' },
  { id: 4, sender: 'user', text: 'Thank you!' },
  { id: 5, sender: 'bot', text: 'You\'re welcome! Feel free to ask about any other heritage sites.' },
];

const HeritageGuide = () => {
  const [messages] = useState(dummyMessages);

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', color: '#00fff7', fontFamily: "'Orbitron', monospace" }}>
      <h1 style={{ textAlign: 'center', textShadow: '0 0 10px #00fff7' }}>AI Heritage Guide (Simulated)</h1>
      <div style={{
        border: '2px solid #00fff7',
        padding: '1rem',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '2rem auto',
        backgroundColor: '#121233',
        boxShadow: '0 0 20px #00fff7',
      }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: '1rem', textAlign: msg.sender === 'bot' ? 'left' : 'right' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '15px',
              backgroundColor: msg.sender === 'bot' ? '#002b36' : '#ff007f',
              color: msg.sender === 'bot' ? '#00fff7' : '#fff',
              maxWidth: '80%',
              wordWrap: 'break-word',
              boxShadow: msg.sender === 'bot' ? '0 0 10px #00fff7' : '0 0 10px #ff007f',
              fontWeight: '600',
              fontSize: '1rem',
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeritageGuide;
