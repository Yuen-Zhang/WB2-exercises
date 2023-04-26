//Create a function with the name ConvertToFahrenheit
function ConvertToFahrenheit() {

    //Read the textvalue from the inputbox named
    let myInputC = document.getElementById("inputCelsius").value;
  
    //Calculate Celsius into Fahrenheit formula: c*9/5 +32;
    let Fahrenheit = myInputC * 9/5 + 32;
  
    //Display the result into a textfield on the page
    document.getElementById("resultF").innerHTML = Fahrenheit.toFixed(2);
  }