// @param {number} Farenheit

function convertToCelsius(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}
console.log(convertToCelsius(85));

function describeTemperature(Fahrenheit) {
  const Celcius = convertToCelsius(Fahrenheit);
  if (Celcius < 0) {
    return "very cold";
  } else if (Celcius < 20) {
    return "cold";
  } else if (Celcius < 30) {
    return "warm";
  } else if (Celcius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}
const Fahrenheit = prompt("Enter a number in fahrenheit.");
const message = describeTemperature(Fahrenheit);
alert(
  `The temperature is ${convertToCelsius(Fahrenheit)} and it feels ${message}.`
);
