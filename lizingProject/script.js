const priceDisplay = document.querySelector("#price")

const labelDisplay = document.querySelector("#lbl")
const rangeDisplay = document.querySelector("#customRange2")

const TFBank_credit = document.querySelector("#TFBank_credit")
const LHV_credit = document.querySelector("#LHV_credit")
const Liisi_credit = document.querySelector("#Liisi_credit")
const Inbank_credit = document.querySelector("#Inbank_credit")

const arrayOfBanks = [TFBank_credit, LHV_credit, Liisi_credit, Inbank_credit]

const price = parseInt(priceDisplay.innerHTML.split(" ")[0]); // Create array, items in array are ['1549', '€'], then take first parameter (price).
let months = 18;

// ===== Object with all necessary bank's data ===== //
const bankData = {
    interestRate: [0.089, 0.099, 0.076, 0.121] /*Interest rate is just a test value, it might be different...Values in percent are [8.9%, 9,9%, 7,6%, 12,1%]*/,
    months: [6, 10, 12, 18, 24, 36, 48],

    // Need to make some changes here...
    solveCreditFunctions: {
        solveTFBankCredit(months) {
            return ((price / months) + (price * bankData.interestRate[0] / 12)).toFixed(1)
        },
        solveLHVCredit(months) {
            return ((price / months) + (price * bankData.interestRate[1] / 12)).toFixed(1)
        },
        solveLiisiCredit(months) {
            return ((price / months) + (price * bankData.interestRate[2] / 12)).toFixed(1)
        },
        solveInbankCredit(months) {
            return ((price / months) + (price * bankData.interestRate[3] / 12)).toFixed(1)
        }
    }
}

rangeDisplay.addEventListener("change", (event) => {
    const indexRange = event.target.value
    months = bankData.months[indexRange]

    labelDisplay.innerHTML = `${bankData.months[indexRange]} months`
    displayCredit()
})

const solveCreditArray = [
    bankData.solveCreditFunctions.solveTFBankCredit, bankData.solveCreditFunctions.solveLHVCredit,
    bankData.solveCreditFunctions.solveLiisiCredit, bankData.solveCreditFunctions.solveInbankCredit
]

// ===== display credits from other banks ===== //
const displayCredit = () => arrayOfBanks.forEach((banks, creditBankNum) =>
    banks.innerHTML = `${solveCreditArray[creditBankNum](months)} € / month`)

displayCredit()
labelDisplay.innerHTML = `${bankData.months[3]} months`
