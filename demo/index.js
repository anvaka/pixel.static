require('./download.js')(init);
var layout = require('../index.js');

function init(graph) {
  var renderer = require('ngraph.pixel')(graph, {
    createLayout: layout,
    initPosition: mapToXYZ
  });

  graph.forEachNode(setNodeSize);

  function setNodeSize(node) {
    var nodeUI = renderer.getNode(node.id);
    nodeUI.size = 100; // update size
  }
}

function mapToXYZ(node) {
  return {
    x: node.data.x,
    y: node.data.y,
    z: node.data.z
  };
}
