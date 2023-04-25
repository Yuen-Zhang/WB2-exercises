//set value
let ruleOf72 = 72;
let interestRate = 4.9;
let savingNow = 30000;
//calculation
let timeNeed = ruleOf72 / interestRate;
let savingDouble = savingNow * 2;
//output
console.log(
    'At a ' + interestRate + ' % interest rate, your savings account will be worth ' + savingDouble.toFixed(2) + ' in ' + timeNeed.toFixed(1) + ' years');