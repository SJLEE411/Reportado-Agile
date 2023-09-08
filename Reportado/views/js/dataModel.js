// function fillTheFiancials() {
//   //AKTIV
//   let companyName = document.querySelector('#companyName');
//   companyName.value = 'ABC Сompany';
//   let industryName = document.querySelector('#textarea');
//   industryName.value = 'Here is company introduction';
//   let cash1 = document.querySelector('.Cash-Year1');
//   cash1.value = 120;
//   let cash2 = document.querySelector('.Cash-Year2');
//   cash2.value = 260;
//   let inventory1 = document.querySelector('.Inventory-Year1');
//   inventory1.value = 400;
//   let inventory2 = document.querySelector('.Inventory-Year2');
//   inventory2.value = 390;
//   let debtor1 = document.querySelector('.Debtors-Year1');
//   debtor1.value = 220;
//   let debtor2 = document.querySelector('.Debtors-Year2');
//   debtor2.value = 210;
//   let otherDebtor1 = document.querySelector('.Other-Current-Assets-Year1');
//   otherDebtor1.value = 130;
//   let otherDebtor2 = document.querySelector('.Other-Current-Assets-Year2');
//   otherDebtor2.value = 100;
//   let currentAssets1 = document.querySelector('.Current-Assets-Year1');
//   currentAssets1.value =
//     Number(cash1.value) +
//     Number(inventory1.value) +
//     Number(debtor1.value) +
//     Number(otherDebtor1.value);
//   let currentAssets2 = document.querySelector('.Current-Assets-Year2');
//   currentAssets2.value =
//     Number(cash2.value) +
//     Number(inventory2.value) +
//     Number(debtor2.value) +
//     Number(otherDebtor2.value);

//   let plant1 = document.querySelector('.Propert-Plant-Equipment-Year1');
//   plant1.value = 800;
//   let plant2 = document.querySelector('.Propert-Plant-Equipment-Year2');
//   plant2.value = 800;
//   let intangible1 = document.querySelector('.Intangible-Assets-Year1');
//   intangible1.value = 70;
//   let intangible2 = document.querySelector('.Intangible-Assets-Year2');
//   intangible2.value = 70;
//   let loanReceivable1 = document.querySelector('.Loan-Recievable-Year1');
//   loanReceivable1.value = 110;
//   let loanReceivable2 = document.querySelector('.Loan-Recievable-Year2');
//   loanReceivable2.value = 110;
//   let otherNonCurrent1 = document.querySelector(
//     '.Other-Non-Current-Assets-Year1'
//   );
//   otherNonCurrent1.value = 20;
//   let otherNonCurrent2 = document.querySelector(
//     '.Other-Non-Current-Assets-Year2'
//   );
//   otherNonCurrent2.value = 20;
//   let nonCurrentAssets1 = document.querySelector('.Non-Current-Assets-Year1');
//   nonCurrentAssets1.value =
//     Number(plant1.value) +
//     Number(intangible1.value) +
//     Number(loanReceivable1.value) +
//     Number(otherNonCurrent1.value);
//   let nonCurrentAssets2 = document.querySelector('.Non-Current-Assets-Year2');
//   nonCurrentAssets2.value =
//     Number(plant2.value) +
//     Number(intangible2.value) +
//     Number(loanReceivable2.value) +
//     Number(otherNonCurrent2.value);

//   let totalAssets1 = document.querySelector('.Total-Assets-Year1');
//   totalAssets1.value =
//     Number(currentAssets1.value) + Number(nonCurrentAssets1.value);
//   let totalAssets2 = document.querySelector('.Total-Assets-Year2');
//   totalAssets2.value =
//     Number(currentAssets2.value) + Number(nonCurrentAssets2.value);

//   //PASSIV
//   let stLoan1 = document.querySelector('.Short-Term-Loan-Year1');
//   stLoan1.value = 60;
//   let stLoan2 = document.querySelector('.Short-Term-Loan-Year2');
//   stLoan2.value = 60;
//   let accountsPayable1 = document.querySelector('.Accounts-Payable-Year1');
//   accountsPayable1.value = 170;
//   let accountsPayable2 = document.querySelector('.Accounts-Payable-Year2');
//   accountsPayable2.value = 170;
//   let otherCurrentLiabilities1 = document.querySelector(
//     '.Other-Current-Liabilities-Year1'
//   );
//   otherCurrentLiabilities1.value = 90;
//   let otherCurrentLiabilities2 = document.querySelector(
//     '.Other-Current-Liabilities-Year2'
//   );
//   otherCurrentLiabilities2.value = 90;
//   let currentLiabilities1 = document.querySelector(
//     '.Current-Liabilities-Year1'
//   );
//   currentLiabilities1.value =
//     Number(stLoan1.value) +
//     Number(accountsPayable1.value) +
//     Number(otherCurrentLiabilities1.value);
//   let currentLiabilities2 = document.querySelector(
//     '.Current-Liabilities-Year2'
//   );
//   currentLiabilities2.value =
//     Number(stLoan2.value) +
//     Number(accountsPayable2.value) +
//     Number(otherCurrentLiabilities2.value);

//   let ltLoan1 = document.querySelector('.Long-Term-Loan-Year1');
//   ltLoan1.value = 900;
//   let ltLoan2 = document.querySelector('.Long-Term-Loan-Year2');
//   ltLoan2.value = 840;
//   let shareholderLoan1 = document.querySelector('.Shareholder-Loan-Year1');
//   shareholderLoan1.value = 150;
//   let shareholderLoan2 = document.querySelector('.Shareholder-Loan-Year2');
//   shareholderLoan2.value = 100;
//   let otherNonurrentLiabilities1 = document.querySelector(
//     '.Other-Non-Current-Liabilties-Year1'
//   );
//   otherNonurrentLiabilities1.value = 120;
//   let otherNonurrentLiabilities2 = document.querySelector(
//     '.Other-Non-Current-Liabilties-Year2'
//   );
//   otherNonurrentLiabilities2.value = 100;
//   let nonCurrentLiabilities1 = document.querySelector(
//     '.Non-Current-Liabilities-Year1'
//   );
//   nonCurrentLiabilities1.value =
//     Number(ltLoan1.value) +
//     Number(shareholderLoan1.value) +
//     Number(otherNonurrentLiabilities1.value);
//   let nonCurrentLiabilities2 = document.querySelector(
//     '.Non-Current-Liabilities-Year2'
//   );
//   nonCurrentLiabilities2.value =
//     Number(ltLoan2.value) +
//     Number(shareholderLoan2.value) +
//     Number(otherNonurrentLiabilities2.value);

//   let totalLiabilities1 = document.querySelector('.Total-Liabilities-Year1');
//   totalLiabilities1.value =
//     Number(currentLiabilities1.value) + Number(nonCurrentLiabilities1.value);
//   let totalLiabilities2 = document.querySelector('.Total-Liabilities-Year2');
//   totalLiabilities2.value =
//     Number(currentLiabilities2.value) + Number(nonCurrentLiabilities2.value);

