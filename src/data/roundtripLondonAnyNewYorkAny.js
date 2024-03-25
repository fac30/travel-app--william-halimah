/*
This data is configured for the round trip endpoint.
**Parameters**

Required:
fromEntityId = eyJlIjoiMjc1NDQwMDgiLCJzIjoiTE9ORCIsImgiOiIyNzU0NDAwOCIsInQiOiJDSVRZIn0=
toEntityId = eyJlIjoiMjc1Mzc1NDIiLCJzIjoiTllDQSIsImgiOiIyNzUzNzU0MiIsInQiOiJDSVRZIn0=
departDate = 2024-04-15
returnDate = 2024-04-30

Options:
market = UK
locale = en-GB
currency = GBP
adults = 1
children = 0
infants = 0
cabinClass = economy
departDate = 2024-04-15
returnDate = 2024-04-30
*/

export default {
  data: {
    context: {
      status: "incomplete",
      sessionId:
        "ClQIARJQCk4KJGRhMDljZmM1LTBjODctNDhmMC04NzAzLWZkN2QxMDZmZGQ0MRACGiQ4YzNlYWZkZC04ZmI3LTRjZjctYWUzZC0yZmU3YWQwZDIwMDM=",
      totalResults: 10,
    },
    itineraries: [
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404301830--31697-0-13554-2405010645",
        price: {
          raw: 327.88,
          formatted: "£328",
          pricingOptionId: "dxZtGeQis51H",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404301830--31697-0-13554-2405010645",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            durationInMinutes: 435,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T18:30:00",
            arrival: "2024-05-01T06:45:00",
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operationType: "fully_operated",
            },
            segments: [
              {
                id: "12712-13554-2404301830-2405010645--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T18:30:00",
                arrival: "2024-05-01T06:45:00",
                durationInMinutes: 435,
                flightNumber: "46",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 14.786995,
        },
        fareAttributes: {},
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.999,
      },
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404301800--31697-0-13554-2405010620",
        price: {
          raw: 326.88,
          formatted: "£327",
          pricingOptionId: "CPsqFyKdCwkd",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404301800--31697-0-13554-2405010620",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            durationInMinutes: 440,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T18:00:00",
            arrival: "2024-05-01T06:20:00",
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operationType: "fully_operated",
            },
            segments: [
              {
                id: "12712-13554-2404301800-2405010620--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T18:00:00",
                arrival: "2024-05-01T06:20:00",
                durationInMinutes: 440,
                flightNumber: "4",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 9.20127,
        },
        fareAttributes: {},
        tags: ["second_cheapest"],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.997984,
      },
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404302150--31697-0-13554-2405011015",
        price: {
          raw: 327.88,
          formatted: "£328",
          pricingOptionId: "tHVz5Cd3II7t",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404302150--31697-0-13554-2405011015",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            durationInMinutes: 445,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T21:50:00",
            arrival: "2024-05-01T10:15:00",
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "12712-13554-2404302150-2405011015--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T21:50:00",
                arrival: "2024-05-01T10:15:00",
                durationInMinutes: 445,
                flightNumber: "4030",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 22.39167,
        },
        fareAttributes: {},
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.990273,
      },
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404302100--31697-0-13554-2405010925",
        price: {
          raw: 327.88,
          formatted: "£328",
          pricingOptionId: "k3PDErAAN1uy",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404302100--31697-0-13554-2405010925",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            durationInMinutes: 445,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T21:00:00",
            arrival: "2024-05-01T09:25:00",
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operationType: "fully_operated",
            },
            segments: [
              {
                id: "12712-13554-2404302100-2405010925--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T21:00:00",
                arrival: "2024-05-01T09:25:00",
                durationInMinutes: 445,
                flightNumber: "154",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 9.20127,
        },
        fareAttributes: {},
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.990273,
      },
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404302130--31697-0-13542-2405011000",
        price: {
          raw: 327.88,
          formatted: "£328",
          pricingOptionId: "FdSjopkw6oO-",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: false,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404302130--31697-0-13542-2405011000",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: false,
            },
            durationInMinutes: 450,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T21:30:00",
            arrival: "2024-05-01T10:00:00",
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "12712-13542-2404302130-2405011000--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T21:30:00",
                arrival: "2024-05-01T10:00:00",
                durationInMinutes: 450,
                flightNumber: "4061",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 13.949996,
        },
        fareAttributes: {},
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.985914,
      },
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404301940--31697-0-13554-2405010805",
        price: {
          raw: 330.88,
          formatted: "£331",
          pricingOptionId: "1-skwWXIjKQA",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404301940--31697-0-13554-2405010805",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            durationInMinutes: 445,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T19:40:00",
            arrival: "2024-05-01T08:05:00",
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "12712-13554-2404301940-2405010805--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T19:40:00",
                arrival: "2024-05-01T08:05:00",
                durationInMinutes: 445,
                flightNumber: "4000",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 14.713889,
        },
        fareAttributes: {},
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.985752,
      },
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404302300--31697-0-13554-2405011110",
        price: {
          raw: 327.88,
          formatted: "£328",
          pricingOptionId: "jefVSdrPwTEJ",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404302300--31697-0-13554-2405011110",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            durationInMinutes: 430,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T23:00:00",
            arrival: "2024-05-01T11:10:00",
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operationType: "fully_operated",
            },
            segments: [
              {
                id: "12712-13554-2404302300-2405011110--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T23:00:00",
                arrival: "2024-05-01T11:10:00",
                durationInMinutes: 430,
                flightNumber: "138",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 14.786995,
        },
        fareAttributes: {},
        tags: ["third_cheapest", "third_shortest"],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.982596,
      },
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404302359--31697-0-13554-2405011215",
        price: {
          raw: 327.88,
          formatted: "£328",
          pricingOptionId: "8l0JC-8VL4rD",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404302359--31697-0-13554-2405011215",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            durationInMinutes: 436,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T23:59:00",
            arrival: "2024-05-01T12:15:00",
            timeDeltaInDays: 1,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operationType: "fully_operated",
            },
            segments: [
              {
                id: "12712-13554-2404302359-2405011215--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T23:59:00",
                arrival: "2024-05-01T12:15:00",
                durationInMinutes: 436,
                flightNumber: "10",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        fareAttributes: {},
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.977642,
      },
      {
        id: "13542-2404151200--31697-0-12712-2404151515|12712-2404300820--31697-0-13554-2404302010",
        price: {
          raw: 326.88,
          formatted: "£327",
          pricingOptionId: "i4JvYicd7JmL",
        },
        legs: [
          {
            id: "13542-2404151200--31697-0-12712-2404151515",
            origin: {
              id: "LGW",
              name: "London Gatwick",
              displayCode: "LGW",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 495,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T12:00:00",
            arrival: "2024-04-15T15:15:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operating: [
                {
                  id: -32385,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                  name: "Delta",
                },
              ],
              operationType: "not_operated",
            },
            segments: [
              {
                id: "13542-12712-2404151200-2404151515--31697",
                origin: {
                  flightPlaceId: "LGW",
                  displayCode: "LGW",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Gatwick",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T12:00:00",
                arrival: "2024-04-15T15:15:00",
                durationInMinutes: 495,
                flightNumber: "4062",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -32385,
                  name: "Delta",
                  alternateId: "DL",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404300820--31697-0-13554-2404302010",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: true,
            },
            durationInMinutes: 410,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T08:20:00",
            arrival: "2024-04-30T20:10:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operationType: "fully_operated",
            },
            segments: [
              {
                id: "12712-13554-2404300820-2404302010--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T08:20:00",
                arrival: "2024-04-30T20:10:00",
                durationInMinutes: 410,
                flightNumber: "26",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 14.786995,
        },
        fareAttributes: {},
        tags: ["cheapest", "second_shortest"],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.960724,
      },
      {
        id: "13554-2404150820--31697-0-12712-2404151125|12712-2404300820--31697-0-13554-2404302010",
        price: {
          raw: 352.69,
          formatted: "£353",
          pricingOptionId: "UOlnZfkJYdUT",
        },
        legs: [
          {
            id: "13554-2404150820--31697-0-12712-2404151125",
            origin: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: false,
            },
            destination: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            durationInMinutes: 485,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-15T08:20:00",
            arrival: "2024-04-15T11:25:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operationType: "fully_operated",
            },
            segments: [
              {
                id: "13554-12712-2404150820-2404151125--31697",
                origin: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                destination: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                departure: "2024-04-15T08:20:00",
                arrival: "2024-04-15T11:25:00",
                durationInMinutes: 485,
                flightNumber: "3",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
          {
            id: "12712-2404300820--31697-0-13554-2404302010",
            origin: {
              id: "JFK",
              name: "New York John F. Kennedy",
              displayCode: "JFK",
              city: "New York",
              country: "United States",
              isHighlighted: false,
            },
            destination: {
              id: "LHR",
              name: "London Heathrow",
              displayCode: "LHR",
              city: "London",
              country: "United Kingdom",
              isHighlighted: false,
            },
            durationInMinutes: 410,
            stopCount: 0,
            isSmallestStops: false,
            departure: "2024-04-30T08:20:00",
            arrival: "2024-04-30T20:10:00",
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: -31697,
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                  name: "Virgin Atlantic",
                },
              ],
              operationType: "fully_operated",
            },
            segments: [
              {
                id: "12712-13554-2404300820-2404302010--31697",
                origin: {
                  flightPlaceId: "JFK",
                  displayCode: "JFK",
                  parent: {
                    flightPlaceId: "NYCA",
                    displayCode: "NYC",
                    name: "New York",
                    type: "City",
                  },
                  name: "New York John F. Kennedy",
                  type: "Airport",
                  country: "United States",
                },
                destination: {
                  flightPlaceId: "LHR",
                  displayCode: "LHR",
                  parent: {
                    flightPlaceId: "LOND",
                    displayCode: "LON",
                    name: "London",
                    type: "City",
                  },
                  name: "London Heathrow",
                  type: "Airport",
                  country: "United Kingdom",
                },
                departure: "2024-04-30T08:20:00",
                arrival: "2024-04-30T20:10:00",
                durationInMinutes: 410,
                flightNumber: "26",
                marketingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
                operatingCarrier: {
                  id: -31697,
                  name: "Virgin Atlantic",
                  alternateId: "VS",
                  allianceId: 0,
                  displayCode: "",
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: false,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 7.014525,
        },
        fareAttributes: {},
        tags: ["shortest"],
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.911264,
      },
    ],
    messages: [],
    filterStats: {
      duration: {
        min: 485,
        max: 495,
        multiCityMin: 895,
        multiCityMax: 945,
      },
      airports: [
        {
          city: "London",
          airports: [
            {
              id: "LGW",
              name: "London Gatwick",
            },
            {
              id: "LHR",
              name: "London Heathrow",
            },
          ],
        },
        {
          city: "New York",
          airports: [
            {
              id: "JFK",
              name: "New York John F. Kennedy",
            },
          ],
        },
      ],
      carriers: [
        {
          id: -31697,
          logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
          name: "Virgin Atlantic",
        },
      ],
      stopPrices: {
        direct: {
          isPresent: true,
          formattedPrice: "£327",
        },
        one: {
          isPresent: false,
        },
        twoOrMore: {
          isPresent: false,
        },
      },
    },
    flightsSessionId: "da09cfc5-0c87-48f0-8703-fd7d106fdd41",
    destinationImageUrl:
      "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg",
    token:
      "eyJhIjoxLCJjIjowLCJpIjowLCJjYyI6ImVjb25vbXkiLCJvIjoiTE9ORCIsImQiOiJOWUNBIiwiZDEiOiIyMDI0LTA0LTE1IiwiZDIiOiIyMDI0LTA0LTMwIn0=",
  },
  status: true,
  message: "Successful",
};
