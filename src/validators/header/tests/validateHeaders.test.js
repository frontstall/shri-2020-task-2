import parse from 'json-to-ast';

import validateHeaders from '../index';
// prettier-ignore
import {
  correct, wrong, error, correct1, wrong1, error1, correct2, wrong2, error2,
} from './fixtures';

describe('test several h1', () => {
  test('try correct json', () => {
    const ast = parse(correct);

    expect(validateHeaders(ast)).toEqual([]);
  });

  test('try wrong json', () => {
    const ast = parse(wrong);

    expect(validateHeaders(ast)).toEqual(error);
  });
});

describe('test h1 h2 order', () => {
  test('try correct json', () => {
    const ast = parse(correct1);

    expect(validateHeaders(ast)).toEqual([]);
  });

  test('try wrong json', () => {
    const ast = parse(wrong1);

    expect(validateHeaders(ast)).toEqual(error1);
  });
});

describe('test h2 h3 order', () => {
  test('try correct json', () => {
    const ast = parse(correct2);

    expect(validateHeaders(ast)).toEqual([]);
  });

  test('try wrong json', () => {
    const ast = parse(wrong2);

    expect(validateHeaders(ast)).toEqual(error2);
  });
});
