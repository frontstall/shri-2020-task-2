import isEmpty from 'lodash/isEmpty';

import { traverseTree, getNodeName } from '../index';

export default (ast, validators, nodeNameToValidate) => {
  const errors = [];
  const callback = (node) => {
    const nodeName = getNodeName(node);

    if (nodeName !== nodeNameToValidate) return;

    const nodeErrors = validators.reduce((acc, validate) => {
      const error = validate(node);

      if (error) {
        acc.push(error);
      }

      return acc;
    }, []);

    if (!isEmpty(nodeErrors)) {
      errors.push(...nodeErrors);
    }
  };

  traverseTree(ast, callback);

  return errors;
};
