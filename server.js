import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import session from "express-session";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the server file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
    },
  })
);
app.use((req, res, next) => {
  if (!session.currencyData) {
    session.currencyData = {
      from: "",
      to: "",
      amount: 0,
      responseData: null,
    };
  }
  next();
});

app.use(express.static("src/styles"));
app.use(express.static("src/assets"));
app.use(express.static("src/modules"));
app.use(express.static("src/data"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/flights", (req, res) => {
  res.render("pages/flights", {
    query: session.flightsData,
    itineraries: session.flightsData.responseData,
  });
});

app.post("/submit-flights-search", async (req, res) => {
  const { origin, destination, departDate, returnDate, passengers } = req.body;

  const url =
    process.env.SKYSCANNER_URL +
    `fromEntityId=${origin}` +
    `&toEntityId=${destination}` +
    `&departDate=${departDate}` +
    `&returnDate=${returnDate}` +
    `&adults=${passengers}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.SKYSCANNER_RAPID_KEY,
        "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com",
      },
    });

    const {
      data: { itineraries },
    } = await response.json();
    session.flightsData = {
      from: origin,
      to: destination,
      leave: departDate,
      return: returnDate,
      adults: passengers,
      responseData: itineraries,
    };

    res.redirect("/flights");
  } catch (error) {
    console.error(error);
  }
});

app.get("/currency", (req, res) => {
  res.render("pages/currency", { exchangeRates: session.currencyData });
});

app.post("/submit-exchange-form", async (req, res) => {
  const { fromCurrency, toCurrency, amount } = req.body;

  try {
    const response = await fetch(
      process.env.EXCHANGERATE +
        process.env.EXCHANGERATE_KEY +
        "/latest/" +
        fromCurrency
    );
    if (response.ok && response.status === 200) {
      const { conversion_rates } = await response.json();
      session.currencyData = {
        from: fromCurrency,
        to: toCurrency,
        amount: amount || 0,
        responseData: conversion_rates,
      };
      res.redirect("/currency");
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/currency-rates", (req, res) => {
  res.send(session.currencyData);
});

app.get("*", (req, res) => {
  res.status(404).send("Missing");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