//   let shares1 = document.querySelector('.Common-Shares-Year1');
//   shares1.value = 130;
//   let shares2 = document.querySelector('.Common-Shares-Year2');
//   shares2.value = 130;
//   let retained1 = document.querySelector('.Retained-Earnings-Year1');
//   retained1.value = 100;
//   let retained2 = document.querySelector('.Retained-Earnings-Year2');
//   retained2.value = 250;
//   let netPr1 = document.querySelector('.Accumulated-Profit-Year1');
//   netPr1.value = 150;
//   let netPr2 = document.querySelector('.Accumulated-Profit-Year2');
//   netPr2.value = 220;
//   let equity1 = document.querySelector('.Equity-Year1');
//   equity1.value =
//     Number(shares1.value) + Number(retained1.value) + Number(netPr1.value);
//   let equity2 = document.querySelector('.Equity-Year2');
//   equity2.value =
//     Number(shares2.value) + Number(retained2.value) + Number(netPr2.value);

//   let totalPassiv1 = document.querySelector(
//     '.Total-Liabilities-and-Stockholder-Equity-Year1'
//   );
//   totalPassiv1.value = Number(totalLiabilities1.value) + Number(equity1.value);
//   let totalPassiv2 = document.querySelector(
//     '.Total-Liabilities-and-Stockholder-Equity-Year2'
//   );
//   totalPassiv2.value = Number(totalLiabilities2.value) + Number(equity2.value);

//   //INCOME STATEMENT
//   let sales1 = document.querySelector('.Net-Sales-Year1');
//   sales1.value = 2000;
//   let sales2 = document.querySelector('.Net-Sales-Year2');
//   //sales2.value = 2200

//   let cogs1 = document.querySelector('.Cost-of-Sales-Year1');
//   cogs1.value = 800;
//   let cogs2 = document.querySelector('.Cost-of-Sales-Year2');
//   cogs2.value = 900;
//   let gProfit1 = document.querySelector('.Gross-Profit-Year1');
//   gProfit1.value = Number(sales1.value) - Number(cogs1.value);
//   let gProfit2 = document.querySelector('.Gross-Profit-Year2');
//   gProfit2.value = Number(sales2.value) - Number(cogs2.value);

//   let rent1 = document.querySelector('.Rent-Year1');
//   rent1.value = 300;
//   let rent2 = document.querySelector('.Rent-Year2');
//   rent2.value = 340;
//   let salaries1 = document.querySelector('.Salaries-Year1');
//   salaries1.value = 320;
//   let salaries2 = document.querySelector('.Salaries-Year2');
//   salaries2.value = 330;
//   let entert1 = document.querySelector('.Entertainment-Year1');
//   entert1.value = 40;
//   let entert2 = document.querySelector('.Entertainment-Year2');
//   entert2.value = 50;
//   let insurance1 = document.querySelector('.Insurance-Year1');
//   insurance1.value = 50;
//   let insurance2 = document.querySelector('.Insurance-Year2');
//   insurance2.value = 50;
//   let advert1 = document.querySelector('.Advertising-Year1');
//   advert1.value = 15;
//   let advert2 = document.querySelector('.Advertising-Year2');
//   advert2.value = 10;
//   let depreciation1 = document.querySelector('.Depreciation-Year1');
//   depreciation1.value = 125;
//   let depreciation2 = document.querySelector('.Depreciation-Year2');
//   depreciation2.value = 125;
//   let badDebt1 = document.querySelector('.Bad-Debt-Expense-Year1');
//   badDebt1.value = 100;
//   let badDebt2 = document.querySelector('.Bad-Debt-Expense-Year2');
//   badDebt2.value = 10;
//   let otherOp1 = document.querySelector('.Other-Operating-Expense-Year1');
//   otherOp1.value = 30;
//   let otherOp2 = document.querySelector('.Other-Operating-Expense-Year2');
//   otherOp2.value = 70;
//   let opex1 = document.querySelector('.Operating-Expenses-Year1');
//   opex1.value =
//     Number(rent1.value) +
//     Number(salaries1.value) +
//     Number(entert1.value) +
//     Number(insurance1.value) +
//     Number(advert1.value) +
//     Number(depreciation1.value) +
//     Number(badDebt1.value) +
//     Number(otherOp1.value);
//   let opex2 = document.querySelector('.Operating-Expenses-Year2');
//   opex2.value =
//     Number(rent2.value) +
//     Number(salaries2.value) +
//     Number(entert2.value) +
//     Number(insurance2.value) +
//     Number(advert2.value) +
//     Number(depreciation2.value) +
//     Number(badDebt2.value) +
//     Number(otherOp2.value);

//   let oProfit1 = document.querySelector('.Operating-Income-Year1');
//   oProfit1.value = Number(gProfit1.value) - Number(opex1.value);
//   let oProfit2 = document.querySelector('.Operating-Income-Year2');
//   oProfit2.value = Number(gProfit2.value) - Number(opex2.value);

//   let otherIncome1 = document.querySelector('.Other-Income-Year1');
//   otherIncome1.value = 60;
//   let otherIncome2 = document.querySelector('.Other-Income-Year2');
//   otherIncome2.value = 20;

//   let interestIncome1 = document.querySelector('.Interest-Income-Year1');
//   interestIncome1.value = 10;
//   let interestIncome2 = document.querySelector('.Interest-Income-Year2');
//   interestIncome2.value = 30;
//   let interestExpense1 = document.querySelector('.Interest-Expense-Year1');
//   interestExpense1.value = 125;
//   let interestExpense2 = document.querySelector('.Interest-Expense-Year2');
//   interestExpense2.value = 125;

//   let financeCost1 = document.querySelector('.Finance-Cost-Year1');
//   financeCost1.value =
//     Number(interestExpense1.value) - Number(interestIncome1.value);
//   let financeCost2 = document.querySelector('.Finance-Cost-Year2');
//   financeCost2.value =
//     Number(interestExpense2.value) - Number(interestIncome2.value);

//   let incomeBeforeTax1 = document.querySelector('.Income-Before-Tax-Year1');
//   incomeBeforeTax1.value =
//     Number(oProfit1.value) +
//     Number(otherIncome1.value) -
//     Number(financeCost1.value);
//   let incomeBeforeTax2 = document.querySelector('.Income-Before-Tax-Year2');
//   incomeBeforeTax2.value =
//     Number(oProfit2.value) +
//     Number(otherIncome2.value) -
//     Number(financeCost2.value);

//   let iTax1 = document.querySelector('.Income-Tax-Year1');
//   iTax1.value = 15;
//   let iTax2 = document.querySelector('.Income-Tax-Year2');
//   iTax2.value = 20;

//   let netProfit1 = document.querySelector('.Net-Income-Year1');
//   netProfit1.value = Number(incomeBeforeTax1.value) - Number(iTax1.value);
//   let netProfit2 = document.querySelector('.Net-Income-Year2');
//   netProfit2.value = Number(incomeBeforeTax2.value) - Number(iTax2.value);
// }
// fillTheFiancials();
//all data model should be in this file
//user submit state
// let userSubmitState = false;
// let closeBtnState = true;
//!1 query selectors
//company info
//* all html tags shall have a unique name with '-' as delimiter as the last value of its class list
//*and an unified description class value so that we can query them in bulk
//* and use unique value to quickly create key-value pair object.

