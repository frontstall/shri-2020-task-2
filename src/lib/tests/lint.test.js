import lint from '../lint';
import { json, result } from './fixture';

test('returns array of errors', () => {
  expect(lint(json)).toEqual(result);
});
