'use strict';
//set the food price and tip %
let foodPrice = 36.80;
let tipPercent = 0.15;
//calcultion for tip
let tipAmount = foodPrice * tipPercent;

//print out tip and food price
console.log('The tip on a $' + foodPrice.toFixed(2) + ' food bill is $' + tipAmount.toFixed(2));