// // Import data for each flight
// import "dotenv/config";
// import autocomplete from "/autocomplete.js";
// import lagos from "/roundtripLondonAnyLagos.js";
// import montegoBay from "/roundtripLondonAnyMontegBay.js";
// import newYork from "/roundtripLondonAnyNewYorkAny.js";
// import paris from "/roundtripLondonAnyParisAny.js";
// import rome from "/roundtripLondonAnyRomeAny.js";

// let outCarrier;
//     outDepartureTime,
//     outDepartureAirport,
//     outDuration,
//     outStops,
//     outArrivalTime,
//     outArrivalAirport,
//     inCarrier,
//     inDepartureTime,
//     inDepartureAirport,
//     inDuration,
//     inStops,
//     inArrivalTime,
//     inArrivalAirport,
//     ticketPrice,

// session.responseData.forEach(itinerary, () => {
//   outCarrier = itinerary.segments.operatingCarrier.name;

// })

// const fetchFlights = async () => {
//     try {
//       const response = await fetch("/flight-results");
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       const itineraries = await response.json();
//       // Loop through itineraries, pulling out each roundtrip to pass into resultCard
//       itineraries.forEach(itinerary, () => {

//       })

//     } catch (error) {
//       console.error("Error fetching: ", error.message);
//     }
//   };

//   window.onload = fetchFlights();