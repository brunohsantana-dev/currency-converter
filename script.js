const convertButton = document.querySelector(".convert-button");

function convertCurrency() {
    const inputAmoutValue = document.querySelector(".input-amount").value;

    const currencyAmountToConvert = document.querySelector(".amount-to-convert");
    const currencyAmountConverted = document.querySelector(".amount-converted");

    currencyAmountToConvert.innerHTML = inputAmoutValue
    currencyAmountConverted.innerHTML = convertedValue

    const dolarToday = 5.50;
    const euroToday = 6.50;
    const libraToday = 7.50;
    const audToday = 3.50;

    const dolarValue = (inputAmoutValue / dolarToday);
    const euroValue = (inputAmoutValue / euroToday);
    const libraValue = (inputAmoutValue / libraToday);
    const audValue = (inputAmoutValue / audToday);

    console.log(inputAmoutValue);
    console.log(dolarValue);
    console.log(euroValue);
    console.log(libraValue);
    console.log(audValue);
}
convertButton.addEventListener("click", convertCurrency)