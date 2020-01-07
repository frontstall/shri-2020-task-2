import parse from 'json-to-ast';

import { json1, json2, json3 } from '../../../fixtures';

import traverseTree from '../index';

let nodesCount = 0;

const callback = () => {
  nodesCount += 1;
};

beforeEach(() => {
  nodesCount = 0;
});

test('traverse plain object', () => {
  const ast = parse(json1);

  traverseTree(ast, callback);

  expect(nodesCount).toBe(1);
});

test('traverse nested object', () => {
  const ast = parse(json2);

  traverseTree(ast, callback);

  expect(nodesCount).toBe(3);
});

test('traverse deep nested object', () => {
  const ast = parse(json3);

  traverseTree(ast, callback);

  expect(nodesCount).toBe(10);
});
