import { actionTypes } from '../actions';
import successReducer from './successReducer';

it("returns false when no action is passed", () => {
  expect(successReducer(undefined, {})).toBe(false);
});

it("returns true if actionType is CORRECT_GUESS", () => {
  const state = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(state).toBe(true);
});
