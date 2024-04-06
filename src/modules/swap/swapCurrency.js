document.getElementById("exchangeSwap").addEventListener("click", (e) => {
  e.preventDefault();
  let fromCurrency = document.querySelector("#fromCurrency");
  let toCurrency = document.querySelector("#toCurrency");

  let fromValue = fromCurrency.value;
  let toValue = toCurrency.value;

  fromCurrency.value = toValue;
  toCurrency.value = fromValue;
});
