import parse from 'json-to-ast';

import getModificatorValue from '../index';

import { json1 } from '../../../fixtures';

const node = parse(json1);

test('returns value', () => {
  expect(getModificatorValue(node, 'size')).toBe('l');
  expect(getModificatorValue(node, 'space')).toBe('xl');
});

test('returns undefined', () => {
  expect(getModificatorValue(node, 'unknownMod')).toBeUndefined();
});
