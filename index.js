module.exports = layout;

function layout(graph, options) {
  options = options || {};
  var initPos = typeof options.initPosition === 'function' ? options.initPosition : initPosDefault;

  var api = {
    step: function noop() { return true; },

    /**
     * Gets position of a given node by its identifier. Required.
     *
     * @param {string} nodeId identifier of a node in question.
     * @returns {object} {x: number, y: number, z: number} coordinates of a node.
     */
    getNodePosition: getNodePosition
  };

  var positions = {};
  graph.forEachNode(setInitialPosition);

  return api;

  function setInitialPosition(node) {
    positions[node.id] = initPos(node);
  }

  function getNodePosition(nodeId) {
    return positions[nodeId];
  }

  function initPosDefault(node) {
    positions[node.id] = node.data;
  }
}
