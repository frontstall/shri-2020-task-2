import parse from 'json-to-ast';
import getNodeName from '../index';

const json1 = `{
  "block": "theme"
}`;

const json2 = `{
  "block": "warning",
  "elem": "content"
}`;

test('get name of a block', () => {
  expect(getNodeName(parse(json1))).toBe('theme');
});

test('get name of an element', () => {
  expect(getNodeName(parse(json2))).toBe('warning__content');
});
