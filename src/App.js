import React from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="container">
      <h1>Guess the word</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'bobsz', letterMatchCount: 3 },
        { guessedWord: 'bubsz', letterMatchCount: 4 },
        { guessedWord: 'byubs', letterMatchCount: 2 },
      ]} />
    </div>
  );
}

export default App;
