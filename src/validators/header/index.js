import {
  getNodeName,
  getModificatorValue,
  createError,
  traverseTree,
} from '../../utils';
import { errorsConfig } from '../../config';

const errorData = errorsConfig.TEXT;

export default (ast) => {
  const errors = [];
  let afterH1 = false;
  let afterH2 = false;
  let afterH3 = false;

  const callback = (node) => {
    const nodeName = getNodeName(node);

    if (nodeName !== 'text') return;

    const headerType = getModificatorValue(node, 'type');

    if (!headerType) return;

    if (headerType === 'h1' && afterH1) {
      const error = createError(errorData.SEVERAL_H1, node);
      errors.push(error);
    }

    if (headerType === 'h1' && afterH2) {
      const error = createError(errorData.INVALID_H2_POSITION, node);
      errors.push(error);
    }

    if (headerType === 'h2' && afterH3) {
      const error = createError(errorData.INVALID_H3_POSITION, node);
      errors.push(error);
    }

    if (headerType === 'h1') {
      afterH1 = true;
    }

    if (headerType === 'h2') {
      afterH2 = true;
    }

    if (headerType === 'h3') {
      afterH3 = true;
    }
  };

  traverseTree(ast, callback);

  return errors;
};
