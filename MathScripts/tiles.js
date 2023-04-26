'use strict';
//set the length and width
let roomLength = 50;
let roomWidth = 36;
//tiles values
let tileLength = 1;
let tileAmount = 12;
//calculation
let roomArea = roomLength * roomWidth;
let tileArea = tileLength ** 2 * tileAmount; //area per box
let boxNeed = roomArea / tileArea;
let boxNeedBuy = boxNeed * 0.1 + boxNeed; //10% more
boxNeedBuy = Math.ceil(boxNeedBuy); //round up
//output
console.log('I need ' + boxNeed + ' boxs of tiles');
console.log('I need to buy ' + boxNeedBuy + ' boxs of tiles');