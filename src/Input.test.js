import React from "react";
import {shallow} from "enzyme";
import {findTagsWithTestAttribute, storeFactory} from "../test/testUtils";
import Input, {UnconnectedInput} from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Render", () => {
  describe("Word has not been guessed", () => {
    let wrapper;

    beforeEach(() => {
      const initialState = {success: false};
      wrapper = setup(initialState);
    });

    it("renders without errors", () => {
      expect(findTagsWithTestAttribute(wrapper, "component-input").length).toBe(
        1
      );
    });

    it("renders the input box", () => {
      expect(findTagsWithTestAttribute(wrapper, "input-box").length).toBe(1);
    });

    it("renders the submit button", () => {
      expect(findTagsWithTestAttribute(wrapper, "submit-button").length).toBe(
        1
      );
    });
  });

  describe("Word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({success: true});
    });
    it("renders without errors", () => {
      expect(findTagsWithTestAttribute(wrapper, "component-input").length).toBe(
        1
      );
    });

    it("does not render the input box", () => {
      expect(findTagsWithTestAttribute(wrapper, "input-box").length).toBe(0);
    });

    it("does not render the submit button", () => {
      expect(findTagsWithTestAttribute(wrapper, "submit-button").length).toBe(
        0
      );
    });
  });
});

describe("Redux props", () => {
  it("has the success piece of state as a prop", () => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  it("guessWord action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("guessWord action creator call", () => {
  it("calls guessWord when button is clicked", () => {
    const guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock,
    };

    const wrapper = shallow(<UnconnectedInput {...props} />);

    const submitButton = findTagsWithTestAttribute(wrapper, "submit-button");
    submitButton.simulate("click");

    expect(guessWordMock.mock.calls.length).toBe(1);
  });
});
