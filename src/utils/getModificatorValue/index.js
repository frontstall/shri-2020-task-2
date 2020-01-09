import get from 'lodash/get';

import getNodeProperty from '../getNodeProperty';

const isBlock = (node) => getNodeProperty(node, 'elem') === undefined;

export default (node, modificatorName) => {
  const key = isBlock(node) ? 'mods' : 'elemMods';
  const modificators = getNodeProperty(node, key).children;
  const modificator = modificators.find(
    (mod) => get(mod, ['key', 'value']) === modificatorName,
  );

  return get(modificator, ['value', 'value']);
};
