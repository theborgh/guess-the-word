import {getLetterMatchCount} from "./";

describe("getLetterMatchCount", () => {
  const secretWord = "party";

  it("returns 0 on no matching letters", () => {
    expect(getLetterMatchCount("bones", secretWord)).toBe(0);
  });

  it("returns the correct count on 3 matching letters", () => {
    expect(getLetterMatchCount("train", secretWord)).toBe(3);
  });

  it("returns the correct count with duplicate letters in the guess", () => {
    expect(getLetterMatchCount("parma", secretWord)).toBe(3);
  });
});
