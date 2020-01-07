// prettier-ignore
import {
  getNodes,
  getNodeName,
  traverseTree,
  createError,
} from '../../utils';
import { errorsConfig } from '../../config';

const errorData = errorsConfig.WARNING.INVALID_BUTTON_POSITION;

const validateWarning = (warning) => {
  let beforePlaceholder = true;
  let error = null;

  const callback = (node) => {
    const nodeName = getNodeName(node);

    if (nodeName === 'placeholder') {
      beforePlaceholder = false;
    }

    if (nodeName === 'button' && beforePlaceholder) {
      error = createError(errorData, node);
    }
  };

  traverseTree(warning, callback);

  return error;
};

export default (ast) => {
  const errors = [];
  const warnings = getNodes(ast, 'warning');

  warnings.forEach((warning) => {
    const error = validateWarning(warning);
    if (error) {
      errors.push(error);
    }
  });

  return errors;
};
