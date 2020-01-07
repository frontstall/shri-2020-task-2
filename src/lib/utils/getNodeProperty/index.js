import get from 'lodash/get';

export default (node, propertyName) => {
  const { children } = node;

  const property = children.find(
    (child) => get(child, ['key', 'value']) === propertyName,
  );

  const propertyType = get(property, ['value', 'type']);

  switch (propertyType) {
    case 'Array':
      return get(property, ['value', 'children']);
    case 'Object':
      return get(property, ['value']);
    default:
      return get(property, ['value', 'value']);
  }
};
