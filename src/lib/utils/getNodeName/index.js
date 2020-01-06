import getNodeProperty from '../getNodeProperty';

export default (node) => {
  const blockName = getNodeProperty(node, 'block');
  const elementName = getNodeProperty(node, 'elem');

  return elementName ? `${blockName}__${elementName}` : blockName;
};
