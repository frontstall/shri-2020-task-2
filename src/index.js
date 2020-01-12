import lint from './lint';

const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

const scope = isBrowser ? window : process;

scope.lint = lint;