//* In total we will have 4 input areas: 1) Input Company Info Area 2)Input Fin Info Area 3)Input Balance Sheet Area 4)Input Income Statement Area
//todo  refactor selectors in a bulk way.
//!1.1 company info selector Nodelist
const CompanyInfoNodes = document.querySelectorAll('.Input-Company-Info');
const SelectIndustry = document.querySelector('.Industry-Name');
const changeLogo = document.getElementById('logo-change');
//!1.2 Financial Info selector Nodelist
const FinancialInfoNodes = document.querySelectorAll('.Input-Financial-Info');
//!1.3  --------Financial number input  selector ---------- //
//!1.31----------------Balance Sheet---------------------
const BalanceSheetYear1Nodes = document.querySelectorAll(
  '.Input-Balance-Sheet-Area input.Year1'
);
const BalanceSheetYear2Nodes = document.querySelectorAll(
  '.Input-Balance-Sheet-Area input.Year2'
);
//BalanceSheet title
const BalanceSheetYear1 = document.querySelector('.Balance-Sheet-Year1');
const BalanceSheetYear2 = document.querySelector('.Balance-Sheet-Year2');
//!1.31----------------Income Statement---------------------
const IncomeStatementYear1Nodes = document.querySelectorAll(
  '.Input-Income-Statement-Area input.Year1'
);
const IncomeStatementYear2Nodes = document.querySelectorAll(
  '.Input-Income-Statement-Area input.Year2'
);
//IncomeStatement title
const IncomeStatementYear1 = document.querySelector('.Income-Statement-Year1');
const IncomeStatementYear2 = document.querySelector('.Income-Statement-Year2');
const IncomeStatementForecastY1 = document.querySelector(
  '.Income-Statement-ForecastY1'
);
const IncomeStatementForecastY2 = document.querySelector(
  '.Income-Statement-ForecastY2'
);
//========================================================

//*create objects with Node as value
const CompanyInfoObjNode = NodeArrToObj(CompanyInfoNodes, '-');
const FinancialInfoObjNode = NodeArrToObj(FinancialInfoNodes, '-');
const BalanceSheetObjNode = {
  'fiscal Year1': NodeArrToObj(BalanceSheetYear1Nodes, '-', 'Year1'),
  'fiscal Year2': NodeArrToObj(BalanceSheetYear2Nodes, '-', 'Year2'),
};
const IncomeStatementObjNode = {
  'fiscal Year1': NodeArrToObj(IncomeStatementYear1Nodes, '-', 'Year1'),
  'fiscal Year2': NodeArrToObj(IncomeStatementYear2Nodes, '-', 'Year2'),
};
FinancialInfoObjNode['Forecast Growth Rate Year1'].value = DefaultGrowthRateY1;
FinancialInfoObjNode['Forecast Growth Rate Year2'].value = DefaultGrowthRateY2;
FinancialInfoObjNode['User Currency'].value = DefaultUserCurrency;
FinancialInfoObjNode['User Unit'].value = DefaultUserUnit;
//alert msg for invalid input(blank value)
const modalAlertMsg = document.querySelector('.modal-Alert-Msg');
modalAlertMsg.classList.remove('show');
//!1.5 buttons
const InputSubmitArea = document.querySelector('.Input-Submit-Area');
const btnUploadCompanyLogo = document.querySelector('.Upload-Company-Logo');
const btnSubmitFinancial = document.querySelector('.btn-Submit-Financial');
const btnClearAll = document.querySelector('.btn-Clear-All-Financial');

//=======================================================================

//=======================================================================
//!1.6query selectors in bulk

// to limit user input into only positive numbers and decimal points to 2
const inputsY1 = document.querySelectorAll('form input.Year1');
const inputsY2 = document.querySelectorAll('form input.Year2');

//parent node container to insert forecast columns
const IncomeStatement = document.querySelectorAll(
  '.Input-Income-Statement-Area div.row.m-2'
);
// base value to calculate forecast columns
const inputsIncomeStatementY1 = document.querySelectorAll(
  '.Input-Income-Statement-Area input.Year1'
);
// base value to calculate forecast columns
const inputsIncomeStatementY2 = document.querySelectorAll(
  '.Input-Income-Statement-Area input.Year2'
);

//select income statement input area and change these attributes to fit the size of forecast data (2 columns => 4 columns)
const inputsIncomeStatement = document.querySelectorAll(
  '.Input-Income-Statement-Area div.col-3'
);

//======================================================================================

//!2 add event listeners

//!2.1 if forecast growth rate changes, then caculate Forecast columns based on FY1 and FY2
[
  FinancialInfoObjNode['Forecast Growth Rate Year1'],
  FinancialInfoObjNode['Forecast Growth Rate Year2'],
].forEach(el => {
  el.addEventListener('change', e => {
    e.preventDefault();
    if (FinancialInfoObjNode['User Years of Report'].value === '2') {
      forecastIncomeValueCalc('FY2');
    }
    if (FinancialInfoObjNode['User Years of Report'].value === '1') {
      forecastIncomeValueCalc('FY1');
      // inputsIncomeStatementY1.forEach(e => {
      //   e.parentNode.nextElementSibling.nextElementSibling.firstElementChild.value =
      //     parseTo(
      //       e.value *
      //         (1 + +FinancialInfoObjNode['Forecast Growth Rate Year1'].value)
      //     );
      //   e.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value =
      //     parseTo(
      //       e.value *
      //         (1 + +FinancialInfoObjNode['Forecast Growth Rate Year1'].value) *
      //         (1 + +FinancialInfoObjNode['Forecast Growth Rate Year2'].value)
      //     );
      // });
    }
  });
});
//!2.2 add event listener to each of inputsIncomeStatementY1 to pop in values for forecast columns
// if 2 years of report, calculate forecasted data based on year 2

inputsIncomeStatementY2.forEach(el => {
  el.addEventListener('change', e => {
    e.preventDefault();
    if (FinancialInfoObjNode['User Years of Report'].value === '2') {
      forecastIncomeValueCalc('FY2');
    }
  });
});

// if 1 year of report, calculate forecasted data based on year 1
inputsIncomeStatementY1.forEach(el => {
  el.addEventListener('change', e => {
    e.preventDefault();
    if (FinancialInfoObjNode['User Years of Report'].value === '1') {
      forecastIncomeValueCalc('FY1');
    }
  });
});

