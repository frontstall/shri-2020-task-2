import get from 'lodash/get';
import find from 'lodash/find';

export default (node, propertyName) => {
  const children = get(node, 'children', []);

  const property = find(
    children,
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
