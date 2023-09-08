//doc setup
let docWidth = 595.28; //a4 width in pixels
let docHeigth = 841.89; //a4 heigth in pixels

let colors = {
  very_dark_blue: 'rgb(5, 42, 61)',
  dark_blue: 'rgb(9, 69, 106)',
  light_blue: 'rgb(29, 159, 171)',
  very_light_blue: 'rgb(101, 196, 206)',
  white: 'rgb(255, 255, 255)',
  orange: 'rgb(251, 176, 64)',
  grey: 'rgb(130, 130, 130)',
  light_grey: 'rgb(220, 220, 220)',
};

let team = {
  name1: 'Michael Bradford',
  name2: 'Jian Fang',
  name3: 'Beverley Wingfield',
  name4: 'Sangjune Lee',
  name5: 'Jelena Varyukhicheva',
};



//placeholder text
let loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.';

function createPDF() {
  /* transfer of data objects from controller.js*/
  let userData = app.getUserData();
  let comparisonResult = app.getComparisonResult();
  let industryRatios = app.getIndustryRatios();

  const year1 = userData._userBasicFinSelect['Start of fiscal Year'].toString();
  const year2 = userData._userBasicFinSelect['End of fiscal Year'].toString();
  const companyName = userData._userCompanyInfo['Company Name'].toString();
  let industryName = userData._userCompanyInfo['Industry Name'].toString();
  industryName = industryName.substring(industryName.indexOf("-") + 1);
  
  const about = userData._userCompanyInfo['Company Intro'].toString();
 

  let dataPDF = {
    //The structure: [name to be displayed in PDF, name in the dataObject, header or not (decides if TAB applied or not), row to place in report ]
    BSrows: [
      ['ASSETS', '', 'header', 0],
      ['Current Assets', '', 'header', 1],
      ['Cash and cash equivalents', 'Cash', '', 2],
      ['Accounts receivable', 'Debtors', '', 3],
      ['Inventories', 'Inventory', '', 4],
      ['Other current assets', 'Other Current Assets', '', 5],
      ['Total Current Assets', 'Current Assets', 'header', 6],
      ['Fixed Assets', '', 'header', 7],
      ['Property, plant and equipment (neto)', 'Property Plant Equipment','', 8],
      ['Intangible assets (neto)', 'Intangible Assets', '', 9],
      ['Long-term loan receivables', 'Loan Recievable', '', 10],
      ['Other non-current liabilities', 'Other Non Current Assets', '', 11],
      ['Total Fixed Assets', 'Non Current Assets', 'header', 12],
      ['TOTAL ASSETS', 'Total Assets', 'header', 13.3],

      ['LIABILITIES AND EQUITY', '', 'header', 15],
      ['Short-term Liabilities', '', 'header', 16],
      ['Short-term loan repayments', 'Short Term Loan', '', 17],
      ['Accounts payable', 'Accounts Payable', '', 18],
      ['Other current liabilities', 'Other Current Liabilities', '', 19],
      ['Total Short-Term Liabilities', 'Current Liabilities', 'header', 20],
      ['Long-Term Liabilities', '', 'header', 21],
      ['Long-term loans', 'Long Term Loan', '', 22],
      ['Shareholder loan', 'Shareholder Loan', '', 23],
      ['Other Non Current Liabilities', 'Other Non Current Liabilties', '', 24],
      ['Total Long-Term Liabilities', 'Non Current Liabilities', 'header', 25],
      ['Total Liabilities', 'Total Liabilities', 'header', 26],
      ['Equity', '', 'header', 27],
      ['Share capital', 'Common Shares', '', 28],
      ['Retained Earnings', 'Retained Earnings', '', 29],
      ['Net profit/loss', 'Accumulated Profit', '', 30],
      ['Total Equity', 'Equity', 'header', 31],
      ['TOTAL LIABILITIES AND EQUITY',
       'Total Liabilities and Stockholder Equity',
       'header',32.3],
    ],
    ISrows: [
      ['Sales (revenue)', 'Net Sales', 'header', 0],
      ['Cost of GoodsSold', 'Cost of Sales', '', 1],
      ['Gross profit', 'Gross Profit', 'header', 2.3],

      ['Rent and Utilities', 'Rent', '', 4],
      ['Wages', 'Salaries', '', 5],
      ['Entertainment', 'Entertainment', '', 6],
      ['Insurance', 'Insurance', '', 7],
      ['Advertising', 'Advertising', '', 8],
      ['Depreciation','Depreciation','', 9],
      ['Bad debt expense', 'Bad Debt Expense', '', 10],
      ['Other operating expenses', 'Other Operating Expense', '', 11],
      ['Total operating expenses', 'Operating Expenses', 'header', 12],
      ['Operating profit', 'Operating Income', 'header', 13.3],

      ['Other income', 'Other Income', '', 15],
      ['Financial income', 'Interest Income', '', 17],
      ['Financial expenses', 'Interest Expense', '', 18],
      ['Total Finance Cost', 'Finance Cost', 'header', 19],
      ['Profit (loss) before taxes', 'Income Before Tax', 'header', 20.3],
 
      ['Corporate tax', 'Income Tax', '', 22],
      ['Net profit (loss)', 'Net Income', 'header', 24],
    ],
    RatioRows: [
      ['Solvency Ratios', 'Solvency Ratios', 'header', 0],
      ['Debt ratio', 'debt_ratio', '', 1],
      ['Debt-to-equity ratio', 'debt_to_equity_ratio', '', 2],
      ['Interest coverage ratio', 'interest_coverage_ratio', '', 3],

      ['Liquidity Ratios', 'Liquidity Ratios', 'header', 5],
      ['Current ratio', 'current_ratio', '', 6],
      ['Quick ratio', 'quick_ratio', '', 7],
      ['Cash ratio', 'cash_ratio', '', 8],

      ['Profitability Ratios','Profitability Ratios','header', 10],
      ['Gross profit margin', 'gross_margin', '', 11],
      ['Operating profit margin', 'operating_margin', '', 12],
      ['Net profit margin', 'profit_margin', '', 13],
      ['ROE', 'return_on_equity_after_tax', '', 14],
      ['ROA', 'return_on_assets', '', 15],

      ['Activity Ratios', 'Activity Ratios', 'header', 17],
      ['Asset turnover (days)', 'asset_turnover_in_days', '', 18],
      ['Receivables turnover (days)', 'receivables_turnover_in_days', '', 19],
      ['Inventory turnover (days)', 'inventory_turnover_in_days', '', 20],

    ]
  };


  
  let doc = new jsPDF('p', 'pt', [docWidth, docHeigth]);



  doc.setFontSize(10);

  //************Upload of images and conversion to base64 string format **************/

  // converting png logo (dark text) into base64 string
  var logo = new Image();
  logo.src = 'img/pdfDesignElements/reportadoLogo.png';

  // converting png logo (white text) into base64 string
  var logoLight = new Image();
  logoLight.src = 'img/pdfDesignElements/Reportado-Logo-light.png';

  // cover page design
  let cover = new Image();
  cover.src = 'img/pdfDesignElements/coverPage.jpg';

  // intro page design
  let introPage = new Image();
  introPage.src = 'img/pdfDesignElements/introPage.jpg';

  // content page design
  let contentPage = new Image();
  contentPage.src = 'img/pdfDesignElements/content.jpg';


  // finBG page design
  let finBG = new Image();
  finBG.src = 'img/pdfDesignElements/pageBorders.jpg';

  // cuadratic logo example
  var qLogo = new Image();
  qLogo.src = 'img/pdfDesignElements/quadraticLogo.png';

  // rectangular logo example
  var rLogo = new Image();
  rLogo.src = 'img/pdfDesignElements/rectangularLogo.png';

  // puzzle illustration
  var puzzleLogo = new Image();
  puzzleLogo.src = 'img/pdfDesignElements/designEl1.png';

  // illustration for table of contents
  var pageNR = new Image();
  pageNR.src = 'img/pdfDesignElements/pageNR.png';

  const canvas1 = document.querySelector('#chart-space-1');
  const chart1 = canvas1.toDataURL("image/png", 1.0);
  var canvas2 = document.querySelector('#chart-space-2');
  var chart2 = canvas2.toDataURL("image/png", 1.0);
  var canvas3 = document.querySelector('#chart-space-3');
  var chart3 = canvas3.toDataURL("image/png", 1.0);
  var canvas4 = document.querySelector('#chart-space-4');
  var chart4 = canvas4.toDataURL("image/png", 1.0);
  var canvas5 = document.querySelector('#chart-space-5');
  var chart5 = canvas5.toDataURL("image/png", 1.0);

  let rMargin = 40;
  let lMargin = 40;
  let pdfMargin = 500;

  //*************************TITLE PAGE DESIGN***********************/
  //placing cover page image
  doc.addImage(cover, 'JPEG', 0, 0, 596, 842);
  //placing logo on the first page of
  doc.addImage(logoLight, 'png', 280, 750, 84.5, 17.75);
  //placing puzzle logo
  doc.addImage(puzzleLogo, 'png', 25, 750, 70, 70);
  //adding custom font
  doc.setFont('Raleway-Light');
  doc.setFontType('normal');

  doc.setTextColor(colors.dark_blue);


  /**
  Changes size of the company name depending on the length of the company name
  */
  const len = companyName.length;
  
  if(len <=20)
  {
    doc.setFontSize(40);
    doc.text(companyName, 150, 170);
  }
  else if (len > 20 && len <= 30)
  {
     doc.setFontSize(30);
     doc.text(doc.splitTextToSize(companyName, (pdfMargin - lMargin - 60)), 150, 140);
  }
  else if (len > 30)
  {
    doc.setFontSize(20);
    doc.text(doc.splitTextToSize(companyName, (pdfMargin - lMargin - 60)), 150, 140);
  }

  doc.setFontSize(20);
  doc.text('FINANCIAL PROFILE', 180, 200);
  doc.setFontSize(13);
  doc.text(year1 + ' - ' + year2, 180, 220);

  //vertical line
  doc.setFillColor(colors.orange);
  doc.rect(165, 185, 3, 40, 'F');

  // Line under reportado logo
  doc.setDrawColor(colors.light_blue); // draw red lines
  doc.setLineWidth(0.1);
  doc.line(230, 774, 420, 774);

  //names of the tem members
  doc.setTextColor(colors.grey);
  doc.setFontSize(9);
  doc.text(
    doc.splitTextToSize(
      'The following report is composed as a part of University of London CM2020 Agile Software Projects module course work. All right are belong to Team 42 members:',
      420
    ),
    135,
    800
  );

  doc.text(
    team.name1 +
      '  ' +
      team.name2 +
      '  ' +
      team.name3 +
      '  ' +
      team.name4 +
      '  ' +
      team.name5,
    135,
    830
  );


  //****************************************************Table of contents********************************************
  doc.addPage();
 
 //placing cover page image
  doc.addImage(contentPage, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(35);
  doc.setTextColor(colors.dark_blue);
  doc.text('TABLE OF\nCONTENTS', 60, 140);


  doc.setFontSize(13);
  doc.text('Introduction', 90, 250);
  doc.text('Balance Sheet', 90, 300);
  doc.text('Income Statement', 90, 350);
  doc.text('Ratio Analysis', 90, 400);
  doc.text('Charts and Graphs', 90, 450);
  doc.text('Formulas', 90, 500);

  doc.setFillColor(colors.orange);
  doc.rect(80, 243, 4, 4, 'F');
  doc.rect(80, 293, 4, 4, 'F');
  doc.rect(80, 343, 4, 4, 'F');
  doc.rect(80, 393, 4, 4, 'F');
  doc.rect(80, 443, 4, 4, 'F');
  doc.rect(80, 493, 4, 4, 'F');

  //placing logo on the first page of
  doc.addImage(logo, 'png', 80, 780, 140, 28);


  //****************************************************Company introduction**********************************************************
  doc.addPage();

  doc.setFontSize(10); 

  //placing cover page image
  doc.addImage(introPage, 'JPEG', 0, 0, 596, 842);

  let intro = "The "+ companyName + " is a SME company that operates in the " + industryName + " industry. ";
  doc.setFontSize(40);
  doc.setTextColor(colors.white);
  doc.text("INTRODUCTION", 50, 140);
  doc.setFillColor(colors.orange);
  doc.rect(50, 150, 400, 1.5, 'F');

  doc.setFontSize(10);

  doc.text(doc.splitTextToSize(intro, (pdfMargin - lMargin - rMargin)), 50, 190);
  doc.text(doc.splitTextToSize(about + "\n \n \n " + companyName + "\n Company's Management", (pdfMargin - lMargin - rMargin)), 50, 240);

  
  //****************************************************Balance sheet and income statement********************************************
  doc.addPage();

  let sub_header_row = 180;
  const startRow = 200;
  const rowHeight = 13;
  const bs_col_0 = 90;
  const bs_col_1 = bs_col_0 + 160;
  const bs_col_2 = bs_col_1 + 25;
  const bs_col_3 = bs_col_2 + 50;
  const bs_col_4 = bs_col_3 + 25;
  const bs_col_5 = bs_col_4 + 80;
  let row = 15;
  let colToPlace;



  let firstRow = 180;
  const column0 = 90;
  const column1 = column0 + 150;
  const column2 = column1 + 50;
  const column3 = column2 + 50;
  const column4 = column3 + 50;
  const column5 = column4 + 50;

  //placing cover page image
  doc.addImage(finBG, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(40);
  doc.setTextColor(colors.dark_blue);
  doc.text('FINANCIAL DATA', 100, 140);

  doc.setTextColor(colors.dark_blue);
  doc.setFontSize(10);
  doc.text('Balance Sheet', 100, firstRow);

  doc.text( year1, bs_col_1, firstRow);
  doc.text( year2, bs_col_3, firstRow);


  //Type Balance Sheet row names, headers are shifted by 10px left
  for(let i = 0; i <dataPDF.BSrows.length; i++)
  { if (dataPDF.BSrows[i][2] == 'header') 
      {
        colToPlace = bs_col_0-10;
        doc.setFontSize(10);
      }
      else
      {
        colToPlace = bs_col_0;
        doc.setFontSize(9);
      }
      doc.text(
        dataPDF.BSrows[i][0],
        colToPlace,
        startRow + dataPDF.BSrows[i][3] * rowHeight);
    
    if(dataPDF.BSrows[i][0] == "TOTAL ASSETS" || dataPDF.BSrows[i][0] == "TOTAL LIABILITIES AND EQUITY")
    {
     let lineY = dataPDF.BSrows[i][3] * rowHeight + startRow - 11;
      doc.setDrawColor(colors.light_grey);
      doc.line(colToPlace, lineY, docWidth - 200, lineY);
    
    }        
  }

  //keys are the Balance sheet row names from the input form 
  const keysBS = Object.keys(userData._userFinData['Balance Sheet'][year1]);

  //Populate Balance sheet page with numbers from the user
  keysBS.forEach(key => {
    for (let y = 0; y < dataPDF.BSrows.length; y++) {

      if (dataPDF.BSrows[y][1] == key) {
        doc.setFontSize(10);
        doc.text(
          userData._userFinData['Balance Sheet'][year1][key].toString(),
          bs_col_1,
          startRow + dataPDF.BSrows[y][3] * rowHeight
        );

        doc.setFontSize(9);
        let percentage1 = Math.round((userData._userFinData['Balance Sheet'][year1][key]/userData._userFinData['Balance Sheet'][year1]['Total Assets'])*100)
        doc.text(
          percentage1.toString() +"%",
          bs_col_2,
          startRow + dataPDF.BSrows[y][3] * rowHeight
        );

        doc.setFontSize(10);
        doc.text(
          userData._userFinData['Balance Sheet'][year2][key].toString(),
          bs_col_3,
          startRow + dataPDF.BSrows[y][3] * rowHeight
        );
        doc.setFontSize(9);
        let percentage2 = Math.round((userData._userFinData['Balance Sheet'][year2][key]/userData._userFinData['Balance Sheet'][year2]['Total Assets'])*100)
        doc.text(
          percentage2.toString() +"%",
          bs_col_4,
          startRow + dataPDF.BSrows[y][3] * rowHeight
        );
      }
    }
  });
  
  if(year1 != year2)
  {
    doc.setFillColor(colors.orange);
    doc.rect(bs_col_5 - 15, 235, 2, 280, 'F');
    doc.setTextColor(colors.dark_blue);
    doc.setFontSize(14);
    doc.text( "HIGHLIGHTS", bs_col_5, 245);
    
    doc.setFontSize(9);
    // about total balance sheet
    let ta1 = userData._userFinData['Balance Sheet'][year1]['Total Assets'];
    let ta2 = userData._userFinData['Balance Sheet'][year2]['Total Assets'];
    let change_ta  = Math.round(((ta2 - ta1)/ta1)*100).toString();
    let change;

    let explanation_ta;
    if (userData._userFinData['Balance Sheet'][year2]['Total Assets'] > userData._userFinData['Balance Sheet'][year1]['Total Assets'])
    {
        change = "increased"
    }
    else
    {
        change = "decreased"
    }
    explanation_ta = "The total volume of the balance sheet has " + change + " by " + change_ta + "% or by " + (ta2-ta1).toString() + " in absolute units." ;
    doc.text(doc.splitTextToSize(explanation_ta, 100), bs_col_5, 275);
    
    //about liquide assets coverage
    let ca1 = userData._userFinData['Balance Sheet'][year1]['Current Assets'];
    let ca2 = userData._userFinData['Balance Sheet'][year2]['Current Assets'];
    let cl1 = userData._userFinData['Balance Sheet'][year1]['Current Liabilities'];
    let cl2 = userData._userFinData['Balance Sheet'][year2]['Current Liabilities'];

    if(ca1/cl1 < ca2/cl2) 
    {
       change = "improved"
    }
    else
    {
      change = "weakened"
    }

    explanation_ta = "In " + year2 + " total liquid assets covered short-term liabilities by " + ((ca1/cl2).toFixed(1)).toString() + " times. This is a " + change + " result compared to the same indicator in the year before that was " + ((ca2/cl2).toFixed(1)).toString() + "." ;

    doc.text(doc.splitTextToSize(explanation_ta, 100), bs_col_5, 330);
 
     let e1 = userData._userFinData['Balance Sheet'][year1]['Equity'];
     let e2 = userData._userFinData['Balance Sheet'][year2]['Equity'];   

    if((e1/ta1) < (e2/ta2))
    {
      change = "improvement"
    }
    else
    {
      change = "weakening"
    }

    explanation_ta = "The equity level in " + year2 + " was " + (((e1/ta1)*100).toFixed()).toString() + "% and this is an indication of the capital structure" + change + " as the equity level in " + year1 + " was " + (((e2/ta2)*100).toFixed()).toString() + "%." ;

    doc.text(doc.splitTextToSize(explanation_ta, 100), bs_col_5, 430);
  }

  //placing logo on the first page of
  doc.addImage(logo, 'png', docWidth - 150, docHeigth - 50, 95, 17.75);

  //*****************************INCOME STATEMENT ************************/

  doc.addPage();

  const is_col_0 = 90;
  const is_col_1 = is_col_0 + 140;
  const is_col_2 = is_col_1 + 25;
  const is_col_3 = is_col_2 + 40;
  const is_col_4 = is_col_3 + 25;
  const is_col_5 = is_col_4 + 40;
  const is_col_6 = is_col_5 + 25;
  const is_col_7 = is_col_6 + 40;
  const is_col_8 = is_col_7 + 40;

  //placing cover page image
  doc.addImage(finBG, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(40);
  doc.setTextColor(colors.dark_blue);
  doc.text('FINANCIAL DATA', 100, 140);

  //placing logo on the first page of
  doc.addImage(logo, 'png', docWidth - 150, docHeigth - 50, 95, 17.75);


  doc.setTextColor(colors.dark_blue);
  doc.setFontSize(10);
  doc.text('Income statement', 100, firstRow);
  doc.text( year1, is_col_1, firstRow);
  doc.text( year2 , is_col_3, firstRow);
  doc.text( userData._userBasicFinSelect['Forecast Year1'].toString()+"F", is_col_5, firstRow);
  doc.text( userData._userBasicFinSelect['Forecast Year2'].toString()+"F" , is_col_7, firstRow);

  for(let i = 0; i <dataPDF.ISrows.length; i++)
  { if (dataPDF.ISrows[i][2] == 'header') 
      {
        colToPlace = is_col_0 - 10;
      }
      else
      {
        colToPlace = is_col_0;
      }
      doc.text(
        dataPDF.ISrows[i][0],
        colToPlace,
        startRow + dataPDF.ISrows[i][3] * rowHeight);
    
    if(dataPDF.ISrows[i][0] == "Gross profit" || dataPDF.ISrows[i][0] == "Operating profit" || dataPDF.ISrows[i][0] == "Profit (loss) before taxes"|| dataPDF.ISrows[i][0] == "Net profit (loss)")
    {
     let lineY = dataPDF.ISrows[i][3] * rowHeight + startRow - 11;
      doc.setDrawColor(colors.light_grey);
      doc.line(colToPlace, lineY, docWidth - 100, lineY);
    }        
  }

  const keysIS = Object.keys(userData._userFinData['Income Statement'][year1]);

  //Populate Balance sheet page with numbers from the user
  keysIS.forEach(key => {
    for (let y = 0; y < dataPDF.ISrows.length; y++) {

      if (dataPDF.ISrows[y][1] == key) {
        doc.setFontSize(10);
        doc.text(
          userData._userFinData['Income Statement'][year1][key].toString(),
          is_col_1,
          startRow + dataPDF.ISrows[y][3] * rowHeight
        );
        

        doc.text(
          userData._userFinData['Income Statement'][year2][key].toString(),
          is_col_3,
          startRow + dataPDF.ISrows[y][3] * rowHeight
        );


        doc.text(
          Math.ceil(userData._userFinData['Income Statement']['Forecast Year1']
          [[key]+" ForecastY1"]).toString(),
          is_col_5,
          startRow + dataPDF.ISrows[y][3] * rowHeight
        );


        doc.text(
          Math.ceil(userData._userFinData['Income Statement']['Forecast Year2']
          [[key]+" ForecastY2"]).toString(),
          is_col_7,
          startRow + dataPDF.ISrows[y][3] * rowHeight
        );
      
        if(key == "Gross Profit" || key == "Operating Income" || key == "Income Before Tax" || key == "Net Income")
        {
          doc.setFontSize(9);
          let profit1 = userData._userFinData['Income Statement'][year1][key];
          let sales1 = userData._userFinData['Income Statement'][year1]['Net Sales'];
          let margin1 = ((profit1/sales1)*100).toFixed()
          doc.text(margin1.toString()+"%", is_col_2, startRow + dataPDF.ISrows[y][3] * rowHeight);

          let profit2 = userData._userFinData['Income Statement'][year2][key];
          let sales2 = userData._userFinData['Income Statement'][year2]['Net Sales'];
          let margin2 = ((profit2/sales2)*100).toFixed()
          doc.text(margin2.toString()+"%", is_col_4, startRow + dataPDF.ISrows[y][3] * rowHeight);

          let profit3 = Math.ceil(userData._userFinData['Income Statement']['Forecast Year1'][[key]+" ForecastY1"])            
          let sales3 = Math.ceil(userData._userFinData['Income Statement']['Forecast Year1']['Net Sales ForecastY1'])
          let margin3 = ((profit3/sales3)*100).toFixed()   
          doc.text(margin3.toString()+"%", is_col_6, startRow + dataPDF.ISrows[y][3] * rowHeight);
          
          let profit4 = Math.ceil(userData._userFinData['Income Statement']['Forecast Year2'][[key]+" ForecastY2"])           
          let sales4 = Math.ceil(userData._userFinData['Income Statement']['Forecast Year2']['Net Sales ForecastY2'])  
          let margin4 = ((profit4/sales4)*100).toFixed()
          doc.text(margin4.toString()+"%", is_col_8, startRow + dataPDF.ISrows[y][3] * rowHeight);
        }
      }
    }
  });

  if(year1 != year2)
  {
    doc.setFillColor(colors.orange);
    doc.rect(bs_col_0, 590, 2, 70, 'F');
    doc.setTextColor(colors.dark_blue);
    doc.setFontSize(14);
    doc.text( "HIGHLIGHTS", bs_col_0 + 15, 600);

    let s1 = userData._userFinData['Income Statement'][year1]['Net Sales']
    let s2 = userData._userFinData['Income Statement'][year2]['Net Sales']
    let op1 = userData._userFinData['Income Statement'][year1]['Operating Income']
    let op2 = userData._userFinData['Income Statement'][year2]['Operating Income']

    let s_growth = (((s2-s1)/s1)*100).toFixed();
    let op_margin1 = ((op1/s1)*100).toFixed()
    let op_margin2 = ((op2/s2)*100).toFixed()
    let change1;
    if(s2 > s1)
    {
        change1 = "increased"
    }
    else 
    {
        change1 = "decreased"
    }

    let change2;
    if(op_margin2 > op_margin1)
    {
        change2 = "improved"
    }
    else 
    {
        change2 = "weakened"
    }

    doc.setFontSize(9);
  
    doc.text(doc.splitTextToSize("Company's sales between " + year1 + " and " + year2 + " have " + change1 + " by " + s_growth.toString() + "%.  The profitability on operating level has " + change2 + " from " + op_margin1.toString() + "% to "+ op_margin2.toString() + "%. " , 400), bs_col_0 + 15, 620);
  }
  //*************************RATIO ANALYSIS*******************************/

  doc.addPage();

  //placing cover page image
  doc.addImage(finBG, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(40);
  doc.setTextColor(colors.dark_blue);
  doc.text('RATIO ANALYSIS', 120, 140);

  const r_col_0 = 120;
  const r_col_1 = r_col_0 + 100;
  const r_col_2 = r_col_1 + 40;
  const r_col_3 = r_col_2 + 40;
  const r_col_4 = r_col_3 + 50;
  const r_col_5 = r_col_4 + 40;
  const r_col_6 = r_col_5 + 40;
  const r_col_7 = r_col_6 + 40;

  doc.setTextColor(colors.dark_blue);
  doc.setFontSize(10);
  doc.text( year1, r_col_1, firstRow);
  doc.text( "Industry", r_col_2-10, firstRow);
  doc.text( "Result", r_col_3, firstRow);

  doc.text( year2, r_col_4, firstRow);
  doc.text( "Industry", r_col_5-10, firstRow);
  doc.text( "Result", r_col_6, firstRow);

  const ratioGroups = Object.keys(userData._userFinData['ratios']);
   
  //populates row names for Ratio Analysis
  for(let i = 0; i <dataPDF.RatioRows.length; i++)
  { if (dataPDF.RatioRows[i][2] == 'header') 
      {
        colToPlace = r_col_0 - 50;
      }
      else
      {
        colToPlace = r_col_0 - 40;
      }
      doc.text(
        dataPDF.RatioRows[i][0],
        colToPlace,
        startRow + dataPDF.RatioRows[i][3] * rowHeight);     
  }

  let better1 = 0;
  let worse1 = 0;
  let in_line1 = 0;
  let better2 = 0;
  let worse2 = 0;
  let in_line2 = 0;

    for (let y = 0; y < dataPDF.RatioRows.length; y++) 
    {
      //extract ratios of the user
      ratioGroups.forEach(group => 
        {
            const ratios = Object.keys(userData._userFinData['ratios'][group][year1])
            ratios.forEach(ratio=>
              {  
                  if(ratio == dataPDF.RatioRows[y][1])
                  {
                    doc.text(userData._userFinData['ratios'][group][year1][ratio].toString(),
                    r_col_1,
                          startRow + dataPDF.RatioRows[y][3] * rowHeight);
                    doc.text(userData._userFinData['ratios'][group][year2][ratio].toString(),
                    r_col_4,
                          startRow + dataPDF.RatioRows[y][3] * rowHeight);

                    doc.text(industryRatios['industry_data'][year1][ratio].toString(),
                    r_col_2,
                          startRow + dataPDF.RatioRows[y][3] * rowHeight);
                    doc.text(industryRatios['industry_data'][year2][ratio].toString(),
                    r_col_5,
                          startRow + dataPDF.RatioRows[y][3] * rowHeight);

                    doc.text(comparisonResult[year1][ratio],
                      r_col_3,
                          startRow + dataPDF.RatioRows[y][3] * rowHeight);
                    doc.text(comparisonResult[year2][ratio],
                      r_col_6,
                          startRow + dataPDF.RatioRows[y][3] * rowHeight);
                   if(comparisonResult[year1][ratio] == "Better")
                   {
                    better1++;
                   }     
                   if(comparisonResult[year2][ratio] == "Better")
                   {
                    better2++;
                   }    
                   if(comparisonResult[year1][ratio] == "In-line")
                   {
                    in_line1++;
                   }     
                   if(comparisonResult[year2][ratio] == "In-liner")
                   {
                    in_line2++;
                   } 
                   if(comparisonResult[year1][ratio] == "Worse")
                   {
                    worse1++;
                   }     
                   if(comparisonResult[year2][ratio] == "Worse")
                   {
                    worse2++;
                   } 
                          
                  }
              })
        }
      )
    }; 

    if(year1 != year2)
    {
      doc.setFillColor(colors.orange);
      doc.rect(bs_col_0, 590, 2, 70, 'F');
      doc.setTextColor(colors.dark_blue);
      doc.setFontSize(14);
      doc.text( "HIGHLIGHTS", bs_col_0 + 15, 600);

      doc.setFontSize(9);

      let result1;
      if(better1 > (worse1 + in_line1))
      {
          result1 = "performed strongly better than other companies in the industry"
      }
      if(worse1 > (better1 + in_line1))
      {
          result1 = "performed considerably worse than other companies in the industry"
      }
      
      if((in_line1 > better1) || (in_line1 > worse1))
      {
          result1 = "performed mostly in line with other companies in the industry"
      }
      else 
      {
         result1 = " had no strong correlation to industry average ratios "
      }


      let result2;
      if(better2 > (worse2 + in_line2))
      {
          result2 = "performed strongly better than other companies in the industry"
      }
      if(worse2 > (better2 + in_line2))
      {
          result2 = "performed considerably worse than other companies in the industry"
      }
      if((in_line2 > better2) || (in_line2 > worse2))
      {
          result2 = "performed mostly in line with other companies in the industry"
      }
      else 
      {
         result2 = " had no strong correlation to industry average ratios "
      }
  
      doc.text(doc.splitTextToSize(" Based on the ratio comparison to " + industryName + "average ratios, it can be concluded, that in " + year1 + " " + result1+ ". In the " + year2 + " the company " + result2, 400), bs_col_0 + 15, 620);

    }
  //placing logo on the first page of
  doc.addImage(logo, 'png', docWidth - 150, docHeigth - 50, 95, 17.75);

  //*************************CHARTS*******************************/

  doc.addPage();
  //placing cover page image
  doc.addImage(finBG, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(40);
  doc.setTextColor(colors.dark_blue);
  doc.text('CHARTS AND GRAPHS', 120, 140);

  doc.addImage(chart1, 'png', 150, 240, 270, 120)
  doc.addImage(chart2, 'png', 150, 400, 270, 120)
  doc.addImage(chart5, 'png', 150, 560, 270, 120)

  doc.setFontSize(10)
  doc.setTextColor(colors.dark_blue)
  doc.text("Chart 1. Growth of Sales", 120, 220)
  doc.text("Chart 2. Tepes of Profits", 120, 380)
  doc.text("Chart 5. Activity Ratios", 120, 540)

  //placing logo on the first page of
  doc.addImage(logo, 'png', docWidth - 150, docHeigth - 50, 95, 17.75);


  //*************************CHARTS*******************************/

  doc.addPage();
  //placing cover page image
  doc.addImage(finBG, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(40);
  doc.setTextColor(colors.dark_blue);
  doc.text('CHARTS AND GRAPHS', 120, 140);

  doc.addImage(chart3, 'png', 150, 240, 180, 180)
  doc.addImage(chart4, 'png', 150, 440, 180, 180)

  doc.setFontSize(10)
  doc.setTextColor(colors.dark_blue)
  doc.text("Chart 4. Split of operating expenses in " + year1, 120, 230)
  doc.text("Chart 5. Split of operating expenses in " + year2, 120, 430)


  //placing logo on the first page of
  doc.addImage(logo, 'png', docWidth - 150, docHeigth - 50, 95, 17.75);

  //*************************FORMULAS 1*******************************/
  doc.addPage();
  //placing cover page image
  doc.addImage(finBG, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(40);
  doc.setTextColor(colors.dark_blue);
  doc.text('FORMULAS', 120, 140);
  doc.setFontSize(10);

  doc.text('SOLVENCY RATIOS', 90, firstRow + 2 * row);
  doc.text(
    'Debt Ratio = Total Liabilities / Total Assets',
    100,
    firstRow + 3 * row
  );
  doc.text(
    doc.splitTextToSize(
      'Debt Ratio measures the amount of leverage used by a company in terms of total debt to total assets. This ratio varies widely across industries, such that capital-intensive businesses tend to have much higher debt ratios than others. A debt ratio of greater than 1.0 or 100% means a company has more debt than assets while a debt ratio of less than 100% indicates that a company has more assets than debt.',
      430
    ),
    100,
    firstRow + 4 * row
  );

  doc.text(
    'Debt to Equity Ratio (D/E) = Total Liabilities / Equity',
    100,
    firstRow + 9 * row
  );
  doc.text(
    doc.splitTextToSize(
      'Debt to Equity Ratio (D/E) compares a company’s total liabilities to its shareholder equity and can be used to evaluate how much leverage a company is using. Higher-leverage ratios tend to indicate a company or stock with higher risk to shareholders. However, the D/E ratio is difficult to compare across industry groups where ideal amounts of debt will vary.',
      430
    ),
    100,
    firstRow + 10 * row
  );

  doc.text(
    'Interest Coverage Ratio = EBITDA / Interest Expense',
    100,
    firstRow + 14 * row
  );
  doc.text(
    doc.splitTextToSize(
      'Interest Coverage Ratio is used to measure how well a firm can pay the interest due on outstanding debt. Generally, a higher coverage ratio is better, although the ideal ratio may vary by industry. Some variations of the formula use EBITDA or EBIAT instead of EBIT to calculate the ratio.',
      430
    ),
    100,
    firstRow + 15 * row
  );

  doc.text(
    'EBITDA = Operating Profit + Depreciation',
    100,
    firstRow + 19 * row
  );
  doc.text(
    doc.splitTextToSize(
      'EBITDA is a measure of a company’s overall financial performance and is used as an alternative to net income in some circumstances.',
      430
    ),
    100,
    firstRow + 20 * row
  );

  doc.text('LIQUIDITY RATIOS', 90, firstRow + 22 * row);
  doc.text(
    'Current Ratio = Current Assets / Current Liabilities',
    100,
    firstRow + 23 * row
  );
  doc.text(
    doc.splitTextToSize(
      'Current Ratio is a liquidity ratio that measures a company’s ability to pay short-term obligations or those due within one year. It tells investors and analysts how a company can maximize the current assets on its balance sheet to satisfy its current debt and other payables.',
      430
    ),
    100,
    firstRow + 24 * row
  );

  doc.text(
    'Quick Ratio = (Current Assets - Inventories) / Current Liabilities',
    100,
    firstRow + 27 * row
  );
  doc.text(
    doc.splitTextToSize(
      "Quick Ratio is an indicator of a company’s short-term liquidity position and measures a company’s ability to meet its short-term obligations with its most liquid assets. Since it indicates the company’s ability to instantly use its near-cash assets (assets that can be converted quickly to cash) to pay down its current liabilities, it is also called the 'acid test ratio'. ",
      430
    ),
    100,
    firstRow + 28 * row
  );

  doc.text('Cash Ratio = Cash / Current Liabilities', 100, firstRow + 32 * row);
  doc.text(
    doc.splitTextToSize(
      "Cash Ratio is a measurement of a company's liquidity. It specifically calculates the ratio of a company's total cash and cash equivalents to its current liabilities. The metric evaluates company's ability to repay its short-term debt with cash or near-cash resources, such as easily marketable securities. This information is useful to creditors when they decide how much money, if any, they would be willing to loan a company.",
      430
    ),
    100,
    firstRow + 33 * row
  );

  //placing logo on the first page of
  doc.addImage(logo, 'png', docWidth - 150, docHeigth - 50, 95, 17.75);

  //*************************FORMULAS 2*******************************/
  doc.addPage();
  //placing cover page image
  doc.addImage(finBG, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(40);
  doc.setTextColor(colors.dark_blue);
  doc.text('FORMULAS', 120, 140);
  doc.setFontSize(10);

  doc.text('PROFITABILITY RATIOS', 90, firstRow + 2 * row);
  doc.text(
    'Gross Profit Margin = Gross Profit / Sales',
    100,
    firstRow + 3 * row
  );
  doc.text(
    doc.splitTextToSize(
      "Gross profit margin is a measure of profitability that shows the percentage of revenue that exceeds the cost of goods sold (COGS). The gross profit margin reflects how successful a company's executive management team is in generating revenue, considering the costs involved in producing their products and services.",
      430
    ),
    100,
    firstRow + 4 * row
  );

  doc.text(
    'Operating Profit Margin = Operating Profit / Sales',
    100,
    firstRow + 8 * row
  );
  doc.text(
    doc.splitTextToSize(
      'Operating profit margin shows a company’s ability to manage its indirect costs. Therefore, this section of the income statement shows how a company is investing in areas it expects will help to improve its brand and business growth through several channels. A company may have a high gross profit margin but a relatively low operating profit margin if its indirect expenses for things like marketing, or capital investment allocations are high.',
      430
    ),
    100,
    firstRow + 9 * row
  );

  doc.text('Net Profit Margin = Net Profit / Sales', 100, firstRow + 14 * row);
  doc.text(
    doc.splitTextToSize(
      'Net profit margin potlights a company’s ability to manage its interest payments and tax payments. Interest payments can take several varieties. Interest includes the interest a company pays stakeholders on debt for capital instruments. It also includes any interest earned from short-term and long-term investments.',
      430
    ),
    100,
    firstRow + 15 * row
  );

  doc.text(
    'Return on Equity Ratio (ROE) = Net Profit / Equity',
    100,
    firstRow + 19 * row
  );
  doc.text(
    doc.splitTextToSize(
      "Return on equity (ROE) is a measure of financial performance calculated by dividing net income by shareholders' equity. Because shareholders' equity is equal to a company’s assets minus its debt, ROE is considered the return on net assets. ROE is considered a gauge of a corporation's profitability and how efficient it is in generating profits. The higher the ROE, the more efficient a company's management is at generating income and growth from its equity financing. ",
      430
    ),
    100,
    firstRow + 20 * row
  );

  doc.text(
    'Return on Assets Ratio (ROA) = Net Profit / Total Assets',
    100,
    firstRow + 26 * row
  );
  doc.text(
    doc.splitTextToSize(
      "The term return on assets (ROA) refers to a financial ratio that indicates how profitable a company is in relation to its total assets. Corporate management, analysts, and investors can use ROA to determine how efficiently a company uses its assets to generate a profit. The metric is commonly expressed as a percentage by using a company's net income and its average assets. A higher ROA means a company is more efficient and productive at managing its balance sheet to generate profits while a lower ROA indicates there is room for improvement.",
      430
    ),
    100,
    firstRow + 27 * row
  );

  //placing logo on the first page of
  doc.addImage(logo, 'png', docWidth - 150, docHeigth - 50, 95, 17.75);

  //*************************FORMULAS 3*******************************/
  doc.addPage();
  //placing cover page image
  doc.addImage(finBG, 'JPEG', 0, 0, 596, 842);
  doc.setFontSize(40);
  doc.setTextColor(colors.dark_blue);
  doc.text('FORMULAS', 120, 140);
  doc.setFontSize(10);

  doc.text('ACTIVITY RATIOS', 90, firstRow + 2 * row);
  doc.text(
    'Asset Turnover (days) = 365 / ( Sales / Total Assets )',
    100,
    firstRow + 3 * row
  );
  doc.text(
    doc.splitTextToSize(
      "Gross profit margin is a measure of profitability that shows the percentage of revenue that exceeds the cost of goods sold (COGS). The gross profit margin reflects how successful a company's executive management team is in generating revenue, considering the costs involved in producing their products and services.",
      430
    ),
    100,
    firstRow + 4 * row
  );

  doc.text(
    'Receivables Turnover (days) = 365 / ( Credit Sales / Accounts Receivable )',
    100,
    firstRow + 8 * row
  );
  doc.text(
    doc.splitTextToSize(
      'Operating profit margin shows a company’s ability to manage its indirect costs. Therefore, this section of the income statement shows how a company is investing in areas it expects will help to improve its brand and business growth through several channels. A company may have a high gross profit margin but a relatively low operating profit margin if its indirect expenses for things like marketing, or capital investment allocations are high.',
      430
    ),
    100,
    firstRow + 9 * row
  );

  doc.text(
    'Inventory Turnover (days) = 365 / ( Cost of Goods Sold / Inventory )',
    100,
    firstRow + 14 * row
  );
  doc.text(
    doc.splitTextToSize(
      'Net profit margin potlights a company’s ability to manage its interest payments and tax payments. Interest payments can take several varieties. Interest includes the interest a company pays stakeholders on debt for capital instruments. It also includes any interest earned from short-term and long-term investments.',
      430
    ),
    100,
    firstRow + 15 * row
  );

  //placing logo on the first page of
  doc.addImage(logo, 'png', docWidth - 150, docHeigth - 50, 95, 17.75);

  //**************************LAST PAGE********************************/

  doc.addPage();

  //background of the page
  doc.setFillColor(colors.dark_blue);
  doc.rect(0, 0, docWidth, docHeigth, 'F');

 

  //reportado logo in low right corner
  doc.addImage(logoLight, 'png', docWidth - 150, docHeigth - 50, 84.5, 17.75);

  doc.save('test-report.pdf');
}
