// @param {number} Farenheit

function convertToCelsius(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}
console.log(convertToCelsius(85));

function describeTemperature(Fahrenheit) {
  const Celcius = convertToCelsius(Fahrenheit);
  if (Celcius < 0) {
    return (message = "very cold");
  } else if (Celcius < 20) {
    return (message = "cold");
  } else if (Celcius < 30) {
    return (message = "warm");
  } else if (Celcius < 40) {
    return (message = "hot");
  } else {
    return (message = "very hot");
  }
}
//const input = prompt("Enter a number in fahrenheit.");
//const Fahrenheit = { Number };
{
  //const Celcius = convertToCelsius(Fahrenheit);
  //const message = describeTemperature(Fahrenheit);
  // alert(`The temperature is ${Celcius} and it feels ${message}.`);
}
//where am I going wrong with combining the two in the same output?
