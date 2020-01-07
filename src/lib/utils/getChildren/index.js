import isArray from 'lodash/isArray';

import getNodeProperty from '../getNodeProperty';

export default (node) => {
  const children = getNodeProperty(node, 'content');

  return isArray(children) || !children ? children : [children];
};
