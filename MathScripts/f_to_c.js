function ConvertToCelsius() {
    /*
  Create a function with the name ConvertToCelcius
  Read the textvalue from the inputbox named …
  Calculate fahrenheit into celcius formula: Farenheit - 32) * 5) / 9;
  Display the result into a textfield on the page
  
  */
    //Read the textvalue from the inputbox named …
    let myInput = document.getElementById("inputFahrenheit").value;
  
    //Calculate fahrenheit into celcius formula: Farenheit - 32) * 5) / 9;
    let celsius = ((myInput - 32) * 5) / 9;
  
    //Display the result into a textfield on the page
    document.getElementById("resultC").innerHTML = celsius.toFixed(2);
  }