import React from 'react';

const lessons = [
  {
    id: 1,
    title: 'Introduction to Hindi',
    content: 'Hindi is one of the official languages of India. It is written in the Devanagari script.',
  },
  {
    id: 2,
    title: 'Basic Greetings',
    content: 'Namaste (Hello), Shukriya (Thank you), Kripya (Please), Alvida (Goodbye).',
  },
  {
    id: 3,
    title: 'Numbers 1-10',
    content: 'Ek, Do, Teen, Char, Paanch, Chhah, Saat, Aath, Nau, Das.',
  },
];

const LanguageLearning = () => {
  return (
    <div>
      <h1>Language Learning Module</h1>
      <p>Learn basic phrases and vocabulary.</p>
      <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#fff8f0', padding: '1rem', borderRadius: '8px', border: '1px solid #d9cbb6' }}>
        {lessons.map((lesson) => (
          <div key={lesson.id} style={{ marginBottom: '1rem' }}>
            <h3>{lesson.title}</h3>
            <p>{lesson.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageLearning;
