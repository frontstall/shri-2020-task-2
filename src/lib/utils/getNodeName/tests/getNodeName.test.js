import parse from 'json-to-ast';

import getNodeName from '../index';
import { json1, json2 } from './fixtures';

test('get name of a block', () => {
  expect(getNodeName(parse(json1))).toBe('theme');
});

test('get name of an element', () => {
  expect(getNodeName(parse(json2))).toBe('warning__content');
});
