import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let contents; 
  if (props.guessedWords.length === 0) {
    contents = <span data-test='guess-instructions'>Type your guess!</span>;
  } else {
    console.log(props.guessedWords)
    const guessedWordsRows = props.guessedWords.map(
      (word, index) => (
        <tr data-test="guessed-word" key={index} >
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      )
    )
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th><th>Matching letters</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div data-test='component-guessedwords'>
      {contents}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;