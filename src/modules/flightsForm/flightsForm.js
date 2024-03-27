// Import data for each flight
//import "dotenv/config";
import autocomplete from "/autocomplete.js";
import lagos from "/roundtripLondonAnyLagos.js";
import montegoBay from "/roundtripLondonAnyMontegBay.js";
import newYork from "/roundtripLondonAnyNewYorkAny.js";
import paris from "/roundtripLondonAnyParisAny.js";
import rome from "/roundtripLondonAnyRomeAny.js";

// Form Inputs
const passengersMinusBtn = document.querySelector("#minus");
const passengersPlusBtn = document.querySelector("#plus");

// Event listeners to update number of passengers by button press
// Minus button decreases number of passengers until it hits 1
passengersMinusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (passengersInput.value == 1) {
    return;
  } else {
    passengersInput.value -= 1;
  }
});

// Plus button increases number of passengers up to the limit of 8
passengersPlusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentValue = parseInt(passengersInput.value);
  if (passengersInput.value == 8) {
    return;
  } else {
    passengersInput.value = currentValue + 1;
  }
});

//

const fetchFlights = async () => {
  try {
    const response = await fetch("/flight-results");
  } catch (error) {
    console.error("Error fetching: ", error.message);
  }
};
