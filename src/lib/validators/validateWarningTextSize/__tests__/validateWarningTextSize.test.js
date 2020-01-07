import parse from 'json-to-ast';

import validateWarningTextSize from '../index';

import { json2, json4, errors1 } from '../../../fixtures';
import mainPage from '../../../fixtures/mainPage';

test('returns empty array', () => {
  const ast1 = parse(mainPage);
  const ast2 = parse(json2);

  expect(validateWarningTextSize(ast1)).toEqual([]);
  expect(validateWarningTextSize(ast2)).toEqual([]);
});

test('returns array with single error', () => {
  const ast = parse(json4);

  expect(validateWarningTextSize(ast)).toEqual(errors1);
});
