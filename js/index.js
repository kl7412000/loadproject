const amountEl = document.querySelector("#amount");
const yearsEl = document.querySelector("#years");
const rateEl = document.querySelector("#rate");
const repayment1El = document.querySelector("#repayment1");
const repayment2El = document.querySelector("#repayment2");
const feeEl = document.querySelector("#fee");
const calcEl = document.querySelector("#calc");

console.log(calcEl, amountEl, yearsEl, rateEl, repayment1El, repayment2El);

calcEl.addEventListener("click", calcLoan);

function calcLoan() {
    let amount = amountEl.value * 10000;
    let years = yearsEl.value;
    let rate = rateEl.value / 100;
    /**
    let fee = 0;
    if (feeEl.checked) {
        fee = 5000;
    }
    */
    // fee=5000 if feelEl else 0
    let fee = feeEl.checked ? 5000 : 0;
    // 取得不同計算方法
    let rule = repayment1El.checked ? 1 : 2;
    // 利息
    let totalInterest = amount * rate * years;
    // 總金額
    let totalAmount = amount * totalInterest + fee;

    console.log(amount, years, rate, fee, rule, totalAmount, interest, totalInterest);

    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? "" : "含手續費") + "元";
    document.querySelector(".totalInerest").innerText = totalInterest + "元";
    const resultEl = document.querySelector("#result");
    resultEl.style.display = "none";
    setTimeout(fuction(){
        resultEl.style.display = "block";
    }, 500);
}