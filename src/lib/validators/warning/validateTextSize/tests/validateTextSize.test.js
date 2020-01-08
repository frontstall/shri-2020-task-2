import parse from 'json-to-ast';

import validateTextSize from '../index';

import { correct, wrong, error } from './fixtures';

test('returns null', () => {
  const ast = parse(correct);

  expect(validateTextSize(ast)).toBeNull();
});

test('returns error', () => {
  const ast = parse(wrong);

  expect(validateTextSize(ast)).toEqual(error);
});
