// Overall Value Functionality -------------------------------

function calculateOverallValue() {
  const totalAssets = Number(document.getElementById('total-assets').value);
  const liabilities = Number(document.getElementById('liabilities').value);
  const equity = Number(document.getElementById('equity').value);

  let tA = (equity + liabilities).toFixed(2);
  let l = (totalAssets - equity).toFixed(2);
  let e = (totalAssets - liabilities).toFixed(2);

  if(totalAssets === 0 && liabilities !== 0 && equity !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Total Assets: ${tA}</h1>`;
    document.getElementById('result-one').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-one');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(totalAssets !== 0 && liabilities === 0 && equity !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Liabilities: ${l}</h1>`;
    document.getElementById('result-one').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-one');
      result.removeChild(result.lastElementChild);

      console.log(result)
    }, 5000)
  }

  if(totalAssets !== 0 && liabilities !== 0 && equity === 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Equity: ${e}</h1>`;
    document.getElementById('result-one').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-one');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }
}

// Net Income Functionality --------------------------

function calculateNetIncome() {
  const netIncome = Number(document.getElementById('net-income').value);
  const revenue = Number(document.getElementById('revenue').value);
  const expense = Number(document.getElementById('expense').value);

  let nI = (revenue - expense).toFixed(2);
  let r = (netIncome + expense).toFixed(2);
  let e = (revenue - netIncome).toFixed(2);

  if(netIncome === 0 && revenue !== 0 && expense !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Net Income: ${nI}</h1>`;
    document.getElementById('result-two').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-two');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(netIncome !== 0 && revenue === 0 && expense !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Revenue: ${r}</h1>`;
    document.getElementById('result-two').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-two');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(netIncome !== 0 && revenue !== 0 && expense === 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Expense: ${r}</h1>`;
    document.getElementById('result-two').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-two');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }
}

// Cash Ratio Functionality --------------------------

