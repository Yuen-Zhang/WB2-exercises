//set value
let givenYear = 1900;


//if statement
if ((givenYear % 4 === 0 && givenYear % 100 !== 0) || (givenYear % 400 === 0)) {
        console.log('This is a leap year');
}
else {
    console.log('This is not a leap year');
}


/*
//Another way using else if
if (givenYear % 4 === 0 && givenYear % 100 !== 0) {
    console.log('This is a leap year');
}
else if (givenYear % 400 === 0) {
    console.log('This is a leap year');
}
else {
    console.log('This is not a leap year');
}
*/


