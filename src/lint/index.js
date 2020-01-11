import parse from 'json-to-ast';
import reduce from 'lodash/reduce';

import * as validators from '../validators';

export default (json) => {
  const ast = parse(json);
  // let ast;

  // try {
  // } catch (error) {
  //   console.error('Unable to parse data. Check JSON syntax.');

  //   return [];
  // }

  return reduce(
    validators,
    (result, validate) => {
      const errors = validate(ast);

      return [...result, ...errors];
    },
    [],
  );
};
