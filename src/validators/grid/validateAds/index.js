import isEmpty from 'lodash/isEmpty';
import { commercialBlocks, errorsConfig } from '../../../config';
import {
  getModificatorValue,
  getChildren,
  createError,
  getNodeName,
} from '../../../utils';

const errorData = errorsConfig.GRID.TOO_MUCH_MARKETING_BLOCKS;

export default (node) => {
  const columnsCount = getModificatorValue(node, 'm-columns');
  const fractions = getChildren(node);

  if (!fractions) return null;

  const commercialColumnsCount = fractions.reduce((result, fraction) => {
    const fractionChildren = getChildren(fraction);

    if (isEmpty(fractionChildren)) return result;

    const fractionType = getNodeName(fractionChildren[0]);

    if (!commercialBlocks.includes(fractionType)) return result;

    const fractionWidth = Number(getModificatorValue(fraction, 'm-col'));

    return result + fractionWidth;
  }, 0);

  if (commercialColumnsCount > columnsCount / 2) {
    const error = createError(errorData, node);

    return error;
  }

  return null;
};
