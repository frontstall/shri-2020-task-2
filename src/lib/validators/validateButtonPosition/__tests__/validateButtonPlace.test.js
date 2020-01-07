import parse from 'json-to-ast';

import validateButtonPosition from '../index';

import { correct, wrong } from '../../../fixtures/warningButtonPosition';
import mainPage from '../../../fixtures/mainPage';

test('returns empty array', () => {
  const ast1 = parse(mainPage);
  const ast2 = parse(correct);

  expect(validateButtonPosition(ast1)).toEqual([]);
  expect(validateButtonPosition(ast2)).toEqual([]);
});

test('returns array with single error', () => {
  const ast = parse(wrong);

  expect(validateButtonPosition(ast)).toEqual([]);
});
