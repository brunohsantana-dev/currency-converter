const convertButton = document.querySelector(".convert-button");
const currencyFromSelect = document.querySelector(".currency-from");
const currencyToSelect = document.querySelector(".currency-to");

function convertCurrency() {
    const inputAmountValue = document.querySelector(".input-amount").value;
    const currencyAmountToConvert = document.querySelector(".amount-to-convert")
    const currencyAmountConverted = document.querySelector(".amount-converted")

    console.log(currencyFromSelect.value)
    console.log(currencyToSelect.value)

    const dolarToday = 5.50
    const euroToday = 6.50
    const libraToday = 7.50
    const audToday = 3.50

    const AmountConverted = inputAmountValue / dolarToday;

    currencyAmountToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputAmountValue)

    currencyAmountConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(AmountConverted)

}
convertButton.addEventListener("click", convertCurrency)