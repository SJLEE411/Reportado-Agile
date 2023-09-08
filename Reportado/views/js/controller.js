// in charge of connect dataModel and views
'use strict';
//app class
class ReportadoApp {
  _industryData;
  _userData;
  _ratioComparison;
  chart1;
  chart2;
  chart3;
  chart4;
  constructor() {
    //--------------------------------------------------------
    //when submit, generate user financial object
    btnSubmitFinancial.addEventListener('click', this.newUserData.bind(this));
  }
  newUserData(e) {
    e.preventDefault();
    const fiscalYear1 = document
      .querySelector('div.Balance-Sheet-Year1')
      .textContent.slice(-4);
    const fiscalYear2 = document
      .querySelector('div.Balance-Sheet-Year2')
      .textContent.slice(-4);
    // console.log(fiscalYear1, fiscalYear2);

    //destruct and assign object to variable
    const { _userCompanyInfo, _userBasicFinSelect, _userFinDataObj } =
      this._dataToNumeric(fiscalYear1, fiscalYear2);
    // input valid check and if fails, popup alert message
    //pop out alert message with recheck button and confirm submit button(in case user insists submiting anyway)

    if (
      !this.checkInputValid(FinancialInfoObjNode['User Years of Report'].value)
    ) {
      try {
        //show alert msg modal
        msgShow(modalAlertMsg);
        // modalAlertMsg.classList.add('show');
        // modalAlertMsg.style.display = 'block';
        const btnalertmsgclose = document.querySelector('.btn-alert-msg-close');
        btnalertmsgclose.addEventListener('click', e => {
          // close the alert modal
          msgClose(modalAlertMsg);
          // modalAlertMsg.classList.remove('show');
          // modalAlertMsg.style.display = 'none';
        });

        // user click recheck button, no user object created
        const btnRecheckData = document.querySelector('.btn-Recheck-Data');
        btnRecheckData.addEventListener('click', e => {
          e.preventDefault();
          console.log('recheck data ');
          //colse the alert modal
          msgClose(modalAlertMsg);
          // modalAlertMsg.classList.remove('show');
          // modalAlertMsg.style.display = 'none';
          return;
        });
        // user click confirm submit, create user object
        const btnSubmitAnyway = document.querySelector('.btn-Submit-Anyway');
        btnSubmitAnyway.addEventListener('click', e => {
          e.preventDefault();
          //close the alert modal
          msgClose(modalAlertMsg);

          // modalAlertMsg.classList.remove('show');
          // modalAlertMsg.style.display = 'none';

          this._userData = new FinDataYear(
            _userCompanyInfo,
            _userBasicFinSelect,
            _userFinDataObj
          );

          //print new created userData object.
          console.log('user click submit anyway', this._userData);
          let option = {
            value: document.getElementsByTagName('select')[0].value,
          };
          console.log(option);
          console.log(option.value);
          console.log(typeof option.value);
          if (option.value === '') {
            alert('Please select an industry!');
          } else {
            fetch('/analysisManual', {
              method: 'POST',
              body: JSON.stringify(option),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then(response => response.json())
              .then(data => {
                console.log(data);
                this._industryData = data;
                this._dataCompare();
                //reset industry name before generate report
                this._userData._userCompanyInfo['Industry Name'] =
                  IndustryAverage[
                    this._userData._userCompanyInfo['Industry Name']
                  ];
                this._dataReport();
                //
         //       createPDF();
                // userSubmitState = true;
              });
          }
        });
      } catch (err) {
        console.error('err');
      }
    } else {
      //if user input good, create user object directly
      this._userData = new FinDataYear(
        _userCompanyInfo,
        _userBasicFinSelect,
        _userFinDataObj
      );
      //print new created userData object.
      console.log('user input correct!', this._userData);
      let option = { value: document.getElementsByTagName('select')[0].value };
      console.log(option.value);
      if (option.value === '') {
        alert('Please select an industry!');
      } else {
        fetch('/analysisManual', {
          method: 'POST',
          body: JSON.stringify(option),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this._industryData = data;
            this._dataCompare();
            //reset industry name before generate report
            this._userData._userCompanyInfo['Industry Name'] =
              IndustryAverage[this._userData._userCompanyInfo['Industry Name']];
            this._dataReport();
            // userSubmitState = true;
           // createPDF();
          });
      }
    }
  }
  _dataToNumeric(fy1, fy2) {
    //get a full data ready

    const _userCompanyInfo = NodeObjToValue(CompanyInfoObjNode, 'text');
    const _userBasicFinSelect = NodeValueChangeNested(
      FinancialInfoObjNode,
      'text'
    );
    //if user choose 2 years, the end of fiscal year equals start of fiscal year plus 1, else they are equal
    _userBasicFinSelect['End of fiscal Year'] =
      +FinancialInfoObjNode['User Years of Report'].value === 2
        ? _userBasicFinSelect['Start of fiscal Year'] + 1
        : _userBasicFinSelect['Start of fiscal Year'];
    // calculate forecast year1
    _userBasicFinSelect['Forecast Year1'] =
      _userBasicFinSelect['End of fiscal Year'] + 1;
    // calculate forecast year2
    _userBasicFinSelect['Forecast Year2'] =
      _userBasicFinSelect['Forecast Year1'] + 1;

    const _userFinDataObj = {
      'Balance Sheet': NodeKeyValueChangeNested(BalanceSheetObjNode, fy1, fy2),
      'Income Statement': NodeKeyValueChangeNested(
        IncomeStatementObjNode,
        fy1,
        fy2
      ),
    };
    //if 1 year, delete below props
    //in BS object, if the year not equal to user's option,delete it
    if (FinancialInfoObjNode['User Years of Report'].value === '1') {
      // console.log(_userBasicFinSelect['Start of fiscal Year']);
      for (const key of Object.keys(_userFinDataObj['Balance Sheet'])) {
        if (+key !== +_userBasicFinSelect['Start of fiscal Year']) {
          delete _userFinDataObj['Balance Sheet'][key];
        }
      }
      //in IS object, if the year not equal to user's option and not belongs to forecast year, then delete it
      for (const key of Object.keys(_userFinDataObj['Income Statement'])) {
        if (
          +key !== +_userBasicFinSelect['Start of fiscal Year'] &&
          key !== 'Forecast Year1' &&
          key !== 'Forecast Year2'
        ) {
          delete _userFinDataObj['Income Statement'][key];
        }
      }

      return { _userCompanyInfo, _userBasicFinSelect, _userFinDataObj };
    }
    return { _userCompanyInfo, _userBasicFinSelect, _userFinDataObj };
  }
  _dataCompare() {
    if (this._userData) {
      // document.querySelector('.report-preview').classList.remove('d-none');
      let NumReportYrs =
        this._userData._userBasicFinSelect['User Years of Report'];
      let startOfFisicalYear =
        this._userData._userBasicFinSelect['Start of fiscal Year'];
      let endOfFisicalYear =
        this._userData._userBasicFinSelect['End of fiscal Year'];
      // if user chooses 1 year, then compare this year's ratios with the latter year industry ratios
      if (+NumReportYrs == 1) {
        const userRatios = ObjFlatten(this._userData._ratios);
        // console.log(this._industryData);
        const industryRatios = this._industryData['industry_data'][2021];

        this._ratioComparison = {
          [[endOfFisicalYear]]: {
            ...PositiveRatios.reduce(
              (acc, cur) => ({
                ...acc,
                [cur]: compareResult(userRatios[cur], industryRatios[cur], '>'),
              }),
              {}
            ),
            ...NegativeRatios.reduce(
              (acc, cur) => ({
                ...acc,
                [cur]: compareResult(userRatios[cur], industryRatios[cur], '<'),
              }),
              {}
            ),
          },
        };
      }
      if (+NumReportYrs == 2) {
        const userRatiosY1 = {
          ...this._userData._ratios['Solvency Ratios'][startOfFisicalYear],
          ...this._userData._ratios['Liquidity Ratios'][startOfFisicalYear],
          ...this._userData._ratios['Profitability Ratios'][startOfFisicalYear],
          ...this._userData._ratios['Activity Ratios'][startOfFisicalYear],
        };

        const userRatiosY2 = {
          ...this._userData._ratios['Solvency Ratios'][endOfFisicalYear],
          ...this._userData._ratios['Liquidity Ratios'][endOfFisicalYear],
          ...this._userData._ratios['Profitability Ratios'][endOfFisicalYear],
          ...this._userData._ratios['Activity Ratios'][endOfFisicalYear],
        };
        console.log(userRatiosY1);
        console.log(userRatiosY2);

        const industryRatiosY1 = this._industryData['industry_data'][2020];
        const industryRatiosY2 = this._industryData['industry_data'][2021];
        console.log(industryRatiosY1);
        console.log(industryRatiosY2);
        this._ratioComparison = {
          [startOfFisicalYear]: {
            ...PositiveRatios.reduce(
              (acc, cur) => ({
                ...acc,
                [cur]: compareResult(
                  userRatiosY1[cur],
                  industryRatiosY1[cur],
                  '>'
                ),
              }),
              {}
            ),
            ...NegativeRatios.reduce(
              (acc, cur) => ({
                ...acc,
                [cur]: compareResult(
                  userRatiosY1[cur],
                  industryRatiosY1[cur],
                  '<'
                ),
              }),
              {}
            ),
          },

          [endOfFisicalYear]: {
            ...PositiveRatios.reduce(
              (acc, cur) => ({
                ...acc,
                [cur]: compareResult(
                  userRatiosY2[cur],
                  industryRatiosY2[cur],
                  '>'
                ),
              }),
              {}
            ),
            ...NegativeRatios.reduce(
              (acc, cur) => ({
                ...acc,
                [cur]: compareResult(
                  userRatiosY2[cur],
                  industryRatiosY2[cur],
                  '<'
                ),
              }),
              {}
            ),
          },
        };
      }
    }
    // console.log(this._ratioComparison);
  }
  _dataReport() {
    if (this._userData) {
      document.querySelector('.report-preview').classList.remove('d-none');
      let NumReportYrs =
        this._userData._userBasicFinSelect['User Years of Report'];
      let startOfFisicalYear =
        this._userData._userBasicFinSelect['Start of fiscal Year'];
      let endOfFisicalYear =
        this._userData._userBasicFinSelect['End of fiscal Year'];

      //Create instance and render different views of the report
      // 1 Company info and finanancila info
      const renderUserInfoAreas = [
        [
          CompanyInformationReport,
          this._userData._userCompanyInfo,
          ' ',
          CompanyInfoDisplayOrd,
        ],
        [
          FinancialInformationReport,
          this._userData._userBasicFinSelect,
          ' ',
          FinInfoDisplayOrd,
        ],
      ];
      const userInfoReportView = new UserInfoReportView();

      renderUserInfoAreas.forEach(e => {
        userInfoReportView._RenderMarkup(e[0], e[1], e[2], e[3]);
      });

      //2 Report view
      const userFinDataReportView = new UserFinDataReportView();
      const userRatiosReportView = new UserRatiosReportView();

      //render BS IS Areas
      const renderBSISAreas = [
        [
          BalanceSheetReportHeader,
          BalanceSheetReportBody,
          'Balance Sheet',
          BSDisplayOrd,
        ],
        [
          IncomeStatementReportHeader,
          IncomeStatementReportBody,
          'Income Statement',
          ISDisplayOrd,
        ],
      ];

      renderBSISAreas.forEach(e => {
        userFinDataReportView._RenderHeader(
          e[0],
          this._userData._userBasicFinSelect,
          this._userData._userFinData[e[2]],
          NumReportYrs
        );
        userFinDataReportView._RenderMarkup(
          e[1],
          this._userData._userFinData[e[2]],
          NumReportYrs,
          startOfFisicalYear,
          endOfFisicalYear,
          e[3]
        );
      });

      //3 ratios
      //renderRatioAreas
      //create an array with all necessary info
      const renderRatioAreas = [
        [
          SolvencyFinancialRatiosReportHeader,
          SolvencyFinancialRatiosReportBody,
          'Solvency Ratios',
          '_',
        ],
        [
          LiquidityFinancialRatiosReportHeader,
          LiquidityFinancialRatiosReportBody,
          'Liquidity Ratios',
        ],
        [
          ProfitabilityFinancialRatiosReportHeader,
          ProfitabilityFinancialRatiosReportBody,
          'Profitability Ratios',
        ],
        [
          ActivityFinancialRatiosReportHeader,
          ActivityFinancialRatiosReportBody,
          'Activity Ratios',
        ],
      ];
      //loop over and render these view
      renderRatioAreas.forEach(e => {
        userRatiosReportView._RenderHeader(
          e[0],
          this._userData._userBasicFinSelect,
          this._userData._userFinData.ratios[e[2]],
          NumReportYrs
        );
        userRatiosReportView._RenderMarkup(
          e[1],
          this._userData._userFinData.ratios[e[2]],
          this._industryData['industry_data'],
          this._ratioComparison,
          NumReportYrs,
          startOfFisicalYear,
          endOfFisicalYear,
          '_'
        );
      });

      Chart.defaults.font.size = 20;
      if (this.chart1) {
        this.chart1.destroy();
      }
      let drawSpace1 = document.getElementById('chart-space-1');
      this.chart1 = new Chart(drawSpace1, {
        type: 'bar',
        data: {
          labels: [this._userData.startOfFY, this._userData.endOfFY, `${this._userData.endOfFY + 1}F`, `${this._userData.endOfFY + 2}F`],
          datasets: [
            {
              label: 'Growth of Sales',
              data: [
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Net Sales'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Net Sales'],
                this._userData._userFinData['Income Statement'][
                  'Forecast Year1'
                ]['Net Sales ForecastY1'],
                this._userData._userFinData['Income Statement'][
                  'Forecast Year2'
                ]['Net Sales ForecastY2']
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            }
          },
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Growth of Sales'
            }
          }
        }
      });

      if (this.chart2) {
        this.chart2.destroy();
      }
      let drawSpace2 = document.getElementById('chart-space-2');
      this.chart2 = new Chart(drawSpace2, {
        type: 'bar',
        data: {
          labels: [this._userData.startOfFY, this._userData.endOfFY, `${this._userData.endOfFY + 1}F`, `${this._userData.endOfFY + 2}F`],

          datasets: [
            {
              label: 'Net Profit',
              data: [
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Net Income'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Net Income'],
                this._userData._userFinData['Income Statement'][
                  'Forecast Year1'
                ]['Net Income ForecastY1'],
                this._userData._userFinData['Income Statement'][
                  'Forecast Year2'
                ]['Net Income ForecastY2']
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'EBITDA',
              data: [
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Operating Income'] + 
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Depreciation'],

                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Operating Income'] + 
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Depreciation'],

                this._userData._userFinData['Income Statement'][
                  'Forecast Year1'
                ]['Operating Income ForecastY1'] + 
                this._userData._userFinData['Income Statement'][
                  'Forecast Year1'
                ]['Depreciation ForecastY1'],

                this._userData._userFinData['Income Statement'][
                  'Forecast Year2'
                ]['Operating Income ForecastY2'] + 
                this._userData._userFinData['Income Statement'][
                  'Forecast Year2'
                ]['Depreciation ForecastY2']
              ],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'Operating Profit',
              data: [
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Operating Income'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Operating Income'],
                this._userData._userFinData['Income Statement'][
                  'Forecast Year1'
                ]['Operating Income ForecastY1'],
                this._userData._userFinData['Income Statement'][
                  'Forecast Year2'
                ]['Operating Income ForecastY2']
              ],
              backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'Gross Profit',
              data: [
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Gross Profit'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Gross Profit'],
                this._userData._userFinData['Income Statement'][
                  'Forecast Year1'
                ]['Gross Profit ForecastY1'],
                this._userData._userFinData['Income Statement'][
                  'Forecast Year2'
                ]['Gross Profit ForecastY2']
              ],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            }
          },
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Types of Profits'
            }
          }
        }
      });

      if (this.chart3) {
        this.chart3.destroy();
      }
      let drawSpace3 = document.getElementById('chart-space-3');
      this.chart3 = new Chart(drawSpace3, {
        type: 'pie',
        data: {
          labels: ['Advertising', 'Bad Debt Expense', 'Depreciation', 'Entertainment', 'Insurance', 'Other Operating Expense', 'Rent', 'Wages'],
          datasets: [
            {
              data: [
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Advertising'],
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Bad Debt Expense'],
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Depreciation'],
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Entertainment'],
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Insurance'],
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Other Operating Expense'],
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Rent'],
                this._userData._userFinData['Income Statement'][
                  startOfFisicalYear
                ]['Salaries']
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(0, 0, 255, 0.2)',
                'rgba(75, 60, 130, 0.2)',
                'rgba(27, 115, 188, 0.2)',
                'rgba(118, 200, 192, 0.2)'
              ]
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            }
          },
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: `Growth of Sales ${startOfFisicalYear}`
            }
          }
        }
      });



      if (this.chart4) {
        this.chart4.destroy();
      }
      let drawSpace4 = document.getElementById('chart-space-4');
      this.chart4 = new Chart(drawSpace4, {
        type: 'pie',
        data: {
          labels: ['Advertising', 'Bad Debt Expense', 'Depreciation', 'Entertainment', 'Insurance', 'Other Operating Expense', 'Rent', 'Wages'],
          datasets: [
            {
              data: [
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Advertising'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Bad Debt Expense'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Depreciation'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Entertainment'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Insurance'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Other Operating Expense'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Rent'],
                this._userData._userFinData['Income Statement'][
                  endOfFisicalYear
                ]['Salaries']
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(0, 0, 255, 0.2)',
                'rgba(75, 60, 130, 0.2)',
                'rgba(27, 115, 188, 0.2)',
                'rgba(118, 200, 192, 0.2)'
              ]
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            }
          },
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: `Growth of Sales ${endOfFisicalYear}`
            }
          }
        }
      });

      if (this.chart5) {
        this.chart5.destroy();
      }
      let drawSpace5 = document.getElementById('chart-space-5');
      this.chart5 = new Chart(drawSpace5, {
        type: 'bar',
        data: {
          labels: [`${this._userData.startOfFY}`, `${this._userData.endOfFY}`],
          datasets: [
            {
              label: 'Asset Turnover in Days',
              data: [
                this._userData._ratios['Activity Ratios'][
                  startOfFisicalYear
                ]['asset_turnover_in_days'],
                this._userData._ratios['Activity Ratios'][
                  endOfFisicalYear
                ]['asset_turnover_in_days']
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'Inventory Turnover in Days',
              data: [
                this._userData._ratios['Activity Ratios'][
                  startOfFisicalYear
                ]['inventory_turnover_in_days'],
                this._userData._ratios['Activity Ratios'][
                  endOfFisicalYear
                ]['inventory_turnover_in_days']
              ],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'Receivables Turnover in Days',
              data: [
                this._userData._ratios['Activity Ratios'][
                  startOfFisicalYear
                ]['receivables_turnover_in_days'],
                this._userData._ratios['Activity Ratios'][
                  endOfFisicalYear
                ]['receivables_turnover_in_days']
              ],
              backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Activity Ratios'
            }
          }
        }
      });
     // createPDF();
    }
  }
  _reportExport() {}

  checkInputValid(numOfYears) {
    CompanyInfoObjNode['Company Intro'].value.length == 0
      ? (CompanyInfoObjNode['Company Intro'].value = 'A Company with vision')
      : '';
    const basicInput =
      Array.from(CompanyInfoNodes).every(e => e.value.length > 0) &&
      Array.from(FinancialInfoNodes).every(e => e.value.length > 0) &&
      Array.from(BalanceSheetYear1Nodes).every(e => e.value.length > 0) &&
      Array.from(IncomeStatementYear1Nodes).every(e => e.value.length > 0);
    if (+numOfYears === 2) {
      if (
        !basicInput ||
        (!Array.from(BalanceSheetYear2Nodes).every(e => e.value.length > 0) &&
          !Array.from(IncomeStatementYear2Nodes).every(e => e.value.length > 0))
      ) {
        return false;
      }
      return true;
    }
    if (+numOfYears === 1) {
      if (!basicInput) {
        return false;
      }
      return true;
    }
    return true;
  }
  /** this function copies the userData object for the more convenient use in app.js*/

  getUserData() {
    return this._userData;
  }
  getComparisonResult() {
    return this._ratioComparison;
  }
  getIndustryRatios() {
    return this._industryData;
  }
}

const app = new ReportadoApp();
