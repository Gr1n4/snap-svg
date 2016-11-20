'use strict';

let paper = Snap(800, 400),

style = {
  fill: '#387',
  stroke: '#fff',
  strokeWidth: 5
},

path = paper
  .path("")
  .attr({
    stroke: "#387",
    fill: "transparent",
    strokeWidth: 3
  }),
pathArray = [];

function updatePath() {
  let first = pathArray[0],
  pathString = `M${first.x},${first.y}`;
  for (let node = 1; node <= pathArray.slice(1).length; node++) {
    pathString += `T${pathArray[node].x},${pathArray[node].y}`
  }
  path.attr({
    d: pathString
  })
}

paper.click(e => {
  if (e.target.tagName === 'circle') return;
  paper
    .circle(e.offsetX, e.offsetY, 15)
    .attr(style)
    .data('i', pathArray.length)
    .mouseover(function() {
      this.stop().animate({r: 25}, 1000, mina.elastic)
    })
    .mouseout(function() {
      this.stop().animate({r: 15}, 300, mina.easeinout)
    })
    .drag(function (dx, dy, x, y) {
      this.attr({
        cx: x,
        cy: y
      })
      let currentNode = pathArray[this.data('i')];
      currentNode.x = x;
      currentNode.y = y;
      updatePath();
    }, function() {
      path.stop().animate({opacity: .2}, 200, mina.easeinout);
    }, function() {
      path.stop().animate({opacity: 1}, 200, mina.easeinout);
    })
  
  pathArray.push({
    x: e.offsetX,
    y: e.offsetY
  });
  updatePath();
});