//======================================================================================
// change the column width and margin settings in the original html.
//inputsIncomeStatement is the collection of parentElement of input field
inputsIncomeStatement.forEach(e => {
  e.classList.replace('col-3', 'col-2');
  e.classList.replace('me-auto', 'm-auto');
});
//extract nodelist's attribute,so that when we insert forecast columns, we dynamically get the right attributs (for example:year2 => ForecastY1)
//IncomeStatement is the collection of parentElement of parentElement of input field
for (let i = 1; i < IncomeStatement.length; i++) {
  IncomeStatement[i].insertAdjacentHTML(
    'beforeend',
    `
      <div class="col-2 m-auto">
                      <input
                        readonly
                        type="number"
                        class="${IncomeStatement[
                          i
                        ].lastElementChild.lastElementChild.classList.value.replaceAll(
                          'Year2',
                          'ForecastY1'
                        )}"
                      />
                    </div>
      <div class="col-2 m-auto">
        <input
          readonly
          type="number"
          class="${IncomeStatement[
            i
          ].lastElementChild.lastElementChild.classList.value.replaceAll(
            'Year2',
            'ForecastY2'
          )}"
        />
      </div>
    `
  );
}
// !now we have insert forecast html nodes, we can assign them to variables.
const IncomeStatementForecastY1Nodes =
  document.querySelectorAll('input.ForecastY1');
// now we have insert forecast html nodes, we can assign them to variables
const IncomeStatementForecastY2Nodes =
  document.querySelectorAll('input.ForecastY2');
// we also add the forecast columns into IncomestatementObjNode
IncomeStatementObjNode['Forecast Year1'] = NodeArrToObj(
  IncomeStatementForecastY1Nodes,
  '-',
  'Year1'
);
IncomeStatementObjNode['Forecast Year2'] = NodeArrToObj(
  IncomeStatementForecastY2Nodes,
  '-',
  'Year2'
);
// we forece all data into 2 digits after decimal.
const inputs = [...inputsY1, ...inputsY2];
inputs.forEach(el => {
  if (
    el.classList[2] !== 'Accumulated-Profit-Year1' &&
    el.classList[2] !== 'Accumulated-Profit-Year2'
  ) {
    el.addEventListener('change', e => {
      handleNumberChanged(e);
    });
  } else {
    el.addEventListener('change', e => {
      handleNumberChanged(e, 'positive|negative');
    });
  }
});

