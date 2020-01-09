import parse from 'json-to-ast';

import validateAds from '../index';
import { correct, wrong, error } from './fixtures';

test('test correct', () => {
  const node = parse(correct);
  expect(validateAds(node)).toBeNull();
});

test('test wrong', () => {
  const node = parse(wrong);
  expect(validateAds(node)).toEqual(error);
});
