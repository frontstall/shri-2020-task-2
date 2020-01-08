import isEmpty from 'lodash/isEmpty';

import { getNodes, getModificatorValue, createError } from '../../../utils';
import { errorsConfig, placeholderSizes } from '../../../config';

const errorData = errorsConfig.WARNING.INVALID_PLACEHOLDER_SIZE;

export default (warning) => {
  const placeholders = getNodes(warning, 'placeholder');

  if (isEmpty(placeholders)) return null;

  const placeholder = placeholders[0];
  const placeholderSize = getModificatorValue(placeholder, 'size');

  if (!placeholderSizes.includes(placeholderSize)) {
    const error = createError(errorData, placeholder);

    return error;
  }

  return null;
};
