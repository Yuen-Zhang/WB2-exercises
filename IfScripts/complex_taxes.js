//set value
let payRate = 10.00;
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

//set annual pay
let annualGrossPay = grossPay * 52;
let filingStatus = 'Single';
let taxPayWeekly;
//if for single/joint
if (filingStatus == 'Single') {
    if (annualGrossPay < 12000) {
        taxPayWeekly = grossPay * 0.05;
    }
    else if (annualGrossPay < 25000) {
        taxPayWeekly = grossPay * 0.1;
    }
    else if (annualGrossPay < 75000) {
        taxPayWeekly = grossPay * 0.15;
    }
    else {
        taxPayWeekly = grossPay * 0.2;
    }
}
else {
    if (annualGrossPay < 12000) {
        taxPayWeekly = grossPay * 0;
    }
    else if (annualGrossPay < 25000) {
        taxPayWeekly = grossPay * 0.06;
    }
    else if (annualGrossPay < 75000) {
        taxPayWeekly = grossPay * 0.11;
    }
    else {
        taxPayWeekly = grossPay * 0.2;
    }
}

//net pay
let netPayWeekly = grossPay - taxPayWeekly;

//output
console.log('You worked ' + hoursWorked + ' hours this period.');
console.log('Because you earn $' + payRate.toFixed(2) + ' per hour, your gross pay is $' + grossPay);
console.log('Your filing status is ' + filingStatus);
console.log('Your tax withholdings this period is $' + taxPayWeekly.toFixed(2));
console.log('Your net pay is $' + netPayWeekly.toFixed(2));