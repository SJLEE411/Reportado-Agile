// all user view should be in this file
const IndustryAverage = [
  '0 - Ag, Forestry, Fish',
  '1 - Agriculture - Crops',
  '2 - Agriculture - Livestock',
  '3 - Agricultural Services',
  '4 - Forestry ',
  '5 - Fishing, Hunting, Trapping',
  '6 - Mining',
  '7 - Metal Mining',
  '8 - Coal Mining',
  '9 - Oil & Gas Extraction',
  '10 - Nonmetallic Mineral Mining',
  '11 - Construction',
  '12 - Building Construction',
  '13 - Heavy Construction',
  '14 - Construction Special Trade',
  '15 - Manufacturing',
  '16 - Food & Kindred Products',
  '17 - Tobacco Products',
  '18 - Textile Mill Products',
  '19 - Apparel & Finished Fabrics',
  '20 - Lumber & Wood Products',
  '21 - Furniture & Fixtures',
  '22 - Paper & Allied Products',
  '23 - Printing & Publishing',
  '24 - Chemical & Allied Products',
  '25 - Petroleum Refining',
  '26 - Rubber & Misc Plastics',
  '27 - Leather & Leather Products',
  '28 - Stone,Clay,Glass,Concrete',
  '29 - Primary Metal Industries',
  '30 - Fabricated Metal Products',
  '31 - Machinery, Ind & Comm',
  '32 - Electronic & Electrical Eq',
  '33 - Transportation Equipment',
  '34 - Measuring Instruments',
  '35 - Misc Manufacturing',
  '36 - Transportation & Comms',
  '37 - Railroad Transportation',
  '38 - Local And Suburban Transit',
  '39 - Motor Freight Transport',
  '40 - Water Transportation',
  '41 - Transportation By Air',
  '42 - Pipelines excl Natural Gas',
  '43 - Transportation Services',
  '44 - Communications',
  '45 - Electric, Gas, & Sanitary',
  '46 - Wholesale Trade',
  '47 - Wholesale - Durable Goods',
  '48 - Wholesale - Non-Durable',
  '49 - Retail Trade',
  '50 - Building Materials & HW',
  '51 - General Merchandise Stores',
  '52 - Food Stores',
  '53 - Auto Dealer & Gas Stations',
  '54 - Apparel & Accessory Stores',
  '55 - Home Stores',
  '56 - Eating & Drinking Places',
  '57 - Miscellaneous Retail',
  '58 - Finance, Insurance, & RE',
  '59 - Depository Institutions',
  '60 - Non-Depository Credit Inst',
  '61 - Securities Brokers',
  '62 - Insurance Carriers',
  '63 - Insurance Services',
  '64 - Real Estate',
  '65 - Holding & Other Investment',
  '66 - Services',
  '67 - Hotels & Other Lodgings',
  '68 - Personal Services',
  '69 - Business Services',
  '70 - Auto Repair & Services',
  '71 - Misc Repair Services',
  '72 - Motion Pictures',
  '73 - Amusement & Recreation',
  '74 - Health Services',
  '75 - Legal Services ',
  '76 - Educational Services',
  '77 - Social Services',
  '78 - Engineering & Research',
  '79 - Miscellaneous Services',
  '80 - Public Administration',
  '81 - Non-Classifiable',
];

//generate a whole droplist
const dropDownList = IndustryAverage.map(generateDropdown).join('');

// insert the html into the parent node
SelectIndustry.insertAdjacentHTML('beforeend', dropDownList);

//function to generate one single dropdown
function generateDropdown(industryName) {
  let id = parseInt(industryName.substring(0, 2).trim());
  return `<option value=${industryName} id=${id}>
  ${industryName}
  </option>`;
}

//============================Parent class View
// class View {
//   _data;
//   render(data) {
//     this._data = data;
//     // console.log(this._data);
//     const markup = this._generateMarkup();
//     // console.log(markup);

//     this._clear();
//     this._parentElement.insertAdjacentHTML('afterbegin', markup);
//   }
//   _clear() {
//     this._parentElement.innerHTML = '';
//   }
// }

