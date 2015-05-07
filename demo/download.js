module.exports = download;
var graph = require('ngraph.graph')({ uniqueLinkId: false });

function download(cb) {
  http('405.pos', positions);

  function positions(err, pos) {
    for (var i = 0; i < pos.length; i += 4) {
      var nodeId = i / 4;
      var p = {
        x: pos[i + 0],
        y: pos[i + 1],
        z: pos[i + 2],
        t: pos[i + 3]
      };
      graph.addNode(nodeId, p);
    }
    cb(graph);
  }
}

function http(url, cb) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = "arraybuffer";
  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      // Success!
      var data = new Int32Array(request.response);
      cb(null, data);
    } else {
      // We reached our target server, but it returned an error
      cb(request.status);
    }
  };

  request.send();
};
