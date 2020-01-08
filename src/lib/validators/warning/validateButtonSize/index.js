import isEmpty from 'lodash/isEmpty';

import { getNodes, getModificatorValue, createError } from '../../../utils';
import { errorsConfig, buttonSizes } from '../../../config';

const errorData = errorsConfig.WARNING.INVALID_BUTTON_SIZE;

export default (warning) => {
  const textBlocks = getNodes(warning, 'text');

  if (isEmpty(textBlocks)) return null;

  const textSize = getModificatorValue(textBlocks[0], 'size');
  const standartButtonSize = buttonSizes[textSize];
  const buttons = getNodes(warning, 'button');

  if (isEmpty(buttons)) return null;

  const button = buttons[0];
  const buttonSize = getModificatorValue(button, 'size');

  if (buttonSize !== standartButtonSize) {
    const error = createError(errorData, button);
    return error;
  }

  return null;
};
