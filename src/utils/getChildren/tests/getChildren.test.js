import parse from 'json-to-ast';

import { objectJson, objectResult, arrayJson, arrayResult } from './fixtures';

import getChildren from '../index';

test('json is object', () => {
  const node = parse(objectJson);

  expect(getChildren(node)).toEqual(objectResult);
});

test('json is array', () => {
  const node = parse(arrayJson);

  expect(getChildren(node)).toEqual(arrayResult);
});
