import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Congrats from './Congrats';
import { findTagsWithTestAttribute } from './test/testUtils';

configure({ adapter: new Adapter() });

const createShallowAppWrapper = (props={}, state=null) => {
  const wrapper = shallow(<Congrats {...props} />);

  if (state) {
    wrapper.setState(state);
  }

return wrapper;
}

it("renders without errors", () => {
  const wrapper = createShallowAppWrapper();
  expect(findTagsWithTestAttribute(wrapper, 'component-congrats').length).toBe(1);
});

it("matches the snapshot", () => {
  expect(shallow(<Congrats />).debug()).toMatchSnapshot();
})

it("renders no text when the SUCCESS prop is FALSE", () => {
  const wrapper = createShallowAppWrapper({ success: false });
  expect(findTagsWithTestAttribute(wrapper, 'component-congrats').text()).toBe('');
});

it("renders nonempty congrats message when the SUCCESS prop is true", () => {
  const wrapper = createShallowAppWrapper({ success: true });
  expect(findTagsWithTestAttribute(wrapper, 'congrats-message').text()).not.toBe('');
});