// create value chain so that input change cause recalculate of other financial data
inputsY1.forEach(el => {
  el.addEventListener('change', e => {
    BalanceSheetObjNode['fiscal Year1']['Current Assets'].value =
      Number(BalanceSheetObjNode['fiscal Year1']['Cash'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Inventory'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Debtors'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Other Current Assets'].value);

    BalanceSheetObjNode['fiscal Year1']['Non Current Assets'].value =
      Number(
        BalanceSheetObjNode['fiscal Year1']['Property Plant Equipment'].value
      ) +
      Number(BalanceSheetObjNode['fiscal Year1']['Intangible Assets'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Loan Recievable'].value) +
      Number(
        BalanceSheetObjNode['fiscal Year1']['Other Non Current Assets'].value
      );

    BalanceSheetObjNode['fiscal Year1']['Total Assets'].value =
      Number(BalanceSheetObjNode['fiscal Year1']['Current Assets'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Non Current Assets'].value);

    BalanceSheetObjNode['fiscal Year1']['Current Liabilities'].value =
      // Number(BalanceSheetObjNode['fiscal Year1']['Trade Payables'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Short Term Loan'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Accounts Payable'].value) +
      // Number(BalanceSheetObjNode['fiscal Year1']['Interest Payable'].value) +
      Number(
        BalanceSheetObjNode['fiscal Year1']['Other Current Liabilities'].value
      );

    BalanceSheetObjNode['fiscal Year1']['Non Current Liabilities'].value =
      Number(BalanceSheetObjNode['fiscal Year1']['Long Term Loan'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Shareholder Loan'].value) +
      Number(
        BalanceSheetObjNode['fiscal Year1']['Other Non Current Liabilties']
          .value
      );

    BalanceSheetObjNode['fiscal Year1']['Equity'].value =
      Number(BalanceSheetObjNode['fiscal Year1']['Common Shares'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Retained Earnings'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Accumulated Profit'].value);

    BalanceSheetObjNode['fiscal Year1']['Total Liabilities'].value =
      Number(BalanceSheetObjNode['fiscal Year1']['Current Liabilities'].value) +
      Number(
        BalanceSheetObjNode['fiscal Year1']['Non Current Liabilities'].value
      );

    BalanceSheetObjNode['fiscal Year1'][
      'Total Liabilities and Stockholder Equity'
    ].value =
      Number(BalanceSheetObjNode['fiscal Year1']['Total Liabilities'].value) +
      Number(BalanceSheetObjNode['fiscal Year1']['Equity'].value);

    IncomeStatementObjNode['fiscal Year1']['Gross Profit'].value =
      Number(IncomeStatementObjNode['fiscal Year1']['Net Sales'].value) -
      Number(IncomeStatementObjNode['fiscal Year1']['Cost of Sales'].value);

    IncomeStatementObjNode['fiscal Year1']['Operating Expenses'].value =
      Number(IncomeStatementObjNode['fiscal Year1']['Rent'].value) +
      Number(IncomeStatementObjNode['fiscal Year1']['Salaries'].value) +
      Number(IncomeStatementObjNode['fiscal Year1']['Entertainment'].value) +
      Number(IncomeStatementObjNode['fiscal Year1']['Insurance'].value) +
      Number(IncomeStatementObjNode['fiscal Year1']['Advertising'].value) +
      Number(IncomeStatementObjNode['fiscal Year1']['Depreciation'].value) +
      Number(IncomeStatementObjNode['fiscal Year1']['Bad Debt Expense'].value) +
      Number(
        IncomeStatementObjNode['fiscal Year1']['Other Operating Expense'].value
      );

    IncomeStatementObjNode['fiscal Year1']['Operating Income'].value =
      Number(IncomeStatementObjNode['fiscal Year1']['Gross Profit'].value) -
      Number(
        IncomeStatementObjNode['fiscal Year1']['Operating Expenses'].value
      );

    IncomeStatementObjNode['fiscal Year1']['Finance Cost'].value =
      Number(IncomeStatementObjNode['fiscal Year1']['Interest Expense'].value) -
      Number(IncomeStatementObjNode['fiscal Year1']['Interest Income'].value);

    IncomeStatementObjNode['fiscal Year1']['Income Before Tax'].value =
      Number(IncomeStatementObjNode['fiscal Year1']['Operating Income'].value) +
      Number(IncomeStatementObjNode['fiscal Year1']['Other Income'].value) -
      Number(IncomeStatementObjNode['fiscal Year1']['Finance Cost'].value);

    IncomeStatementObjNode['fiscal Year1']['Net Income'].value =
      Number(IncomeStatementObjNode['fiscal Year1']['Operating Income'].value) +
      Number(IncomeStatementObjNode['fiscal Year1']['Other Income'].value) -
      Number(IncomeStatementObjNode['fiscal Year1']['Finance Cost'].value) -
      Number(IncomeStatementObjNode['fiscal Year1']['Income Tax'].value);

    // ========end of addeventListener==============
  });

  //===========end of forEach==============
});

inputsY2.forEach(el => {
  el.addEventListener('change', e => {
    BalanceSheetObjNode['fiscal Year2']['Current Assets'].value =
      Number(BalanceSheetObjNode['fiscal Year2']['Cash'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Inventory'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Debtors'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Other Current Assets'].value);

    BalanceSheetObjNode['fiscal Year2']['Non Current Assets'].value =
      Number(
        BalanceSheetObjNode['fiscal Year2']['Property Plant Equipment'].value
      ) +
      Number(BalanceSheetObjNode['fiscal Year2']['Intangible Assets'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Loan Recievable'].value) +
      Number(
        BalanceSheetObjNode['fiscal Year2']['Other Non Current Assets'].value
      );

    BalanceSheetObjNode['fiscal Year2']['Total Assets'].value =
      Number(BalanceSheetObjNode['fiscal Year2']['Current Assets'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Non Current Assets'].value);

    BalanceSheetObjNode['fiscal Year2']['Current Liabilities'].value =
      // Number(BalanceSheetObjNode['fiscal Year2']['Trade Payables'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Short Term Loan'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Accounts Payable'].value) +
      // Number(BalanceSheetObjNode['fiscal Year2']['Interest Payable'].value) +
      Number(
        BalanceSheetObjNode['fiscal Year2']['Other Current Liabilities'].value
      );

    BalanceSheetObjNode['fiscal Year2']['Non Current Liabilities'].value =
      Number(BalanceSheetObjNode['fiscal Year2']['Long Term Loan'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Shareholder Loan'].value) +
      Number(
        BalanceSheetObjNode['fiscal Year2']['Other Non Current Liabilties']
          .value
      );

    BalanceSheetObjNode['fiscal Year2']['Equity'].value =
      Number(BalanceSheetObjNode['fiscal Year2']['Common Shares'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Retained Earnings'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Accumulated Profit'].value);

    BalanceSheetObjNode['fiscal Year2']['Total Liabilities'].value =
      Number(BalanceSheetObjNode['fiscal Year2']['Current Liabilities'].value) +
      Number(
        BalanceSheetObjNode['fiscal Year2']['Non Current Liabilities'].value
      );

    BalanceSheetObjNode['fiscal Year2'][
      'Total Liabilities and Stockholder Equity'
    ].value =
      Number(BalanceSheetObjNode['fiscal Year2']['Total Liabilities'].value) +
      Number(BalanceSheetObjNode['fiscal Year2']['Equity'].value);

    IncomeStatementObjNode['fiscal Year2']['Gross Profit'].value =
      Number(IncomeStatementObjNode['fiscal Year2']['Net Sales'].value) -
      Number(IncomeStatementObjNode['fiscal Year2']['Cost of Sales'].value);

    IncomeStatementObjNode['fiscal Year2']['Operating Expenses'].value =
      Number(IncomeStatementObjNode['fiscal Year2']['Rent'].value) +
      Number(IncomeStatementObjNode['fiscal Year2']['Salaries'].value) +
      Number(IncomeStatementObjNode['fiscal Year2']['Entertainment'].value) +
      Number(IncomeStatementObjNode['fiscal Year2']['Insurance'].value) +
      Number(IncomeStatementObjNode['fiscal Year2']['Advertising'].value) +
      Number(IncomeStatementObjNode['fiscal Year2']['Depreciation'].value) +
      Number(IncomeStatementObjNode['fiscal Year2']['Bad Debt Expense'].value) +
      Number(
        IncomeStatementObjNode['fiscal Year2']['Other Operating Expense'].value
      );

    IncomeStatementObjNode['fiscal Year2']['Operating Income'].value =
      Number(IncomeStatementObjNode['fiscal Year2']['Gross Profit'].value) -
      Number(
        IncomeStatementObjNode['fiscal Year2']['Operating Expenses'].value
      );

    IncomeStatementObjNode['fiscal Year2']['Finance Cost'].value =
      Number(IncomeStatementObjNode['fiscal Year2']['Interest Expense'].value) -
      Number(IncomeStatementObjNode['fiscal Year2']['Interest Income'].value);

    IncomeStatementObjNode['fiscal Year2']['Income Before Tax'].value =
      Number(IncomeStatementObjNode['fiscal Year2']['Operating Income'].value) +
      Number(IncomeStatementObjNode['fiscal Year2']['Other Income'].value) -
      Number(IncomeStatementObjNode['fiscal Year2']['Finance Cost'].value);

    IncomeStatementObjNode['fiscal Year2']['Net Income'].value =
      Number(IncomeStatementObjNode['fiscal Year2']['Operating Income'].value) +
      Number(IncomeStatementObjNode['fiscal Year2']['Other Income'].value) -
      Number(IncomeStatementObjNode['fiscal Year2']['Finance Cost'].value) -
      Number(IncomeStatementObjNode['fiscal Year2']['Income Tax'].value);

    // ========end of addeventListener==============
  });

  //===========end of forEach==============
});

//set default user fiscal years
FinancialInfoObjNode['Start of fiscal Year'].value = DefaultStartYear;
BalanceSheetYear1.innerHTML =
  IncomeStatementYear1.innerHTML = `FY-${FinancialInfoObjNode['Start of fiscal Year'].value}`;
BalanceSheetYear2.innerHTML = IncomeStatementYear2.innerHTML = `FY-${
  +FinancialInfoObjNode['Start of fiscal Year'].value + 1
}`;
IncomeStatementForecastY1.innerHTML = `FY-${
  +FinancialInfoObjNode['Start of fiscal Year'].value + 2
}F`;
IncomeStatementForecastY2.innerHTML = `FY-${
  +FinancialInfoObjNode['Start of fiscal Year'].value + 3
}F`;
// add listener to track changes of start year and number of fiscal years
FinancialInfoObjNode['Start of fiscal Year'].addEventListener('change', e => {
  e.preventDefault();
  //if user change to the last year of available report years
  nodeChoice(
    FinancialInfoObjNode['Start of fiscal Year'],
    FinancialInfoObjNode['User Years of Report']
  );
});
//set default user report years;
FinancialInfoObjNode['User Years of Report'].value = DefaultnumOfFY;

//!===================When user change years of report==================
//query input column for year1 and year2
const inputYear2Nodes = document.querySelectorAll('form .Year2');
const inputYear1Nodes = document.querySelectorAll('form .Year1');
//query the alert msg modal and set it to hidden in default
const yearsOfReportAlertMsg = document.querySelector(
  '.modal-Years-Of-Report-Alert-Msg'
);
yearsOfReportAlertMsg.classList.remove('show');

//add listener to the change event
FinancialInfoObjNode['User Years of Report'].addEventListener(
  'change',
  function (e) {
    e.preventDefault();

    //query and set the button value for user to choose which year to keep
    const btnKeepFY1 = document.querySelector('.btn-Keep-FY1');
    const btnKeepFY2 = document.querySelector('.btn-Keep-FY2');
    btnKeepFY1.innerHTML = FinancialInfoObjNode['Start of fiscal Year'].value;
    btnKeepFY2.innerHTML =
      +FinancialInfoObjNode['Start of fiscal Year'].value + 1;

    //user try to change years of report which cause a lot of following changes,this is when user choose to change from 2 years to 1 year
    if (FinancialInfoObjNode['User Years of Report'].value === '1') {
      //pop up and ask user to decide which year to keep
      msgShow(yearsOfReportAlertMsg);
      const alertmsgclose = document.querySelector('.alert-msg-close');
      alertmsgclose.addEventListener('click', e => {
        msgClose(yearsOfReportAlertMsg);
        //if user change mind and close the alert msg
        //change back user years of report to 2 years and the start of fiscal year to FY1
        FinancialInfoObjNode['User Years of Report'].value = '2';
        FinancialInfoObjNode['Start of fiscal Year'].value =
          btnKeepFY1.innerHTML;
      });

      //user choose keep year2
      btnKeepFY2.addEventListener('click', e => {
        e.preventDefault();
        //hide year1 column
        nodeHide(inputYear1Nodes);

        //style FY2
        inputYear2Nodes.forEach(e => {
          e.parentElement.classList.add('m-auto');
        });
        //change the start year of report to FY2
        FinancialInfoObjNode['Start of fiscal Year'].value =
          btnKeepFY2.innerHTML;
        msgClose(yearsOfReportAlertMsg);

        // change the income statement year title accordingly
        nodeChoiceYeasOfReport(
          FinancialInfoObjNode['Start of fiscal Year'],
          FinancialInfoObjNode['User Years of Report']
        );

        //in case user choose the last year
        if (
          +FinancialInfoObjNode['Start of fiscal Year'].value ===
          DefaultfiscalYears.at(-1)
        ) {
          FinancialInfoObjNode['User Years of Report'].value = 1;
          document.querySelector('.option-2-years').classList.add('d-none');
        }
        //=================================
        //reset event Listener for forecast value
        inputsIncomeStatementY2.forEach(el => {
          el.addEventListener('change', e => {
            e.preventDefault();
            forecastIncomeValueCalc('FY2');
          });
        });
      });

      //user choose keep year1
      btnKeepFY1.addEventListener('click', e => {
        e.preventDefault();
        //hide year2
        nodeHide(inputYear2Nodes);
        msgClose(yearsOfReportAlertMsg);

        // change the income statement year title accordingly
        nodeChoiceYeasOfReport(
          FinancialInfoObjNode['Start of fiscal Year'],
          FinancialInfoObjNode['User Years of Report']
        );

        //it is year2=>year1, so we change all forecast based on fy1
        forecastIncomeValueCalc('FY1');
      });
    }
    // if user change years from 1 to 2 years
    else {
      // change back the start of fiscal year back to FY1
      // change the balance and income statement year title accordingly
      nodeChoiceYeasOfReport(
        FinancialInfoObjNode['Start of fiscal Year'],
        FinancialInfoObjNode['User Years of Report']
      );
      //IF USER CHANGE FROM FY1,we just add a new empty column
      //if user change from FY2(FY1 contains 'd-none')
      //we copy value from FY2 to FY1,and reset FY2 value to empty/0
      if (BalanceSheetYear1.parentNode.classList.contains('d-none')) {
        nodeValueCopy(inputYear1Nodes, inputYear2Nodes);
      }
      // reveal the 2 years input columns
      nodeShow(inputYear2Nodes);
      nodeShow(inputYear1Nodes);

      //it is 1=>2, so we change all forecast based on fy2
      forecastIncomeValueCalc('FY2');
    }
  }
);

//==================================================================
//!class
//Parent FinData class
class FinData {
  _userCompanyInfo;
  _userBasicFinSelect;
  _ratios;
  _userFinData;
  //ratios

  // _userInputFinData;
  constructor(user_CompanyInfo, user_BasicFinSelect, user_FinData) {
    //initialise necessary elements when app class object is called and created
    //add all necessary event handlers
    this._userCompanyInfo = user_CompanyInfo;
    this._userBasicFinSelect = user_BasicFinSelect;
    this._userFinData = user_FinData;
  }
}
//---------------------------------------------------------//

/// -------------------- RATIOS CALCULATIONS -------------------- ///

// Arithmetic Functions used to calculate the ratios

// Divide Function - - testing using jest
const div = (a, b) => a / b;
// Addition Function - testing using jest
const sum = (a, b, c) => a + b + c;
const sum1 = (a, b) => a + b;
// Subtraction Function - testing using jest
const sub = (a, b) => a - b;
// Subtraction Function - testing using jest
const mul = (a, b) => a * b;

// class for user object
class FinDataYear extends FinData {
  constructor(user_CompanyInfo, user_BasicFinSelect, user_FinData) {
    super(user_CompanyInfo, user_BasicFinSelect, user_FinData);
    this.startOfFY = this._userBasicFinSelect['Start of fiscal Year'];
    this.endOfFY = this._userBasicFinSelect['End of fiscal Year'];
    this.calcRatios();
    this._userFinData.ratios = this._ratios;
  }
  calcRatios() {
    const err = 'error,denominator is 0!'; // Throw error when denominator is Zero
    //if choose 2 years
    if (+this._userBasicFinSelect['User Years of Report'] === 2) {
      this._ratios = {
        'Solvency Ratios': {
          /// -------------------- SOLVENCY RATIOS -------------------- ///
          [this.startOfFY]: {
            // Debt Ratio = Total Liabilities / Total Assets
            // Manual check of the divide function for this ratio - Calculates correctly
            debt_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Total Assets'
              ] !== 0
                ? parseTo(
                    // Here we use the div function - which has been tested using jest
                    div(
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Total Liabilities'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Total Assets'
                      ]
                    )
                  )
                : err,
            // Debt Equity Ratio = Total Liabilities / Equity
            // Manual check of the divide function for this ratio - Calculates correctly
            debt_to_equity_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY]['Equity'] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Total Liabilities'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Equity'
                      ]
                    )
                  )
                : err,
            // Interest Coverage Ratio = (Operating Profit + Other Income + Depreciation/Amortization) / Interest Expense
            interest_coverage_ratio:
              this._userFinData['Income Statement'][this.startOfFY][
                'Interest Expense'
              ] !== 0
                ? parseTo(
                    div(
                      sum(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Operating Income'
                        ],
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Depreciation'
                        ],
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Other Income'
                        ]
                      ),
                      this._userFinData['Income Statement'][this.startOfFY][
                        'Interest Expense'
                      ]
                    )
                  )
                : err,
          },
          [this.endOfFY]: {
            // Debt Ratio = Total Liabilities / Total Assets
            debt_ratio:
              this._userFinData['Balance Sheet'][this.endOfFY][
                'Total Assets'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.endOfFY][
                        'Total Liabilities'
                      ],
                      this._userFinData['Balance Sheet'][this.endOfFY][
                        'Total Assets'
                      ]
                    )
                  )
                : err,
            // Debt Equity Ratio = Total Liabilities / Equity
            debt_to_equity_ratio:
              this._userFinData['Balance Sheet'][this.endOfFY]['Equity'] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.endOfFY][
                        'Total Liabilities'
                      ],
                      this._userFinData['Balance Sheet'][this.endOfFY]['Equity']
                    )
                  )
                : err,
            // Interest Coverage Ratio = (Operating Profit + Depreciation/Amortization) / Interest Expense
            interest_coverage_ratio:
              this._userFinData['Income Statement'][this.endOfFY][
                'Interest Expense'
              ] !== 0
                ? parseTo(
                    div(
                      sum(
                        this._userFinData['Income Statement'][this.endOfFY][
                          'Operating Income'
                        ],
                        this._userFinData['Income Statement'][this.endOfFY][
                          'Depreciation'
                        ],
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Other Income'
                        ]
                      ),
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Interest Expense'
                      ]
                    )
                  )
                : err,
          },
        },
        'Liquidity Ratios': {
          [this.startOfFY]: {
            /// -------------------- LIQUIDITY RATIOS -------------------- ///
            // Current Ratio = Current Assets / Current Liabilities
            current_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Current Assets'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
            // Quick Ratio = Current Assets - Inventory / Current Liabilities
            quick_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      sub(
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Current Assets'
                        ],
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Inventory'
                        ]
                      ),
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
            // Cash Ratio = Cash / Current Liabilities
            cash_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Cash'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
          },
          [this.endOfFY]: {
            /// -------------------- LIQUIDITY RATIOS -------------------- ///
            // Current Ratio = Current Assets / Current Liabilities
            // checked
            current_ratio:
              this._userFinData['Balance Sheet'][this.endOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.endOfFY][
                        'Current Assets'
                      ],
                      this._userFinData['Balance Sheet'][this.endOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
            // Quick Ratio = Current Assets - Inventory / Current Liabilities
            quick_ratio:
              this._userFinData['Balance Sheet'][this.endOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      sub(
                        this._userFinData['Balance Sheet'][this.endOfFY][
                          'Current Assets'
                        ],
                        this._userFinData['Balance Sheet'][this.endOfFY][
                          'Inventory'
                        ]
                      ),
                      this._userFinData['Balance Sheet'][this.endOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
            // Cash Ratio = Cash / Current Liabilities
            cash_ratio:
              this._userFinData['Balance Sheet'][this.endOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.endOfFY]['Cash'],
                      this._userFinData['Balance Sheet'][this.endOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
          },
        },
        'Profitability Ratios': {
          [this.startOfFY]: {
            /// -------------------- PROFITABILITY RATIOS -------------------- ///
            // Net Profit Margin = (Net Profit / Sales) * 100
            // Comparable Industry info in %
            // Checked - This is now *100 therefore in percentage
            profit_margin:
              this._userFinData['Income Statement'][this.startOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    mul(
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Income'
                        ],
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Sales'
                        ]
                      ),
                      100
                    )
                  )
                : err,
            // Return on Equity Ratio = Net profit / Equity
            // Comparable Industry info in %
            return_on_equity_after_tax:
              this._userFinData['Balance Sheet'][this.startOfFY]['Equity'] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.startOfFY][
                        'Net Income'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Equity'
                      ]
                    )
                  )
                : err,
            // Return on Assets = Net profit / Total Assets *100
            // Represented as %
            return_on_assets:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Total Assets'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.startOfFY][
                        'Net Income'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Total Assets'
                      ]
                    )
                  )
                : err,
            // Gross Profit Margin = (Gross Profit / Sales)*100
            // Checked - we need to think about format here ... should be in Percentage ...
            gross_margin:
              this._userFinData['Income Statement'][this.startOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.startOfFY][
                        'Gross Profit'
                      ],
                      this._userFinData['Income Statement'][this.startOfFY][
                        'Net Sales'
                      ]
                    )
                  )
                : err,
            // Operating Profit Margin = Operating Profit / Sales
            // Checked - we need to think about format here ... should be in Percentage ...
            operating_margin:
              this._userFinData['Income Statement'][this.startOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.startOfFY][
                        'Operating Income'
                      ],
                      this._userFinData['Income Statement'][this.startOfFY][
                        'Net Sales'
                      ]
                    )
                  )
                : err,
          },
          [this.endOfFY]: {
            /// -------------------- PROFITABILITY RATIOS -------------------- ///
            // Net Profit Margin = (Net Profit / Sales) * 100
            // Checked - we need to think about format here ... should be in Percentage ...
            profit_margin:
              this._userFinData['Income Statement'][this.endOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Net Income'
                      ],
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Net Sales'
                      ]
                    )
                  )
                : err,
            // Return on Equity Ratio = Net profit / Equity
            return_on_equity_after_tax:
              this._userFinData['Balance Sheet'][this.endOfFY]['Equity'] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Net Income'
                      ],
                      this._userFinData['Balance Sheet'][this.endOfFY]['Equity']
                    )
                  )
                : err,
            // Return on Assets = Net profit / Total Assets
            return_on_assets:
              this._userFinData['Balance Sheet'][this.endOfFY][
                'Total Assets'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Net Income'
                      ],
                      this._userFinData['Balance Sheet'][this.endOfFY][
                        'Total Assets'
                      ]
                    )
                  )
                : err,
            // Gross Profit Margin = (Gross Profit / Sales)*100
            // Checked - we need to think about format here ... should be in Percentage ...
            gross_margin:
              this._userFinData['Income Statement'][this.endOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Gross Profit'
                      ],
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Net Sales'
                      ]
                    )
                  )
                : err,
            // Operating Profit Margin = Operating Profit / Sales
            // Checked - we need to think about format here ... should be in Percentage ...
            operating_margin:
              this._userFinData['Income Statement'][this.endOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Operating Income'
                      ],
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Net Sales'
                      ]
                    )
                  )
                : err,
          },
        },
        'Activity Ratios': {
          [this.startOfFY]: {
            /// -------------------- ACTIVITY  RATIOS -------------------- ///
            // Receivable Turnover Ratio = 365 / (Credit Sales / Accounts receivable)
            // Checked - this output should be in Days
            receivables_turnover_in_days:
              this._userFinData['Balance Sheet'][this.startOfFY]['Debtors'] !==
              0
                ? parseTo(
                    div(
                      365,
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Sales'
                        ],
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Debtors'
                        ]
                      )
                    )
                  )
                : err,
            // Asset Turnover Ratio (days) = 365 / (Net Sales / Total Assets)
            // Checked - answer should be eg: 2 times
            asset_turnover_in_days:
              this._userFinData['Income Statement'][this.startOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    365 /
                      (this._userFinData['Income Statement'][this.startOfFY][
                        'Net Sales'
                      ] /
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Total Assets'
                        ])
                  )
                : err,
            // Inventory Turnover Ratio = 365 / (Cost of Sales / Inventory)
            // Checked - answer should be in days, eg: 20 days
            inventory_turnover_in_days:
              this._userFinData['Income Statement'][this.startOfFY][
                'Cost of Sales'
              ] &&
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Inventory'
              ] !== 0
                ? parseTo(
                    div(
                      365,
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Cost of Sales'
                        ],
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Inventory'
                        ]
                      )
                    )
                  )
                : err,
          },
          [this.endOfFY]: {
            /// -------------------- ACTIVITY  RATIOS -------------------- ///
            // Receivable Turnover Ratio = 365 / (Credit Sales / Accounts receivable)
            // Checked - this output should be in Days
            receivables_turnover_in_days:
              this._userFinData['Balance Sheet'][this.endOfFY]['Debtors'] !== 0
                ? parseTo(
                    div(
                      365,
                      div(
                        this._userFinData['Income Statement'][this.endOfFY][
                          'Net Sales'
                        ],
                        this._userFinData['Balance Sheet'][this.endOfFY][
                          'Debtors'
                        ]
                      )
                    )
                  )
                : err,
            // Asset Turnover Ratio (days) = Net Sales / Total Assets
            // Checked - answer should be eg: 2 times
            asset_turnover_in_days:
              this._userFinData['Income Statement'][this.endOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    div(
                      365,
                      div(
                        this._userFinData['Income Statement'][this.endOfFY][
                          'Net Sales'
                        ],
                        this._userFinData['Balance Sheet'][this.endOfFY][
                          'Total Assets'
                        ]
                      )
                    )
                  )
                : err,
            // Inventory Turnover Ratio = 365 / (Cost of Sales / Inventory)
            // Checked - answer should be in days, eg: 20 days
            inventory_turnover_in_days:
              this._userFinData['Income Statement'][this.endOfFY][
                'Cost of Sales'
              ] &&
              this._userFinData['Balance Sheet'][this.endOfFY]['Inventory'] !==
                0
                ? parseTo(
                    div(
                      365,
                      div(
                        this._userFinData['Income Statement'][this.endOfFY][
                          'Cost of Sales'
                        ],
                        this._userFinData['Balance Sheet'][this.endOfFY][
                          'Inventory'
                        ]
                      )
                    )
                  )
                : err,
          },
        },
      };
    }
    // if choose 1 year
    if (+this._userBasicFinSelect['User Years of Report'] === 1) {
      this._ratios = {
        'Solvency Ratios': {
          /// -------------------- SOLVENCY RATIOS -------------------- ///
          [this.startOfFY]: {
            // Debt Ratio = Total Liabilities / Total Assets
            // checked
            debt_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Total Assets'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Total Liabilities'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Total Assets'
                      ]
                    )
                  )
                : err,
            // Debt Equity Ratio = Total Liabilities / Equity
            // checked
            debt_to_equity_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY]['Equity'] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Total Liabilities'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Equity'
                      ]
                    )
                  )
                : err,
            // Interest Coverage Ratio = (Operating Profit + Depreciation/Amortization) / Interest Expense
            // checked
            interest_coverage_ratio:
              this._userFinData['Income Statement'][this.startOfFY][
                'Interest Expense'
              ] !== 0
                ? parseTo(
                    div(
                      sum(
                        this._userFinData['Income Statement'][this.endOfFY][
                          'Operating Income'
                        ],
                        this._userFinData['Income Statement'][this.endOfFY][
                          'Depreciation'
                        ],
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Other Income'
                        ]
                      ),
                      this._userFinData['Income Statement'][this.endOfFY][
                        'Interest Expense'
                      ]
                    )
                  )
                : err,
          },
        },
        'Liquidity Ratios': {
          [this.startOfFY]: {
            /// -------------------- LIQUIDITY RATIOS -------------------- ///
            // Current Ratio = Current Assets / Current Liabilities
            // checked
            current_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Current Assets'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
            // Quick Ratio = Current Assets - Inventory / Current Liabilities
            // checked
            quick_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      sub(
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Current Assets'
                        ],
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Inventory'
                        ]
                      ),
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
            // Cash Ratio = Cash / Current Liabilities
            // checked
            cash_ratio:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Current Liabilities'
              ] !== 0
                ? parseTo(
                    div(
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Cash'
                      ],
                      this._userFinData['Balance Sheet'][this.startOfFY][
                        'Current Liabilities'
                      ]
                    )
                  )
                : err,
          },
        },
        'Profitability Ratios': {
          [this.startOfFY]: {
            /// -------------------- PROFITABILITY RATIOS -------------------- ///
            // Net Profit Margin = (Net Profit / Sales) * 100
            // Checked - we need to think about format here ... should be in Percentage ...
            profit_margin:
              this._userFinData['Income Statement'][this.startOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    mul(
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Income'
                        ],
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Sales'
                        ]
                      ),
                      100
                    )
                  )
                : err,
            // Return on Equity Ratio = Net profit / Equity *100
            return_on_equity_after_tax:
              this._userFinData['Balance Sheet'][this.startOfFY]['Equity'] !== 0
                ? parseTo(
                    mul(
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Income'
                        ],
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Equity'
                        ]
                      ),
                      100
                    )
                  )
                : err,
            // Return on Assets = Net profit / Total Assets
            return_on_assets:
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Total Assets'
              ] !== 0
                ? parseTo(
                    mul(
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Income'
                        ],
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Total Assets'
                        ]
                      ),
                      100
                    )
                  )
                : err,
            // Gross Profit Margin = (Gross Profit / Sales)*100
            // Checked - we need to think about format here ... should be in Percentage ...
            gross_margin:
              this._userFinData['Income Statement'][this.startOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    mul(
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Gross Profit'
                        ],
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Sales'
                        ]
                      ),
                      100
                    )
                  )
                : err,
            // Operating Profit Margin = Operating Profit / Sales
            // Checked - we need to think about format here ... should be in Percentage ...
            operating_margin:
              this._userFinData['Income Statement'][this.startOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    mul(
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Operating Income'
                        ],
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Sales'
                        ]
                      ),
                      100
                    )
                  )
                : err,
          },
        },
        'Activity Ratios': {
          [this.startOfFY]: {
            /// -------------------- ACTIVITY  RATIOS -------------------- ///
            // Receivable Turnover Ratio = 365 / (Credit Sales / Accounts receivable)
            // Checked - this output should be in Days
            receivables_turnover_in_days:
              this._userFinData['Balance Sheet'][this.startOfFY]['Debtors'] !==
              0
                ? parseTo(
                    div(
                      365,
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Sales'
                        ],
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Debtors'
                        ]
                      )
                    )
                  )
                : err,
            // Asset Turnover Ratio (days) = Net Sales / Total Assets *100
            // Checked - answer should be eg: 2 times
            asset_turnover_in_days:
              this._userFinData['Income Statement'][this.startOfFY][
                'Net Sales'
              ] !== 0
                ? parseTo(
                    mul(
                      div(
                        this._userFinData['Income Statement'][this.startOfFY][
                          'Net Sales'
                        ],
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Total Assets'
                        ]
                      ),
                      100
                    )
                  )
                : err,
            // Inventory Turnover Ratio = 365 / (Cost of Sales / Inventory)
            // Checked - answer should be in days, eg: 20 days
            inventory_turnover_in_days:
              this._userFinData['Income Statement'][this.startOfFY][
                'Cost of Sales'
              ] &&
              this._userFinData['Balance Sheet'][this.startOfFY][
                'Inventory'
              ] !== 0
                ? parseTo(
                    365 /
                      (this._userFinData['Income Statement'][this.startOfFY][
                        'Cost of Sales'
                      ] /
                        this._userFinData['Balance Sheet'][this.startOfFY][
                          'Inventory'
                        ])
                  )
                : err,
          },
        },
      };
    }
  }
}
