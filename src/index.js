import lint from './lib/lint';

const scope = typeof window === 'undefined' ? global : window;

scope.lint = lint;
