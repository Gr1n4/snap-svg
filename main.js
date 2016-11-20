'use strict';

let paper = Snap(800, 400),

style = {
  fill: 'transparent',
  stroke: '#222',
  strokeWidth: 5
},
path = paper
  .path("M 100,100 A100,50,0,0,0,500,200")
  .attr(style);