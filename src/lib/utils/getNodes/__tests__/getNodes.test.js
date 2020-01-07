import parse from 'json-to-ast';

import { json2, texts } from '../../../fixtures';
import getNodes from '../index';

const ast = parse(json2);

test('return empty array', () => {
  expect(getNodes(ast, 'someNode')).toEqual([]);
});

test('return list of nodes', () => {
  expect(getNodes(ast, 'text')).toEqual(texts);
});
