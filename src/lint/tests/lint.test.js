import lint from '../index';
import { json, result, json2 } from './fixture';

test('returns array of errors', () => {
  expect(lint(json)).toEqual(result);
});

test('no errors', () => {
  expect(lint(json2)).toEqual([]);
});
