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
    secret: "C,*/2Jlo>m=0pF)?b7yrGBPnGOnB6Z",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.use(express.static("src/styles"));
app.use(express.static("src/assets"));
app.use(express.static("src/modules"));
app.use(express.static("src/data"));

app.get("/", (req, res) => {
  res.render("pages/index");
});
app.get("/flights", (req, res) => {
  res.render("pages/flights");
});

app.get("/currency", (req, res) => {
  
  res.render("pages/currency");
});

app.post("/submit-exchange-form", async (req, res) => {
  const { fromCurrency } = req.body;

  try {
    const response = await fetch(
      process.env.EXCHANGERATE +
        process.env.EXCHANGERATE_KEY +
        "/latest/" +
        fromCurrency
    );
    if (response.ok && response.status === 200) {
      const data = await response.json();
      session[fromCurrency] = data;
      res.redirect("/currency");
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    res.send(error.message);
  }
});

app.get("*", (req, res) => {
  res.status(404).send("Missing");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
