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
    <div>
      <h1>AI Heritage Guide (Simulated)</h1>
      <div style={{ border: '1px solid #d9cbb6', padding: '1rem', borderRadius: '8px', maxWidth: '600px', margin: 'auto', backgroundColor: '#fff8f0' }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: '1rem', textAlign: msg.sender === 'bot' ? 'left' : 'right' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '15px',
              backgroundColor: msg.sender === 'bot' ? '#d9cbb6' : '#a67c52',
              color: msg.sender === 'bot' ? '#4b3b2b' : '#fff',
              maxWidth: '80%',
              wordWrap: 'break-word',
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
