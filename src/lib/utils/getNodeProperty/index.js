import get from 'lodash/get';

export default (node, propertyName) => {
  const { children } = node;

  const property = children.find(
    (child) => get(child, ['key', 'value']) === propertyName,
  );

  const propertyType = get(property, ['value', 'type']);

  return propertyType === 'Literal'
    ? get(property, ['value', 'value'])
    : get(property, ['value', 'children']);
};
