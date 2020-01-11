import validate from '../../utils/validate';
// import validateButtonPosition from './validateButtonPosition';
import validateButtonSize from './validateButtonSize';
import validateTextSize from './validateTextSize';
// import validatePlaceholderSize from './validatePlaceholderSize';

const validators = [
  // validateButtonPosition,
  validateButtonSize,
  validateTextSize,
  // validatePlaceholderSize,
];

export default (ast) => validate(ast, validators, 'warning');
