import eurRates from "/exchange/EUR.js";
import GBPRates from "/exchange/GBP.js";
import usdRates from "/exchange/USD.js";
import ngnRates from "/exchange/NGN.js";
import jmdRates from "/exchange/JMD.js";

const fetchRates = async () =>{
  try{
    const rates  = await fetch("/currency-rates")
  }
}

const fromRow1 = document.querySelector("#from-row-1");
const fromRow2 = document.querySelector("#from-row-2");
const fromRow3 = document.querySelector("#from-row-3");
const fromRow4 = document.querySelector("#from-row-4");
const fromRow5 = document.querySelector("#from-row-5");

const fromArray = new Array(
  fromRow1.innerHTML,
  fromRow2.innerHTML,
  fromRow3.innerHTML,
  fromRow4.innerHTML,
  fromRow5.innerHTML
);
