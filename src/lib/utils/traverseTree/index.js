import getChildren from '../getChildren';

export default (tree, callback = () => {}) => {
  const nodes = [tree];

  while (nodes.length > 0) {
    const currentNode = nodes.pop();
    const children = getChildren(currentNode);

    callback(currentNode);

    if (children) {
      children.forEach((child) => {
        nodes.push(child);
      });
    }
  }
};
