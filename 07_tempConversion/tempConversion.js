const convertToCelsius = function(temp) {
  c = (temp - 32) * 5/9;
  return Math.round(c*10)/10;
};

const convertToFahrenheit = function(temp) {
  f = 9/5 * temp + 32;
  return Math.round(f*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
