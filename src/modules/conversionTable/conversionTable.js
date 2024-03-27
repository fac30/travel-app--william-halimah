import eurRates from "/exchange/EUR.js";
import GBPRates from "/exchange/GBP.js";
import usdRates from "/exchange/USD.js";
import ngnRates from "/exchange/NGN.js";
import jmdRates from "/exchange/JMD.js";

class Converter {
  constructor() {
    this.__fromCurrency = "";
    this.__toCurrency = "";
    this.__amount = 0;
    this.__rates = null;
    this.__rate = 0;
  }
  //getters and setters for fromCurrency
  get fromCurrency() {
    return this.__fromCurrency;
  }
  set fromCurrency(currency) {
    this.__fromCurrency = currency;
  }

  //getters and setters for toCurrency
  get toCurrency() {
    return this.__toCurrency;
  }
  set toCurrency(currency) {
    this.__toCurrency = currency;
  }

  //getters and setters for amount inputted
  get amount() {
    return this.__amount;
  }
  set amount(value) {
    this.__amount = value;
  }
  //getters and setters for rates
  get rates() {
    return this.__rates;
  }
  set rates(data) {
    this.__rates = data;
  }
  //getters and setters for rate
  get rate() {
    return this.__rate;
  }
  set rate(currency) {
    this.__rate = this.__rates[currency];
  }

  convert() {
    return this.__amount * this.__rate;
  }
}

const converter = new Converter();

const convertedAmount = document.querySelector("#converted-amount");

const fromRow1 = document.querySelector("#from-row-1").innerHTML.split(" ")[0];
const fromRow2 = document.querySelector("#from-row-2").innerHTML.split(" ")[0];
const fromRow3 = document.querySelector("#from-row-3").innerHTML.split(" ")[0];
const fromRow4 = document.querySelector("#from-row-4").innerHTML.split(" ")[0];
const fromRow5 = document.querySelector("#from-row-5").innerHTML.split(" ")[0];

const toRow1 = document.querySelector("#to-row-1");
const toRow2 = document.querySelector("#to-row-2");
const toRow3 = document.querySelector("#to-row-3");
const toRow4 = document.querySelector("#to-row-4");
const toRow5 = document.querySelector("#to-row-5");

const displayConvertedCurrency = () => {
  toRow1.innerHTML =
    (parseFloat(fromRow1) * converter.rate).toFixed(2) +
    " " +
    converter.toCurrency;
  toRow2.innerHTML =
    (parseFloat(fromRow2) * converter.rate).toFixed(2) +
    " " +
    converter.toCurrency;
  toRow3.innerHTML =
    (parseFloat(fromRow3) * converter.rate).toFixed(2) +
    " " +
    converter.toCurrency;
  toRow4.innerHTML =
    (parseFloat(fromRow4) * converter.rate).toFixed(2) +
    " " +
    converter.toCurrency;
  toRow5.innerHTML =
    (parseFloat(fromRow5) * converter.rate).toFixed(2) +
    " " +
    converter.toCurrency;
};

const displayConvertedAmount = () => {
  convertedAmount.innerHTML =
    converter.convert().toFixed(2) + " " + converter.toCurrency;
};

const fetchRates = async () => {
  try {
    const response = await fetch("/currency-rates");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    converter.fromCurrency = await data.from;
    converter.toCurrency = await data.to;
    converter.amount = await parseFloat(data.amount);
    converter.rates = await data.responseData;
    converter.rate = await converter.toCurrency;
    //console.log(converter.rate);
    displayConvertedCurrency();
    displayConvertedAmount();
  } catch (error) {
    console.log("Fetch error: ", error.message);
  }
};

window.onload = fetchRates();
