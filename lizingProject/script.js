const priceDisplay = document.querySelector("#price")
const optionDisplay = document.querySelector("#creditSelect")

const TFBank_credit = document.querySelector("#TFBank_credit")
const LHV_credit = document.querySelector("#LHV_credit")
const Liisi_credit = document.querySelector("#Liisi_credit")
const Inbank_credit = document.querySelector("#Inbank_credit")

const arrayOfBanks = [TFBank_credit, LHV_credit, Liisi_credit, Inbank_credit]

const price = parseInt(priceDisplay.innerHTML.split(" ")[0]);
let months = 6;

// ===== Object with all necessary bank's data ===== //
const bankData = {
    interestRate: [0.089, 0.099, 0.076, 0.121],
    months: [6, 10, 12, 18, 24, 36, 48],
    selectedValues: [],

    solveCreditFunctions: {
        solveBankCredit(months, i) { return ((price / months) + (price * bankData.interestRate[i] / 12)).toFixed(1) }
    }
};

for (const optionDisplayElement of optionDisplay.children) {
    bankData.selectedValues.push(optionDisplayElement.value)
}

optionDisplay.addEventListener("change", function() {
    for (let i = 0; i < bankData.selectedValues.length; i++) {
        if (optionDisplay.value === bankData.selectedValues[i]) {
            months = bankData.months[i]
            displayCredit(months, i);
        }
    }
})

// ===== display credits from other banks ===== //
const displayCredit = () => arrayOfBanks.forEach((banks, index) =>
    banks.innerHTML = `${bankData.solveCreditFunctions.solveBankCredit(months, index)} € / month`)

displayCredit(months, bankData.interestRate[0])