import React from "react";
import {shallow} from "enzyme";
import {findTagsWithTestAttribute, storeFactory} from "../test/testUtils";
import Input from "./Input";

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

describe("State update", () => {});
