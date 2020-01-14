import parse from 'json-to-ast';
import reduce from 'lodash/reduce';

import * as validators from '../validators';

export default (json) => {
  let ast;

  try {
    ast = parse(json);
  } catch (error) {
    console.error('Unable to parse data. Check JSON syntax.');

    return [];
  }

  return reduce(
    validators,
    (result, validate) => {
      let errors = [];
      try {
        errors = validate(ast);
      } catch (error) {
        console.error(error);
      }

      return [...result, ...errors];
    },
    [],
  );
};
