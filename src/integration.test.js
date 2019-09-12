import {storeFactory} from "../test/testUtils";
import {guessWord} from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const wrongGuess = "train";

  describe("No guessed words", () => {
    let store;
    const initialState = {secretWord};
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(wrongGuess));
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: wrongGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(store.getState()).toEqual(expectedState);
    });

    it("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };

      expect(store.getState()).toEqual(expectedState);
    });
  });

  describe("Some guessed words", () => {
    const guessedWords = [
      {
        guessedWord: "agile",
        letterMatchCount: 1,
      },
    ];

    const initialState = {guessedWords, secretWord};
    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(wrongGuess));
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {guessedWord: wrongGuess, letterMatchCount: 3},
        ],
      };

      expect(store.getState()).toEqual(expectedState);
    });

    it("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          {guessedWord: secretWord, letterMatchCount: 5},
        ],
      };

      expect(store.getState()).toEqual(expectedState);
    });
  });
});
