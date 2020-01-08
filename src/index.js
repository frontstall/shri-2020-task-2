import lint from './lint';

const scope = typeof window === 'undefined' ? global : window;

scope.lint = lint;
