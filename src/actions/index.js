import {getLetterMatchCount} from "../utils";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const letterMatchCount = getLetterMatchCount(
      guessedWord,
      getState().secretWord
    );

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {guessedWord, letterMatchCount},
    });

    if (guessedWord === getState().secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS,
      });
    }
  };
};
