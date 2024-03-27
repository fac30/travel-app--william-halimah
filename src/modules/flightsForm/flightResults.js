// Import data for each flight
import "dotenv/config";
import autocomplete from "/autocomplete.js";
import lagos from "/roundtripLondonAnyLagos.js";
import montegoBay from "/roundtripLondonAnyMontegBay.js";
import newYork from "/roundtripLondonAnyNewYorkAny.js";
import paris from "/roundtripLondonAnyParisAny.js";
import rome from "/roundtripLondonAnyRomeAny.js";

class Flights {
    constructor() {
        this.__
    }
}

let outCarrier = lagos.data.itineraries[0].segments.operatingCarrier.name;
    // outCarrier,
    // outDepartureTime,
    // outDepartureAirport,
    // outDuration,
    // outStops,
    // outArrivalTime,
    // outArrivalAirport,
    // inCarrier,
    // inDepartureTime,
    // inDepartureAirport,
    // inDuration,
    // inStops,
    // inArrivalTime,
    // inArrivalAirport,
    // ticketPrice,

const fetchFlights = async () => {
    try {
      const response = await fetch("/flight-results");
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();


    } catch (error) {
      console.error("Error fetching: ", error.message);
    }
  };

  window.onload = fetchFlights();