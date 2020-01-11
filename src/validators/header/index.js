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
  let lastH1;
  let lastH2;
  let lastH3;

  const callback = (node) => {
    const nodeName = getNodeName(node);

    if (nodeName !== 'text') return;

    const headerType = getModificatorValue(node, 'type');

    if (!headerType) return;

    if (headerType === 'h1' && lastH1) {
      const error = createError(errorData.SEVERAL_H1, node);
      errors.push(error);
    }

    if (headerType === 'h1' && lastH2) {
      const error = createError(errorData.INVALID_H2_POSITION, lastH2);
      errors.push(error);
    }

    if (headerType === 'h2' && lastH3) {
      const error = createError(errorData.INVALID_H3_POSITION, lastH3);
      errors.push(error);
    }

    if (headerType === 'h1') {
      lastH1 = node;
    }

    if (headerType === 'h2') {
      lastH2 = node;
    }

    if (headerType === 'h3') {
      lastH3 = node;
    }
  };

  traverseTree(ast, callback);

  return errors;
};