function calculateCashRatio() {
  const cashRatio = Number(document.getElementById('cash-ratio').value);
  const cash = Number(document.getElementById('cash').value);
  const currentLiabilities = Number(document.getElementById('current-liabilities').value);

  let cR = (cash / currentLiabilities).toFixed(2);
  let c = (cashRatio * currentLiabilitie).toFixed(2);
  let cL = (cash / cashRatio).toFixed(2);

  if(cashRatio === 0 && cash !== 0 && currentLiabilities !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Cash Ratio: ${cR}</h1>`;
    document.getElementById('result-three').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-three');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(cashRatio !== 0 && cash === 0 && currentLiabilities !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Cash: ${c}</h1>`;
    document.getElementById('result-three').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-three');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(cashRatio !== 0 && cash !== 0 && currentLiabilities === 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Current Liabilities: ${cL}</h1>`;
    document.getElementById('result-three').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-three');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }
}

// Profit Margin Functionality ------------------------------

function calculateProfitMargin() {
  const profitMargin = Number(document.getElementById('profit-margin').value);
  const netIncome = Number(document.getElementById('net-income-two').value);
  const sales = Number(document.getElementById('sales').value);

  let pM = (netIncome / sales).toFixed(2);
  let nI = (profitMargin * sales).toFixed(2);
  let s = (netIncome / profitMargin).toFixed(2);

  if(profitMargin === 0 && netIncome !== 0 && sales !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Profit Margin: ${pM}</h1>`;
    document.getElementById('result-four').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-four');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(profitMargin !== 0 && netIncome === 0 && sales !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Net Income: ${nI}</h1>`;
    document.getElementById('result-four').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-four');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(profitMargin !== 0 && netIncome !== 0 && sales === 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Sales: ${s}</h1>`;
    document.getElementById('result-four').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-four');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }
}

// Debt/Equity Functionality -------------------------

function calculateDebtEquityRatio() {
  const debtEquity = Number(document.getElementById('debt-equity').value);
  const totalLiabilities = Number(document.getElementById('total-liabilities').value);
  const totalEquity = Number(document.getElementById('total-equity').value);

  let dE = (totalLiabilities / totalEquity).toFixed(2);
  let tL = (debtEquity * totalEquity).toFixed(2);
  let tE = (totalLiabilities / debtEquity).toFixed(2);

  if(debtEquity === 0 && totalLiabilities !== 0 && totalEquity !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Debt/Equity: ${dE}</h1>`;
    document.getElementById('result-five').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-five');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(debtEquity !== 0 && totalLiabilities === 0 && totalEquity !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Total Liabilities: ${tL}</h1>`;
    document.getElementById('result-five').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-five');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(debtEquity !== 0 && totalLiabilities !== 0 && totalEquity === 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Total Equity: ${tE}</h1>`;
    document.getElementById('result-five').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-five');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }
}

// Cost of Good Sold Functionality ------------------------

function calculateCostGoodsSold() {
  const costGoodsSold = Number(document.getElementById('cost-goods-sold').value);
  const beginningInventory = Number(document.getElementById('beginning-inventory').value);
  const costPurchasingNewInventory = Number(document.getElementById('cost-purchasing-new-inventory').value);
  const endingInventory = Number(document.getElementById('ending-inventory').value);

  let cGS = (beginningInventory + costPurchasingNewInventory - endingInventory).toFixed(2);
  let bI = (costGoodsSold - costPurchasingNewInventory + endingInventory).toFixed(2);
  let cPNI = (costGoodsSold + endingInventory - beginningInventory).toFixed(2);
  let eI = (costPurchasingNewInventory - costGoodsSold + beginningInventory).toFixed(2);

  if(costGoodsSold === 0 && beginningInventory !== 0 && costPurchasingNewInventory !== 0 && endingInventory !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Cost of Goods Sold: ${cGS}</h1>`;
    document.getElementById('result-six').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-six');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(costGoodsSold !== 0 && beginningInventory === 0 && costPurchasingNewInventory !== 0 && endingInventory !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Beginning Inventory: ${bI}</h1>`;
    document.getElementById('result-six').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-six');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(costGoodsSold !== 0 && beginningInventory !== 0 && costPurchasingNewInventory === 0 && endingInventory !== 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Cost of New Inventory: ${cPNI}</h1>`;
    document.getElementById('result-six').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-six');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(costGoodsSold !== 0 && beginningInventory !== 0 && costPurchasingNewInventory !== 0 && endingInventory === 0) {
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Ending Inventory: ${eI}</h1>`;
    document.getElementById('result-six').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById('result-six');
      result.removeChild(result.lastElementChild);
    }, 5000)
  }
}

// Retained Earnings Functionality ------------------------------

function calculateRetainedEarnings() {
  const retainedEarnings = Number(document.getElementById('retained-earnings').value);
  const beginningRetainedEarnings = Number(document.getElementById('beginning-retained-earnings').value);
  const netIncomeNetLoss = Number(document.getElementById('net-income-net-loss').value);
  const cashDividends = Number(document.getElementById('cash-dividends').value);

  let rE = (beginningRetainedEarnings + netIncomeNetLoss - cashDividends).toFixed(2);
  let bRE = ((-1*netIncomeNetLoss) + cashDividends + retainedEarnings).toFixed(2);
  let nINL = (cashDividends + retainedEarnings - beginningRetainedEarnings).toFixed(2);
  let cD = (beginningRetainedEarnings + netIncomeNetLoss - retainedEarnings).toFixed(2);

  if(retainedEarnings === 0 && beginningRetainedEarnings !== 0 && netIncomeNetLoss !== 0 && cashDividends !== 0){
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Retained Earnings: ${rE}</h1>`;
    document.getElementById('result-seven').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById("result-seven");
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(retainedEarnings !== 0 && beginningRetainedEarnings === 0 && netIncomeNetLoss !== 0 && cashDividends !== 0){
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Beginning Retained Earnings: ${bRE}</h1>`;
    document.getElementById('result-seven').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById("result-seven");
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(retainedEarnings !== 0 && beginningRetainedEarnings !== 0 && netIncomeNetLoss === 0 && cashDividends !== 0){
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Net Income or Net Loss: ${nINL}</h1>`;
    document.getElementById('result-seven').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById("result-seven");
      result.removeChild(result.lastElementChild);
    }, 5000)
  }

  if(retainedEarnings !== 0 && beginningRetainedEarnings !== 0 && netIncomeNetLoss !== 0 && cashDividends === 0){
    let h1 = document.createElement("P");

    h1.innerHTML = `<h1 id="result-h1">Cash Dividends: ${cD}</h1>`;
    document.getElementById('result-seven').appendChild(h1);

    setTimeout(function() {
      let result = document.getElementById("result-seven");
      result.removeChild(result.lastElementChild);
    }, 5000)
  }


}
