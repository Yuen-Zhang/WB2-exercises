'use strict';
//set value
let payRate = 17.3;
let hoursWorked = 45;
let hoursOverTime = hoursWorked - 40;
let overTimePay;
let grossPay;

//if statement
if (hoursOverTime > 0) {
    overTimePay = payRate * 1.5 * hoursOverTime;
    grossPay = payRate * 40 + overTimePay;
}
else {
    grossPay = payRate * hoursWorked;
}

//output
console.log(grossPay);