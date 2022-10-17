// const changeDeg = () => {
//   const fv = document.getElementById("fd").value;

//   let newcv = ((fv - 32) * 5) / 9;

//   console.log(newcv);

//   document.getElementById("cd").value = newcv.toFixed(2) + " cel";
// };
const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function celsiusToFahrenheitAndKelvin() {
  const cTemp = Number(celsiusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelsiusAndKelvin() {
  const fTemp = Number(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = ((fTemp + 459.67) * 5) / 9;
  celsiusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelsiusAndKelvin() {
  const kTemp = Number(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (9 / 5) * (kTemp - 273) + 32;
  celsiusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

function main() {
  celsiusInput.addEventListener("input", celsiusToFahrenheitAndKelvin);
  fahrenheitInput.addEventListener("input", fahrenheitToCelsiusAndKelvin);
  fahrenheitInput.addEventListener("input", kelvinToCelsiusAndKelvin);
}
main();

// function resetAll() {
//   celsiusInput = 0;
//   fahrenheitInput = 0;
//   kelvinInput = 0;
// }
// clearBtn.addEventListener("click", resetAll);
