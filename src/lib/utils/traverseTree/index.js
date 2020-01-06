import isArray from 'lodash/isArray';

import getNodeProperty from '../getNodeProperty';

const getChildren = (node) => {
  const children = getNodeProperty(node, 'content');

  return isArray(children) || !children ? children : [children];
};

export default (tree, callback = () => {}) => {
  const nodes = [tree];

  while (nodes.length > 0) {
    const currentNode = nodes.pop();
    const children = getChildren(currentNode);

    callback(currentNode);

    if (children) {
      children.forEach((child) => {
        nodes.push(child);
      });
    }
  }
};
