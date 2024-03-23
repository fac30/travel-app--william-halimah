import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import session from "express-session";

const app = express();

const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the server file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000, secure: true },
  })
);
app.use(express.static("src/styles"));
app.use(express.static("src/assets"));
app.use(express.static("src/modules"));

app.get("/", (req, res) => {
  res.render("pages/home/index");
});

app.get("/flights", (req, res) => {
  res.render("pages/flights", { data: req.session.apiResponseData });
});

app.get("/error", (req, res) => {
  res.render("pages/error");
});

app.post("/submit", async (req, res) => {
  try {
    // const { origin } = req.body;

    const apiResponse = await fetch(process.env.SKYSCANNER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.SKYSCANNER_KEY,
      },
      body: JSON.stringify({
        query: {
          market: "UK",
          locale: "en-GB",
          currency: "GBP",
          query_legs: [
            {
              origin_place_id: { iata: "LHR" },
              destination_place_id: { iata: "SIN" },
              date: {
                year: 2024,
                month: 12,
                day: 22,
              },
            },
          ],
          adults: 1,
          cabin_class: "CABIN_CLASS_ECONOMY",
        },
      }),
    });
    if (!apiResponse.ok) {
      throw new Error(
        `Error retrieving data from Skyscanner: ${apiResponse.statusText}`
      );
    }
    const data = await apiResponse.json();
    console.log(data.content.results.itineraries[0]);
    req.session.apiResponseData = data;
    res.redirect("/flights");
  } catch (error) {
    console.error(error.message);
    res.send("/error");
  }
});

app.get("*", function (req, res) {
  res.status(404).send("Missing");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
