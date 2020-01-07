import getLocation from '../getLocation';

export default ({ code, error }, node) => {
  const location = getLocation(node);

  return {
    code,
    error,
    location,
  };
};
