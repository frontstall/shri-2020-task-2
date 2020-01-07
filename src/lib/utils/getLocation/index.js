import get from 'lodash/get';

export default (node) => {
  const start = get(node, ['loc', 'start']);
  const end = get(node, ['loc', 'end']);

  return {
    start: {
      line: start.line,
      column: start.column,
    },
    end: {
      line: end.line,
      column: end.column,
    },
  };
};
