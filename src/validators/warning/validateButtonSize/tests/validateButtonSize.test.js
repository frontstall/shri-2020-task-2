import parse from 'json-to-ast';

import validateButtonSize from '../index';

import { correct, wrong, error } from './fixtures';

test('no errors should be found', () => {
  const ast1 = parse(correct);

  expect(validateButtonSize(ast1)).toBeNull();
});

test('error found', () => {
  const ast = parse(wrong);

  expect(validateButtonSize(ast)).toEqual(error);
});
