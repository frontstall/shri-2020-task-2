// prettier-ignore
import {
  getNodeName,
  traverseTree,
  createError,
} from '../../../utils';
import { errorsConfig } from '../../../config';

const errorData = errorsConfig.WARNING.INVALID_BUTTON_POSITION;

export default (warning) => {
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
