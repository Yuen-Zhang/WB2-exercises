'use strict';
//set value
let peopleOnTour = 38;
let peoplePerVan = 15;
let perVanCost = 250;
//calculation
let vanNeed = peopleOnTour / peoplePerVan;
vanNeed = Math.ceil(vanNeed);
let totalVanCost = vanNeed * perVanCost;
let eachPeopleCost = totalVanCost / peopleOnTour;
//output
console.log('The cost for rent the vans is $' + totalVanCost);
console.log('The cost for each person is $' + eachPeopleCost.toFixed(2));
//$ I collect
let moneyCollect = eachPeopleCost.toFixed(2) * peopleOnTour;
console.log('I will collect $' + moneyCollect.toFixed(2));
let moneyDifference = moneyCollect.toFixed(2) - totalVanCost;
console.log('I will have $' + moneyDifference.toFixed(2) + ' leftover');
//because I round up for the money collect from each person, so there is leftover