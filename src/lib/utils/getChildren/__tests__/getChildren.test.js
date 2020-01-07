import parse from 'json-to-ast';

import { json, result } from '../../../fixtures/mixedContent';

import getChildren from '../index';

test('returns children', () => {
  const node = parse(json);

  expect(getChildren(node)).toEqual(result);
});
