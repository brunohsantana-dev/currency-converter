const convertButton = document.querySelector(".convert-button");
const currencyFromSelect = document.querySelector(".currency-from");
const currencyToSelect = document.querySelector(".currency-to");

const currencyNameFrom = document.querySelector(".currency-name-from");
const currencyImageFrom = document.querySelector(".currency-image-from");

const currencyNameTo = document.querySelector(".currency-name-to");
const currencyImageTo = document.querySelector(".currency-image-to");

function convertCurrency() {
    const inputElement = document.querySelector(".input-amount");
    const inputAmountValue = Number(inputElement.value);

    const currencyAmountToConvert = document.querySelector(".amount-to-convert");
    const currencyAmountConverted = document.querySelector(".amount-converted");

    if (
        inputElement.value.trim() === "" ||
        !Number.isFinite(inputAmountValue) ||
        inputAmountValue < 0
    ) {
        alert("Enter a valid amount greater than or equal to zero.");
        return;
    }

    // Fixed practice rates: value of one currency unit in BRL
    const rates = {
        BRL: 1,
        USD: 5.50,
        EUR: 6.50,
        GBP: 7.50,
        AUD: 3.50
    };

    const currencyFrom = currencyFromSelect.value;
    const currencyTo = currencyToSelect.value;

    const amountInReais = inputAmountValue * rates[currencyFrom];
    const amountConverted = amountInReais / rates[currencyTo];

    currencyAmountToConvert.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currencyFrom
    }).format(inputAmountValue);

    currencyAmountConverted.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currencyTo
    }).format(amountConverted);
}

convertButton.addEventListener("click", convertCurrency)

function updateCurrencyBox(currencyCode, nameElement, imageElement) {
    if (currencyCode === "BRL") {
        nameElement.textContent = "Brazilian Real";
        imageElement.src = "./assets/brasil.png";
    } else if (currencyCode === "USD") {
        nameElement.textContent = "US Dollar";
        imageElement.src = "./assets/eua.png";
    } else if (currencyCode === "EUR") {
        nameElement.textContent = "Euro";
        imageElement.src = "./assets/euro.png";
    } else if (currencyCode === "GBP") {
        nameElement.textContent = "British Pound";
        imageElement.src = "./assets/libra.png";
    } else if (currencyCode === "AUD") {
        nameElement.textContent = "Australian Dollar";
        imageElement.src = "./assets/aus.png";
    }

    imageElement.alt = nameElement.textContent;
}

function changeCurrencyFrom() {
    updateCurrencyBox(
        currencyFromSelect.value,
        currencyNameFrom,
        currencyImageFrom
    );
}

function changeCurrencyTo() {
    updateCurrencyBox(
        currencyToSelect.value,
        currencyNameTo,
        currencyImageTo
    );
}

currencyFromSelect.addEventListener("change", changeCurrencyFrom);
currencyToSelect.addEventListener("change", changeCurrencyTo);

// Match the boxes to the initial selections
changeCurrencyFrom();
changeCurrencyTo();