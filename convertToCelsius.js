function convertFahrToCelsius(fahrenheit) {
  let parsedfahrenheit;

  if (!Array.isArray(fahrenheit)) {
    parsedfahrenheit = parseInt(fahrenheit);
  }

  if (isNaN(parsedfahrenheit)) {
    return `${JSON.stringify(fahrenheit)} is not a valid number but a/an ${
      Array.isArray(fahrenheit) ? "array" : typeof fahrenheit
    }`;
  }

  let celsius = ((fahrenheit - 32) / 1.8).toFixed(4);
  return celsius;
}
