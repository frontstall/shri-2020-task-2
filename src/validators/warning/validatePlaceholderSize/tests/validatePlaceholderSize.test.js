import parse from 'json-to-ast';

import validatePlaceholderSize from '../index';

import { correct, wrong, error } from './fixtures';

test('returns null', () => {
  const ast = parse(correct);

  expect(validatePlaceholderSize(ast)).toBeNull();
});

test('returns error', () => {
  const ast = parse(wrong);

  expect(validatePlaceholderSize(ast)).toEqual(error);
});
