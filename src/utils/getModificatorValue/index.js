import get from 'lodash/get';
import find from 'lodash/find';

import getNodeProperty from '../getNodeProperty';

const isBlock = (node) => getNodeProperty(node, 'elem') === undefined;

export default (node, modificatorName) => {
  const key = isBlock(node) ? 'mods' : 'elemMods';
  const modificators = get(getNodeProperty(node, key), 'children');
  const modificator = find(
    modificators,
    (mod) => get(mod, ['key', 'value']) === modificatorName,
  );

  return get(modificator, ['value', 'value']);
};
