'use strict';

let paper = Snap(800, 400),
bodyX = 70,
bodyY = 100,
bodyH = 50,
bodyW = 70,
towerX = bodyX + (bodyH / 2),
towerY = bodyY + (bodyW / 2),
style = {
  fill: 'transparent',
  stroke: '#222',
  strokeWidth: 1
},
body = paper
  .rect(bodyX, bodyY, bodyH, bodyW)
  .attr(style),
head = paper
  .circle(towerX, towerY, 10)
  .attr(style),
gun = paper
  .path(`M${towerX},${towerY - 10}L${towerX},${towerY - 20}`)
  .attr(style),
tower = paper.g(head, gun),
tank = paper.g(body, tower)

let i = 0;

// setInterval(() => {
//   i += 1;
//   tank.transform(`t${i}r${i}`);
//   if (i === 360) {
//     i = 0;
//   }
// }, 1)
  // .drag(function(dx) {
  //   console.log(dx);
    // this.transform(`r${dx/10}`);
  // })
