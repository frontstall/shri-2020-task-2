import parse from 'json-to-ast';

import getLocation from '../index';

import { json4 } from '../../../fixtures';

const node = parse(json4);
const result = {
  start: {
    column: 1,
    line: 1,
  },
  end: {
    column: 2,
    line: 22,
  },
};

test('returns location of a node', () => {
  expect(getLocation(node)).toEqual(result);
});
