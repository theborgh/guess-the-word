import checkPropTypes from 'check-prop-types';

export const findTagsWithTestAttribute = (wrapper, attributeValue) => wrapper.find(`[data-test='${attributeValue}']`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
}