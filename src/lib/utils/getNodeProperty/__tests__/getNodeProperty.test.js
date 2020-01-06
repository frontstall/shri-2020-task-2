import parse from 'json-to-ast';

import getNodeProperty from '../index';
import { array, json, object } from '../fixtures/fixtures';

const ast = parse(json);

test('returns literal type property', () => {
  expect(getNodeProperty(ast, 'block')).toBe('warning');
});

test('returns array type property', () => {
  expect(getNodeProperty(ast, 'content')).toEqual(array);
});

test('returns object type property', () => {
  expect(getNodeProperty(ast, 'mods')).toEqual(object);
});