// //===========================================
// class UserCompanyInfoView extends View {
//   _parentElement = CompanyInformationReport;
//   _generateMarkup() {
//     try {
//       return Object.entries(this._data)
//         .map(this._generateMarkupPreview)
//         .join('');
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   _generateMarkupPreview(CompanyInfo) {
//     return `<div
//     class="row bg-light text-dark p-3 Company-Information-Report"
//   >
//     <div class="col"image.png>
//       <h4><strong>${CompanyInfo[0]}:</strong></h4>
//     </div>
//     <div class="col"><h4>${CompanyInfo[1]}</h4></div>
//   </div>`;
//   }
// }
// //=====================================

// class UserFinancialInfoView extends View {
//   _parentElement = FinancialInformationReport;
//   _generateMarkup() {
//     try {
//       return Object.entries(this._data)
//         .map(this._generateMarkupPreview)
//         .join('');
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   _generateMarkupPreview(FinancialInfo) {
//     return `<div
//     class="row bg-light text-dark p-3 Company-Information-Report"
//   >
//     <div class="col"image.png>
//       <h4><strong>${FinancialInfo[0]}:</strong></h4>
//     </div>
//     <div class="col"><h4>${FinancialInfo[1]}</h4></div>
//   </div>`;
//   }
// }

//user company and fin info view class
class UserInfoReportView {
  _RenderMarkup(
    parentBodyNode,
    FinDataReportBodyInfo,
    delimiter = '&&', //this causes no trouble to string in default mode
    displayOrd //to control diaplay orders if needed
  ) {
    // console.log('I am working');
    parentBodyNode.innerHTML = '';
    let FinDataBodyMarkup;
    const FinElementNames = displayOrd ?? Object.keys(FinDataReportBodyInfo); //if displayOrd exists then use it otherwise use the object's keys
    const FinElementLength = FinElementNames.length;
    //initialize BodyMarkup html;
    console.log(FinElementNames);
    for (let i = FinElementLength - 1; i >= 0; i--) {
      FinDataBodyMarkup = `<div
        class="row bg-light text-dark p-3 Company-Information-Report"
      >
        <div class="col"image.png>
          <h4><strong>${strModify(FinElementNames[i], delimiter)}:</strong></h4>
        </div>
        <div class="col"><h4>${
          FinDataReportBodyInfo[FinElementNames[i]]
        }</h4></div>
      </div>`;

      parentBodyNode.insertAdjacentHTML('afterbegin', FinDataBodyMarkup);
      // console.log(this._parentElement);
    }
  }
}
//====================================
class UserFinDataReportView {
  _RenderHeader(
    parentHeaderNode,
    BasicFinSelectInfo,
    FinDataReportBodyInfo,
    yearsOfReport
  ) {
    parentHeaderNode.innerHTML = '';
    let HeaderMarkup = '';
    if (+yearsOfReport === 2) {
      HeaderMarkup = `<tr>
  <th scope="col" width= ${DefaultTableNameColumnWidth}><h4>Names</h4></th>
  <th scope="col" style=""><h4>${BasicFinSelectInfo['Start of fiscal Year']}</h4></th>
  <th scope="col" style=""><h4>${BasicFinSelectInfo['End of fiscal Year']}</h4></th>
</tr>`;
      if (FinDataReportBodyInfo['Forecast Year1']) {
        HeaderMarkup = `<tr>
        <th scope="col" width= ${DefaultTableNameColumnWidth}><h4>Names</h4></th>
        <th scope="col" style=""><h4>${BasicFinSelectInfo['Start of fiscal Year']}</h4></th>
        <th scope="col" style=""><h4>${BasicFinSelectInfo['End of fiscal Year']}</h4></th>
        <th scope="col" style=""><h4>${BasicFinSelectInfo['Forecast Year1']}F</h4></th>
        <th scope="col" style=""><h4>${BasicFinSelectInfo['Forecast Year2']}F</h4></th>
      </tr>`;
      }
    }

    if (+yearsOfReport === 1) {
      HeaderMarkup = `<tr>
  <th scope="col" width= ${DefaultTableNameColumnWidth}><h4>Names</h4></th>
  <th scope="col" style=""><h4>${BasicFinSelectInfo['Start of fiscal Year']}</h4></th>
</tr>`;
      if (FinDataReportBodyInfo['Forecast Year1']) {
        HeaderMarkup = `<tr>
  <th scope="col" width= ${DefaultTableNameColumnWidth}><h4>Names</h4></th>
  <th scope="col" style=""><h4>${BasicFinSelectInfo['Start of fiscal Year']}</h4></th>
  <th scope="col" style=""><h4>${BasicFinSelectInfo['Forecast Year1']}F</h4></th>
  <th scope="col" style=""><h4>${BasicFinSelectInfo['Forecast Year2']}F</h4></th>
</tr>`;
      }
    }

    parentHeaderNode.insertAdjacentHTML('afterbegin', HeaderMarkup);
  }

  _RenderMarkup(
    parentBodyNode,
    FinDataReportBodyInfo,
    yearsOfReport,
    startOfFisicalYear = '2020',
    endOfFisicalYear = '2021',
    delimiter = '&&', //this causes no trouble to string in default mode
    displayOrd //only BS and IS order matters
  ) {
    // console.log('I am working');
    parentBodyNode.innerHTML = '';
    const FinElementLength = Object.entries(
      FinDataReportBodyInfo[startOfFisicalYear]
    ).length;
    //initialize BalanceSheetBodyMarkup html;
    let FinDataBodyMarkup;
    const FinElementNames =
      displayOrd ?? Object.keys(FinDataReportBodyInfo[startOfFisicalYear]); //if displayOrd exists then use it otherwise use the object's keys
    if (+yearsOfReport === 2) {
      for (let i = FinElementLength - 1; i >= 0; i--) {
        FinDataBodyMarkup = `
        <th scope="row"><h4>${strModify(
          FinElementNames[i],
          delimiter
        )}</h4></th>
        <td><h4>${numberStyle(
          FinDataReportBodyInfo[startOfFisicalYear][FinElementNames[i]]
        )}</h4></td>
        <td><h4>${numberStyle(
          FinDataReportBodyInfo[endOfFisicalYear][FinElementNames[i]]
        )}</h4></td>`;
        //if there's forecast value
        if (FinDataReportBodyInfo['Forecast Year1']) {
          FinDataBodyMarkup = `
          <th scope="row"><h4>${strModify(
            FinElementNames[i],
            delimiter
          )}</h4></th>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo[startOfFisicalYear][FinElementNames[i]]
          )}</h4></td>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo[endOfFisicalYear][FinElementNames[i]]
          )}</h4></td>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo['Forecast Year1'][
              FinElementNames[i] + ' ForecastY1'
            ]
          )}</h4></td>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo['Forecast Year2'][
              FinElementNames[i] + ' ForecastY2'
            ]
          )}</h4></td>`;
        }

        parentBodyNode.insertAdjacentHTML('afterbegin', FinDataBodyMarkup);
        // console.log(this._parentElement);
      }
    }
    if (+yearsOfReport === 1) {
      for (let i = FinElementLength - 1; i >= 0; i--) {
        FinDataBodyMarkup = `
        <th scope="row"><h4>${strModify(
          FinElementNames[i],
          delimiter
        )}</h4></th>
        <td><h4>${numberStyle(
          FinDataReportBodyInfo[startOfFisicalYear][FinElementNames[i]]
        )}</h4></td>`;
        if (FinDataReportBodyInfo['Forecast Year1']) {
          FinDataBodyMarkup = `
          <th scope="row"><h4>${FinElementNames[i]}</h4></th>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo[startOfFisicalYear][FinElementNames[i]]
          )}</h4></td>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo['Forecast Year1'][
              FinElementNames[i] + ' ForecastY1'
            ]
          )}</h4></td>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo['Forecast Year2'][
              FinElementNames[i] + ' ForecastY2'
            ]
          )}</h4></td>`;
        }

        parentBodyNode.insertAdjacentHTML('afterbegin', FinDataBodyMarkup);
      }
    }
  }
}

// userRatios class
class UserRatiosReportView {
  _RenderHeader(
    parentHeaderNode,
    BasicFinSelectInfo,
    FinDataReportBodyInfo,
    yearsOfReport
  ) {
    parentHeaderNode.innerHTML = '';
    let HeaderMarkup = '';
    if (+yearsOfReport === 2) {
      HeaderMarkup = `<tr>
    <th scope="col" width= ${DefaultTableNameColumnWidth}><h4>Names</h4></th>
    <th scope="col" style=""><h4>${BasicFinSelectInfo['Start of fiscal Year']}</h4></th>
    <th scope="col" style=""><h4>Industry</h4></th>
    <th scope="col" style=""><h4>Result</h4></th>
    <th scope="col" style=""><h4>${BasicFinSelectInfo['End of fiscal Year']}</h4></th>
    <th scope="col" style=""><h4>Industry</h4></th>
    <th scope="col" style=""><h4>Result</h4></th>
  </tr>`;
    }

    if (+yearsOfReport === 1) {
      HeaderMarkup = `<tr>
    <th scope="col" width= ${DefaultTableNameColumnWidth}><h4>Names</h4></th>
    <th scope="col" style=""><h4>${BasicFinSelectInfo['Start of fiscal Year']}</h4></th>
    <th scope="col" style=""><h4>Industry</h4></th>
    <th scope="col" style=""><h4>Result</h4></th>
  </tr>`;
    }

    parentHeaderNode.insertAdjacentHTML('afterbegin', HeaderMarkup);
  }

  _RenderMarkup(
    parentBodyNode,
    FinDataReportBodyInfo,
    indurtryRatios,
    RatioComparison,
    yearsOfReport,
    startOfFisicalYear = '2020',
    endOfFisicalYear = '2021',
    delimiter = '&&', //this causes no trouble to string in default mode
    displayOrd //only BS and IS order matters
  ) {
    // console.log('I am working');
    parentBodyNode.innerHTML = '';
    const FinElementLength = Object.entries(
      FinDataReportBodyInfo[startOfFisicalYear]
    ).length;
    //initialize BalanceSheetBodyMarkup html;
    let FinDataBodyMarkup;
    const FinElementNames =
      displayOrd ?? Object.keys(FinDataReportBodyInfo[startOfFisicalYear]); //if displayOrd exists then use it otherwise use the object's keys
    if (+yearsOfReport === 2) {
      for (let i = FinElementLength - 1; i >= 0; i--) {
        FinDataBodyMarkup = `
          <th scope="row"><h4>${strModify(
            FinElementNames[i],
            delimiter
          )}</h4></th>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo[startOfFisicalYear][FinElementNames[i]]
          )}</h4></td>
          <td><h4>${numberStyle(
            indurtryRatios[startOfFisicalYear][FinElementNames[i]]
          )}</h4></td>
          <td><h4>${
            RatioComparison[startOfFisicalYear][FinElementNames[i]]
          }</h4></td>
          <td><h4>${numberStyle(
            FinDataReportBodyInfo[endOfFisicalYear][FinElementNames[i]]
          )}</h4></td>
          <td><h4>${numberStyle(
            indurtryRatios[endOfFisicalYear][FinElementNames[i]]
          )}</h4></td>
          <td><h4>${
            RatioComparison[endOfFisicalYear][FinElementNames[i]]
          }</h4></td>`;

        parentBodyNode.insertAdjacentHTML('afterbegin', FinDataBodyMarkup);
        // console.log(this._parentElement);
      }
    }
    if (+yearsOfReport === 1) {
      for (let i = FinElementLength - 1; i >= 0; i--) {
        FinDataBodyMarkup = `
          <th scope="row"><h4>${strModify(
            FinElementNames[i],
            delimiter
          )}</h4></th>
          <td><h4>${
            FinDataReportBodyInfo[startOfFisicalYear][FinElementNames[i]]
          }</h4></td>
          <td><h4>${numberStyle(
            indurtryRatios[startOfFisicalYear][FinElementNames[i]]
          )}</h4></td>
          <td><h4>${
            RatioComparison[startOfFisicalYear][FinElementNames[i]]
          }</h4></td>
          `;

        parentBodyNode.insertAdjacentHTML('afterbegin', FinDataBodyMarkup);
      }
    }
  }
}
//========================================
//query selector for parent node of inserted html
//Insert General Info Area
let CompanyInformationReport = document.querySelector(
  '.Insert-Area.Company-Information-Report'
);
let FinancialInformationReport = document.querySelector(
  '.Insert-Area.Financial-Information-Report'
);

//Insert Balance Sheet Area
let BalanceSheetReportHeader = document.querySelector(
  '.Insert-Area.Balance-Sheet-Report-Head > thead'
);
let BalanceSheetReportBody = document.querySelector(
  '.Insert-Area.Balance-Sheet-Report-Body'
);
// Insert IS Area
let IncomeStatementReportHeader = document.querySelector(
  '.Insert-Area.Income-Statement-Report-Head >thead '
);
let IncomeStatementReportBody = document.querySelector(
  '.Insert-Area.Income-Statement-Report-Body'
);

// Insert Financial Ratios Area
//Solvency
let SolvencyFinancialRatiosReportHeader = document.querySelector(
  '.Insert-Area.Solvency.Financial-Ratios-Report-Head >thead'
);
let SolvencyFinancialRatiosReportBody = document.querySelector(
  '.Insert-Area.Solvency.Financial-Ratios-Report-Body'
);
//Liquidity
let LiquidityFinancialRatiosReportHeader = document.querySelector(
  '.Insert-Area.Liquidity.Financial-Ratios-Report-Head >thead'
);
let LiquidityFinancialRatiosReportBody = document.querySelector(
  '.Insert-Area.Liquidity.Financial-Ratios-Report-Body'
);

//Profitability
let ProfitabilityFinancialRatiosReportHeader = document.querySelector(
  '.Insert-Area.Profitability.Financial-Ratios-Report-Head >thead'
);
let ProfitabilityFinancialRatiosReportBody = document.querySelector(
  '.Insert-Area.Profitability.Financial-Ratios-Report-Body'
);

//Activity
let ActivityFinancialRatiosReportHeader = document.querySelector(
  '.Insert-Area.Activity.Financial-Ratios-Report-Head >thead'
);
let ActivityFinancialRatiosReportBody = document.querySelector(
  '.Insert-Area.Activity.Financial-Ratios-Report-Body'
);
//==========================

//control display order of user company info and fin info
const CompanyInfoDisplayOrd = [
  'Company Name',
  'Industry Name',
  'Company Intro',
];
const FinInfoDisplayOrd = [
  'User Currency',
  'User Unit',
  'Start of fiscal Year',
  'End of fiscal Year',
  'Forecast Year1',
  'Forecast Year2',
  'Forecast Growth Rate Year1',
  'Forecast Growth Rate Year2',
];

//control display order of BS and IS

const BSDisplayOrd = [
  'Total Assets',
  'Current Assets',
  'Cash',
  'Inventory',
  'Debtors',
  'Other Current Assets',
  'Non Current Assets',
  'Property Plant Equipment',
  'Intangible Assets',
  'Loan Recievable',
  'Other Non Current Assets',
  'Total Liabilities',
  'Current Liabilities',
  'Short Term Loan',
  'Accounts Payable',
  'Other Current Liabilities',
  'Non Current Liabilities',
  'Long Term Loan',
  'Shareholder Loan',
  'Other Non Current Liabilties',
  'Equity',
  'Common Shares',
  'Retained Earnings',
  'Accumulated Profit',
  'Total Liabilities and Stockholder Equity',
];

const ISDisplayOrd = [
  'Net Sales',
  'Cost of Sales',
  'Gross Profit',
  'Operating Expenses',
  'Rent',
  'Salaries',
  'Entertainment',
  'Insurance',
  'Advertising',
  'Depreciation',
  'Bad Debt Expense',
  'Other Operating Expense',
  'Operating Income',
  'Other Income',
  'Finance Cost',
  'Interest Income',
  'Interest Expense',
  'Income Before Tax',
  'Income Tax',
  'Net Income',
];
