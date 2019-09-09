import React from 'react';
import { shallow } from 'enzyme';
import { findTagsWithTestAttribute, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{
    guessedWord: 'train',
    letterMatchCount: 3 
  }]
};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }; // to avoid warning that required props are missing
  return shallow(<GuessedWords {...setupProps} />);
}

it("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it("renders without error", () => {
    const component = findTagsWithTestAttribute(wrapper, 'component-guessedwords');
    expect(component.length).toBe(1);
  });

  it("renders instructions to guess a word", () => {
    const instructions = findTagsWithTestAttribute(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are words guessed", () => {

});
