import parse from 'json-to-ast';

import validateHeaders from '../index';
import { correct, wrong, error } from './fixtures';

test('try correct json', () => {
  const ast = parse(correct);

  expect(validateHeaders(ast)).toEqual([]);
});

test('try wrong json', () => {
  const ast = parse(wrong);

  expect(validateHeaders(ast)).toEqual(error);
});
