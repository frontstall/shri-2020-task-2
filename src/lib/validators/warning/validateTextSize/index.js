import isEmpty from 'lodash/isEmpty';

import { getNodes, getModificatorValue, createError } from '../../../utils';
import { errorsConfig } from '../../../config';

const errorData = errorsConfig.WARNING.TEXT_SIZES_SHOULD_BE_EQUAL;

export default (warning) => {
  const textBlocks = getNodes(warning, 'text');

  if (isEmpty(textBlocks)) return null;

  const standartSize = getModificatorValue(textBlocks[0], 'size');

  if (!standartSize) {
    const error = createError(errorData, warning);

    return error;
  }

  for (let i = 1; i < textBlocks.length; i += 1) {
    const size = getModificatorValue(textBlocks[i], 'size');

    if (size !== standartSize) {
      const error = createError(errorData, warning);

      return error;
    }
  }

  return null;
};
