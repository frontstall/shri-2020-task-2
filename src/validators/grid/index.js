import validate from '../../utils/validate';
import validateAds from './validateAds';

const validators = [validateAds];

export default (ast) => validate(ast, validators, 'grid');
