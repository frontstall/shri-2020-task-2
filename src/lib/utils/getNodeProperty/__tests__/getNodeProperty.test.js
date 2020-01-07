import parse from 'json-to-ast';

import { array, json2, object } from '../../../fixtures';
import getNodeProperty from '../index';

const ast = parse(json2);

test('returns literal type property', () => {
  expect(getNodeProperty(ast, 'block')).toBe('warning');
});

test('returns array type property', () => {
  expect(getNodeProperty(ast, 'content')).toEqual(array);
});

test('returns object type property', () => {
  expect(getNodeProperty(ast, 'mods')).toEqual(object);
});
