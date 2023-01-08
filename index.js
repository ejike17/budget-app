const btnEl = document.getElementById("submit")
const selectEl = document.getElementById("select")
const descEl = document.getElementById("desc")
const amountEl = document.getElementById("amount")

/*Getting info for all error on the form */

const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2")
const root3 = document.getElementById("root3")

/* Information on income and amount */

const incomeInfo = document.querySelector(".income-info")
const incomeAmount = document.querySelector(".income-amount")

const expensesInfo = document.querySelector(".expenses-info")
const incomeAmount2 = document.querySelector(".income-amounts")

/* Top component information */

const totalSumEl = document.getElementById('total-sum')
const incomeIndicator =  document.getElementById("income-indicator")
const expensesIndicator = document.getElementById("expenses-indicator")

incomeIndicator.style.color = 'white'
expensesIndicator.style.color = 'white'

const percentage = document.getElementById("percentage")
percentage.style.fontSize = '10px'
percentage.style.backgroundColor = 'lightred'

/* All income calculations are assembled here */
let totalSum = 0
let totalExpenses = 0
let balance = 0
let percentExp = 0





btnEl.addEventListener('click', inputAllElements)

function inputAllElements() {

    /* Form validation */
       if (selectEl.value === "sel") {
         root1.style.color = "red";
         root1.innerText = "* Required";
         return false;
       } else {
           root1.innerText = "";
       }

       if (descEl.value === "") {
         root2.style.color = "red";
         root2.innerText = "* Required";
         return false;
       } else {
         root2.innerText = "";
       }

    let amountValue = Number(amountEl.value);
    
    console.log(isNaN(amountValue));
       if (amountEl.value === "" || isNaN(amountValue)) {
         root3.style.color = "red";
         root3.innerText = "* Required and please enter a valid number";
         return false;
       } else {
         root3.innerText = "";
       }
    
    /* Listing Income */
    
    if (selectEl.value === 'inc') {
        const creatP = document.createElement("p")
        creatP.append(descEl.value);
        creatP.style.marginBottom = '10px'
        incomeInfo.appendChild(creatP);

        const creatP2 = document.createElement("p");
        creatP2.style.color = 'green'
        creatP2.style.marginBottom = "10px";
        creatP2.append("+ $ " + amountEl.value);
        incomeAmount.appendChild(creatP2)

        balance += parseFloat(amountEl.value);   
        totalSum += parseFloat(amountEl.value);
    }

    /* Listing Expenses */

    if (selectEl.value === "exp") {
      const creatP = document.createElement("p");
      creatP.append(descEl.value);
      creatP.style.marginBottom = "10px";
      expensesInfo.appendChild(creatP);

      const creatP2 = document.createElement("p");
      creatP2.style.color = "red";
      creatP2.style.marginBottom = "10px";
      creatP2.append("+ $ " + amountEl.value);
      incomeAmount2.appendChild(creatP2);
        balance -= parseFloat(amountEl.value);   
        totalExpenses += parseFloat(amountEl.value);
    }

    totalSumEl.innerText = "$ " + balance
    incomeIndicator.innerText = "$ " + totalSum;
    expensesIndicator.innerText = "$ " + totalExpenses;

    percentExp = totalExpenses / totalSum * 100
    percentExp = Math.round(percentExp)
    percentage.innerText = `${percentExp}%`
}
