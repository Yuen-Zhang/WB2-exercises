//set value
let currentHour = 17;
let greeting;
//if else if statement
if (currentHour <= 10) {
    greeting = 'Good morning!';
}
else if (currentHour < 17) {
    greeting = 'Good day!';
}
else {
    greeting = 'Good evening!';
}
//output
console.log(greeting)