import get from 'lodash/get';

import getNodeProperty from '../getNodeProperty';

export default (node, modificatorName) => {
  const modificators = getNodeProperty(node, 'mods').children;
  const modificator = modificators.find(
    (mod) => get(mod, ['key', 'value']) === modificatorName,
  );

  return get(modificator, ['value', 'value']);
};
