const priceDisplay = document.querySelector("#price")

const labelDisplay = document.querySelector("#lbl")
const rangeDisplay = document.querySelector("#customRange2")

const TFBank_credit = document.querySelector("#TFBank_credit")
const LHV_credit = document.querySelector("#LHV_credit")
const Liisi_credit = document.querySelector("#Liisi_credit")
const Inbank_credit = document.querySelector("#Inbank_credit")

const arrayOfBanks = [TFBank_credit, LHV_credit, Liisi_credit, Inbank_credit]

let months;
rangeDisplay.addEventListener("change", (event) => {
    const indexRange = event.target.value;
    labelDisplay.innerHTML = indexRange;
    if (indexRange == 0) months = 6;
    if (indexRange == 1) months = 10;
    if (indexRange == 2) months = 12;
    if (indexRange == 3) months = 18;
    if (indexRange == 4) months = 24;
    if (indexRange == 5) months = 36;
    if (indexRange == 6) months = 48;

    labelDisplay.innerHTML = `${months} months`
    displayCredit()
})

function displayCredit() {
    const price =  priceDisplay.innerHTML;
    const arrayPrice = price.split(" ");
    const formula = (parseInt(arrayPrice[0]) / months).toFixed(2);

    arrayOfBanks.forEach(items => items.innerHTML = `${formula} € / month`)
}

