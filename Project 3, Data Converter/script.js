const inputEl = document.getElementById("input-el");
const meterToFeetEl = document.getElementById("meter-to-feet");
const convertBtn = document.getElementById("conver-btn");
const litersToGallonEl = document.getElementById("litersToGallon-el");
const killosToPoundsEl = document.getElementById("killosToPounds-el");

convertBtn.addEventListener("click", function () {
  length();
  valume();
  mass();
});

function length() {
  let meter = inputEl.value * 3.281; // to feet
  let feet = inputEl.value / 3.281; // to meter
  let meterToFeet = `${inputEl.value} Meter = ${meter.toFixed(3)} Feets`;
  let feetToMeter = `${inputEl.value} Feet = ${feet.toFixed(3)} Meters`;
  meterToFeetEl.innerText = `${meterToFeet} | ${feetToMeter}`;
}
function valume() {
  let liters = inputEl.value * 0.264; // to gallon
  let gallon = inputEl.value / 0.264; // to litters
  let literstoGallon = `${inputEl.value} Litters = ${liters.toFixed(3)} Liters`;
  let gallonToLitters = `${inputEl.value} Gallon = ${gallon.toFixed(
    3
  )} Gallons`;
  litersToGallonEl.innerText = `${literstoGallon} | ${gallonToLitters}`;
}
function mass() {
  let killos = inputEl.value * 2.204; // to pounds
  let pounds = inputEl.value / 2.204; // to killos
  let killosToPounds = `${inputEl.value} Killos = ${killos.toFixed(3)} Killos`;
  let poundsToKillos = `${inputEl.value} Gallon = ${pounds.toFixed(3)} Pounds`;
  killosToPoundsEl.innerText = `${killosToPounds} | ${poundsToKillos}`;
}
