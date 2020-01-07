import getNodeName from '../getNodeName';
import traverseTree from '../traverseTree';

export default (ast, nodeName) => {
  const result = [];
  const callback = (node) => {
    const currentNodeName = getNodeName(node);
    if (currentNodeName === nodeName) {
      result.push(node);
    }
  };

  traverseTree(ast, callback);

  return result;
};
