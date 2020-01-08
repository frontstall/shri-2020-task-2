import isEmpty from 'lodash/isEmpty';

import { traverseTree, getNodeName } from '../../utils';

import validateButtonPosition from './validateButtonPosition';
import validateButtonSize from './validateButtonSize';
import validateTextSize from './validateTextSize';

const validators = [
  validateButtonPosition,
  validateButtonSize,
  validateTextSize,
];

const validate = (ast) => {
  const errors = [];
  const callback = (node) => {
    const nodeName = getNodeName(node);

    if (nodeName !== 'warning') return;

    const nodeErrors = validators.reduce((acc, validateWarning) => {
      const error = validateWarning(node);

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

export default validate;
