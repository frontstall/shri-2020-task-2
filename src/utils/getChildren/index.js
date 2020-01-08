import isArray from 'lodash/isArray';

import getNodeProperty from '../getNodeProperty';

const normalizeChildren = (children) => {
  if (!isArray(children)) {
    return [children];
  }

  return children.reduce((acc, child) => {
    if (child.type === 'Array') {
      return [...acc, ...child.children];
    }

    acc.push(child);

    return acc;
  }, []);
};

export default (node) => {
  const children = getNodeProperty(node, 'content');

  return children ? normalizeChildren(children) : children;
};
