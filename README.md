# pixel.static

Static layout for [ngraph.pixel](https://github.com/anvaka/ngraph.pixel)

# usage

``` js
var staticLayout = require('pixel.static');

// let's create a new graph:
var graph = require('ngraph.graph')();
graph.addNode('hello', {
  x: 100, y: 0, z: 0
});
graph.addNode('world', {
  x: -100, y: 0, z: 0
});

var renderer = require('ngraph.pixel')(graph, {
  // first, set a custom layout:
  createLayout: staticLayout,

  // provide initial positions for each node:
  initPosition: getNodePosition
});

function getNodePosition(node) {
  // node is a regular ngraph.graph node
  // we can have access to its `data` or `id`, so if position is known:
  return {
    x: node.data.x,
    y: node.data.y,
    z: node.data.z
  };
}
```

[Online demo with ~49k nodes](https://anvaka.github.io/pixel.static/demo/) - [source code](https://github.com/anvaka/pixel.static/tree/master/demo)

# license

MIT
