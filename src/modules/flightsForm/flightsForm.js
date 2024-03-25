//import "dotenv/config";
import lagos from "/roundtripLondonAnyLagos.js";

// Form Inputs
const originInput = document.querySelector("#origin");
const destinationInput = document.querySelector("#destination");
const departInput = document.querySelector("#depart");
const returnInput = document.querySelector("#return");
const passengersInput = document.querySelector("#passengers");
const passengersMinusBtn = document.querySelector("#minus");
const passengersPlusBtn = document.querySelector("#plus");

passengersMinusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (passengersInput.value == 1) {
    return;
  } else {
    passengersInput.value -= 1;
  }
});

passengersPlusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentValue = parseInt(passengersInput.value);
  if (passengersInput.value == 8) {
    return;
  } else {
    passengersInput.value = currentValue + 1;
  }
});
console.log(lagos);
