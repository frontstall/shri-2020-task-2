import parse from 'json-to-ast';

import getLocation from '../index';

import { json, result } from './fixtures';

test('returns location of a node', () => {
  const node = parse(json);

  expect(getLocation(node)).toEqual(result);
});
