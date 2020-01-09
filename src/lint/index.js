import parse from 'json-to-ast';
import reduce from 'lodash/reduce';

import * as validators from '../validators';

export default (json) => {
  try {
    const ast = parse(json);

    return reduce(
      validators,
      (result, validate) => {
        const errors = validate(ast);

        return [...result, ...errors];
      },
      [],
    );
  } catch (error) {
    console.error('Unable to parse data. Check JSON syntax.');

    return [];
  }
};
