import parse from 'json-to-ast';

import { json, result } from './fixtures';
import getNodes from '../index';

const ast = parse(json);

test('return empty array', () => {
  expect(getNodes(ast, 'someNode')).toEqual([]);
});

test('return list of nodes', () => {
  expect(getNodes(ast, 'text')).toEqual(result);
});
