import parse from 'json-to-ast';

import validateButtonPosition from '../index';

import { correct, wrong, error } from './fixtures';

test('returns null', () => {
  const ast2 = parse(correct);

  expect(validateButtonPosition(ast2)).toBeNull();
});

test('returns error', () => {
  const ast = parse(wrong);

  expect(validateButtonPosition(ast)).toEqual(error);
});
