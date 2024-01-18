
import React from 'react';
import Quiz from './Quiz';
import questions from './Questions';

function App() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1>Quiz App</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
