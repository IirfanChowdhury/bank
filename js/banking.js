// get input field 

// function getInputField(input){
//     const getInput = document.getElementById(input)
//     const getInputAmount = getInput.value ;
//     return getInputAmount ;
// }
// var depositAmount = document.getElementById('deposit-btn')
// depositAmount = getInputField('deposit-input')
// console.log(depositAmount)


function getInputField(inputfield) {
    const getDepositInput = document.getElementById(inputfield)
    const getDepositInputText = getDepositInput.value;
    const getDepositInputAmount = parseFloat(getDepositInputText)
    getDepositInput.value = ('');
    return getDepositInputAmount;
}

function addAmountInSection(sectionId, getDepositInputAmount) {
    const getCurrentDepositAmount = document.getElementById(sectionId)
    const previousDepositAmount = parseFloat(getCurrentDepositAmount.innerText)
    const newDepositAmount = previousDepositAmount + getDepositInputAmount
    getCurrentDepositAmount.innerText = newDepositAmount
}
function getCurrentBalance(){
    const getCurrentTotalBalanceText = document.getElementById('total-bank-balance')
    const getCurrentTotalBalance = getCurrentTotalBalanceText.innerText
    const getCurrentTotalBalanceAmount = parseFloat(getCurrentTotalBalance)
    return getCurrentTotalBalanceAmount
}
function addAmountTotalField(getDepositInputAmount, isAdd){
    const getCurrentTotalBalanceText = document.getElementById('total-bank-balance')
    if (isAdd == true) {
        const getCurrentTotalBalanceAmount = parseFloat(getCurrentTotalBalanceText.innerText) + getDepositInputAmount
        getCurrentTotalBalanceText.innerText = getCurrentTotalBalanceAmount;
    }
    else {
        const getCurrentTotalBalanceAmount = parseFloat(getCurrentTotalBalanceText.innerText) - getDepositInputAmount
        getCurrentTotalBalanceText.innerText = getCurrentTotalBalanceAmount;
    }
}




document.getElementById('deposit-btn').addEventListener('click', function () {

    // get inputfield

    const getDepositInputAmount = getInputField('deposit-input');
    if (getDepositInputAmount > 0) {
        addAmountInSection('deposit-total', getDepositInputAmount)
    }
    addAmountTotalField(getDepositInputAmount , true)


    // add amount on deposit section 
    // const getCurrentDepositAmount = document.getElementById('deposit-total')
    // const previousDepositAmount = getCurrentDepositAmount.innerText
    // const newDepositAmount = parseFloat(previousDepositAmount) + parseFloat(getDepositInputAmount)
    // getCurrentDepositAmount.innerText = newDepositAmount

    // add in total amount
    // const getCurrentTotalBalanceText = document.getElementById('total-bank-balance')
    // const getCurrentTotalBalanceAmount = parseFloat(getCurrentTotalBalanceText.innerText) + getDepositInputAmount
    // getCurrentTotalBalanceText.innerText = getCurrentTotalBalanceAmount;



})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    // get inputfield

    const getDepositInputAmount = getInputField('withdraw-input')
    if (getDepositInputAmount > 0 && getDepositInputAmount < getCurrentBalance()) {
        addAmountInSection('withdraw-total', getDepositInputAmount)
    }
    if (getDepositInputAmount < getCurrentBalance()){
        addAmountTotalField(getDepositInputAmount)
    }
    
    // add amount on deposit section

    // add in total amount
    // const getCurrentTotalBalanceText = document.getElementById('total-bank-balance')
    // const previousTotalBalance = parseFloat(getCurrentTotalBalanceText.innerText)
    // console.log(previousTotalBalance)
    // if (previousTotalBalance > previousDepositAmount) {
    //     const previousTotalBalance = getCurrentTotalBalanceText.innerText
    //     const getCurrentTotalBalanceAmount = parseFloat(previousTotalBalance) - parseFloat(getDepositInputAmount)
    //     getCurrentTotalBalanceText.innerText = getCurrentTotalBalanceAmount;
    // }

    // const getCurrentTotalBalanceText = document.getElementById('total-bank-balance')
    // const previousTotalBalance = getCurrentTotalBalanceText.innerText
    // const getCurrentTotalBalanceAmount = parseFloat(previousTotalBalance) - parseFloat(getDepositInputAmount)
    // getCurrentTotalBalanceText.innerText = getCurrentTotalBalanceAmount;

    // const previousTotalBalance = getCurrentTotalBalanceText.innerText
    // console.log(previousTotalBalance)



})