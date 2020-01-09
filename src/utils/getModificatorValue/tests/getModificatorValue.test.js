import parse from 'json-to-ast';

import getModificatorValue from '../index';

import { block, element } from './fixtures';

describe('get blocks modificator', () => {
  const node = parse(block);

  test('returns value', () => {
    expect(getModificatorValue(node, 'size')).toBe('l');
    expect(getModificatorValue(node, 'space')).toBe('xl');
  });

  test('returns undefined', () => {
    expect(getModificatorValue(node, 'unknownMod')).toBeUndefined();
  });
});

describe('get elements modificator', () => {
  const node = parse(element);

  test('returns value', () => {
    expect(getModificatorValue(node, 'size')).toBe('l');
    expect(getModificatorValue(node, 'space')).toBe('xl');
  });

  test('returns undefined', () => {
    expect(getModificatorValue(node, 'unknownMod')).toBeUndefined();
  });
});
