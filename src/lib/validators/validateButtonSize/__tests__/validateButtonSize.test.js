import parse from 'json-to-ast';

import validateButtonSize from '../index';

import { correct, wrong, errors } from '../../../fixtures/buttonSize';

test('no errors should be found', () => {
  const ast1 = parse(correct);

  expect(validateButtonSize(ast1)).toEqual([]);
});

test('errors found', () => {
  const ast = parse(wrong);

  expect(validateButtonSize(ast)).toEqual(errors);
});
