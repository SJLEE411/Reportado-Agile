//to create eventlistener in bulk as we have a lot of user inputs
const bulkEventListener = function (evnenttype = 'change', arr) {
  arr.forEach(el => {
    try {
      el.addEventListener(evnenttype, e => {
        e.preventDefault();
        console.log(e.target.value);
      });
    } catch (error) {
      console.log(error, el);
    }
  });
};

const userInputValidCheck = function (arr) {
  if (
    !arr.every(e => {
      console.log(e.value);
      e.value;
    })
  ) {
    alert(`Please fill in all the fields`);
  }
};

// check the invalid value for positive input in html node
function handleNumberChanged(e, type = 'positive') {
  const fixed = parseFloat(e.target.value)
    .toFixed(DefaultDecimalNum)
    .toString();
  if (type == 'positive') {
    if (Number(e.target.value) < 0) {
      alert('please input positive numbers');
      e.target.value = '';
      return;
    }
  }
  if (fixed.length < parseFloat(e.target.value).toString().length)
    e.target.value = fixed;
}

// helper funciton for value change events of fin data -- sum node
const nodeValueTransfer = function (nodeArr) {
  const numArr = nodeArr.map(e => Number(e.value));
  return numArr;
};
const finDataEventListener = function (type = 'change', sumNode, nodeArr) {
  nodeArr.forEach(el => {
    el.addEventListener(type, e => {
      e.preventDefault();
      sumNode.value = nodeValueTransfer(nodeArr).reduce(
        (pre, cur) => (cur += pre),
        0
      );
    });
  });
};
// helper funciton for value change events of fin data -- minus node
const finDataEventListenerMin = function (type = 'change', minusNode, nodeArr) {
  nodeArr.forEach(el => {
    el.addEventListener(type, e => {
      e.preventDefault();
      minusNode.value = nodeValueTransfer(nodeArr).reduce(
        (pre, cur) => (cur -= pre),
        0
      );
    });
  });
};

//for input value change chaining; solve the multiple levels of computing problem
// if A = b + c; D = e +f, G = A +B. we can add listener to b, c, e,f, and A, D will change value automatically , but G won't change, as A,D's change of value is not a DOM Event, thus can not be listened.
// Options for the observer (which mutations to observe)
const DomMutationConfig = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const DomMutationCatcher = function (mutationList, observer) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      input5.value = input4.value;
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
};

// parse number to fixed length
const parseTo = function (value, num = DefaultDecimalNum) {
  return Number(parseFloat(value).toFixed(num));
};

// Return to main page - onclick of the Reportdo logo
function Return() {
  window.location = '/';
}

//this function returns an object with a collection of objects that take the last value of the html node's classlist as key(replace 2 strings:'-' and 'YearX' in the last value ofclass list)
function NodeArrToObj(nodes, delimiter1 = '', delimiter2 = '') {
  const obj = {};
  nodes.forEach((e, index) => {
    obj[
      e.classList[e.classList.length - 1]
        .replaceAll(delimiter1, ' ')
        .replaceAll(delimiter2, '')
        .trim()
    ] = e;
  });
  return obj;
}

//parse the key of obj to the right format
function ObjKeyModify(obj, delimiter1 = '', delimiter2 = '') {
  const newObj = {};
  Object.entries(obj).forEach((e, index) => {
    newObj[e[0].replaceAll(delimiter1, ' ').replaceAll(delimiter2, '').trim()] =
      e[1];
  });
  return newObj;
}
//to modify string to right format
//the default is && which is rarely used, so it won't cause any trouble
function strModify(str, delimiter = '&&', type = 'Capitalization') {
  if (type == 'Capitalization') {
    return str
      .split(delimiter)
      .map(e => {
        return (e = e[0].toUpperCase() + e.slice(1));
      })
      .join(' ');
  }
  if (type == 'UpperCase') {
    return str
      .split(delimiter)
      .map(e => {
        return (e = e[0].toUpperCase());
      })
      .join(' ');
  }
  if (type == 'lowerCase') {
    return str
      .split(delimiter)
      .map(e => {
        return (e = e[0].toLowerCase());
      })
      .join(' ');
  }
}
// it only takes nodes as key-value pair
// if valueType === "numericFirst" turn object of nodes to object of node values of numerics(first choice) or text(if unable to convert to numerics) for pure  key-value object.
// else turn object of nodes to object of node text values.
function NodeObjToValue(obj, valueType = 'numericFirst') {
  const newObj = {};
  const valuesArr = Object.entries(obj);
  if (valueType === 'numericFirst') {
    return valuesArr.reduce((acc, el) => {
      return { ...acc, [el[0]]: +el[1].value || el[1].value };
    }, {});
  } else {
    return valuesArr.reduce((acc, el) => {
      return { ...acc, [el[0]]: el[1].value };
    }, {});
  }
  return newObj;
}

// the limitation is that it only accepts html nodes as the key-value pair!!!
//if valueType = "numericFirst" ,default, then turn object of nodes to object of node values of numerics(if possible) or text(if not able to convert to numerics) recursively for 1 level of nested object
//if valueType is 'text' or otherstring, then turn object of nodes to object of node's text values
function NodeObjToValueNested(obj, valueType = 'numericFirst') {
  const newObj = {};
  if (valueType === 'numericFirst') {
    for (let i = 0; i < Object.keys(obj).length; i++) {
      if (
        Object.prototype.toString.call(Object.values(obj)[i]) ===
        '[object Object]'
      ) {
        const innerObj = Object.values(obj)[i];
        // console.log(innerObj);
        //get inner nodes array and loop over to change its value
        newObj[Object.keys(obj)[i]] = NodeObjToValue(innerObj, valueType);
      } else {
        // console.log(Object.values(obj)[i]);
        // console.log(NodeObjToValue(Object.values(obj)[i]));
        newObj[Object.keys(obj)[i]] =
          +Object.values(obj)[i].value || Object.values(obj)[i].value;
      }
    }
  } else {
    for (let i = 0; i < Object.keys(obj).length; i++) {
      if (
        Object.prototype.toString.call(Object.values(obj)[i]) ===
        '[object Object]'
      ) {
        const innerObj = Object.values(obj)[i];
        // console.log(innerObj);
        //get inner nodes array and loop over to change its value
        newObj[Object.keys(obj)[i]] = NodeObjToValue(innerObj, valueType);
      } else {
        // console.log(Object.values(obj)[i]);
        // console.log(NodeObjToValue(Object.values(obj)[i]));
        newObj[Object.keys(obj)[i]] = Object.values(obj)[i].value;
      }
    }
  }
  // console.log(newObj);
  return newObj;
}

/*
this function take a nested object with html node as its value as parameter 
and recursively change the value type into numerics(if possible) or text, and finally  return a new object with same structure.
example: {A:input1, B:{C:input2, D:{E:input3,F:input4}}} as parameter, inputN is html node.
return: {A:input1.value, B:{C:input2.value, D{E:input3.value, F:input4.value}}}
@para Nodeobj  a nested(or not) object that take html node as its values.

*/
function NodeValueChangeNested(Nodeobj, valueType = 'numericFirst') {
  // console.log(`level ${level}`);
  let res = {};
  for (const [key, value] of Object.entries(Nodeobj)) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
      res[key] = NodeValueChangeNested(value);
    } else {
      valueType === 'numericFirst'
        ? (res[key] = +value.value ?? value.value)
        : (res[key] = +value.value || value.value);
    }
  }
  return res;
}

function NodeKeyValueChangeNested(
  Nodeobj,
  fiscalYear1,
  fiscalYear2,
  valueType = 'numericFirst'
) {
  // console.log(`level ${level}`);
  let res = {};
  for (let [key, value] of Object.entries(Nodeobj)) {
    if (key == 'fiscal Year1') {
      key = fiscalYear1;
    }
    if (key == 'fiscal Year2') {
      key = fiscalYear2;
    }
    if (Object.prototype.toString.call(value) === '[object Object]') {
      res[key] = NodeKeyValueChangeNested(value, fiscalYear1, fiscalYear2);
    } else {
      valueType === 'numericFirst'
        ? (res[key] = +value.value ?? value.value)
        : (res[key] = +value.value || value.value);
    }
  }
  return res;
}

function upload() {
  console.log('upload');

  let file = document.getElementById('file-input').files[0];
  console.log(file);

  formdata = new FormData();
  formdata.append('excel', file);

  $.ajax({
    url: 'analysisFile',
    type: 'POST',
    data: formdata,
    processData: false,
    contentType: false,
  }).then(response => {
    console.log(response); // console log response
    uploadUserData = response;
    // console.log(uploadUserData);
    //parse excel data into object
    uploadBSdata = uploadUserData.user_data[1].data.reduce((acc, cur) => {
      return Object.assign(acc, { [cur[0]]: cur.slice(1) });
    }, {});
    uploadISdata = uploadUserData.user_data[0].data.reduce((acc, cur) => {
      return Object.assign(acc, { [cur[0]]: cur.slice(1) });
    }, {});
    uploadBSdata = ObjKeyModify(uploadBSdata, '*'); //pase the BS key to the right form
    uploadISdata = ObjKeyModify(uploadISdata, '_', '*'); //parse the IS object key to the right form

    //populate with excel values when user click upload button
    if (uploadBSdata && uploadISdata) {
      console.log('ready to populate input');
      //if user uploads the excel file, then should reload and repopulate the page
      //populate fiscal year1 inputs for BS
      Object.keys(BalanceSheetObjNode['fiscal Year1']).forEach(e => {
        BalanceSheetObjNode['fiscal Year1'][e].value =
          uploadBSdata[e]?.[0] || 0;
        //populate fiscal year2 inputs for BS
        BalanceSheetObjNode['fiscal Year2'][e].value =
          uploadBSdata[e]?.[1] || 0;
      });
      //populate fiscal year1 inputs for IS
      Object.keys(IncomeStatementObjNode['fiscal Year1']).forEach(e => {
        IncomeStatementObjNode['fiscal Year1'][e].value =
          uploadISdata[e]?.[0] || 0;
        //populate fiscal year2 inputs for IS
        IncomeStatementObjNode['fiscal Year2'][e].value =
          uploadISdata[e]?.[1] || 0;
      });
      forecastIncomeValueCalc('FY2');
    }
  });
}

//insert after one node inside a parentnode.
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

//about column show and hide
function nodeHide(nodes) {
  nodes.forEach(e => {
    //change all value to 0;
    e.value = 0;
    //hide the column
    e.parentElement.classList.add('d-none');
  });
}

function nodeShow(nodes, keepValue = true) {
  nodes.forEach(e => {
    //change all value to empty;
    if (!keepValue) {
      e.value = '';
    }

    //show the column
    e.parentElement.classList.contains('d-none')
      ? e.parentElement.classList.remove('d-none')
      : '';
    //style the column
    e.parentElement.classList.contains('m-auto')
      ? ''
      : e.parentElement.classList.add('m-auto');
  });
}

function nodeChoice(start_of_fiscal_year, years_of_report) {
  if (
    //if it is the last fiscal year available
    +start_of_fiscal_year.value === DefaultfiscalYears.at(-1)
  ) {
    //the years of report can only be 1
    years_of_report.value = 1;
    //limit the dropdown list of years of report
    document.querySelector('.option-2-years').classList.add('d-none');
    inputYear2Nodes.forEach(e => {
      e.parentNode.classList.add('d-none');
    });
  } else {
    //release the dropdown list
    document.querySelector('.option-2-years').classList.remove('d-none');
  }
  // change all titles
  BalanceSheetYear1.innerHTML =
    IncomeStatementYear1.innerHTML = `FY-${start_of_fiscal_year.value}`;
  BalanceSheetYear2.innerHTML = IncomeStatementYear2.innerHTML = `FY-${
    +start_of_fiscal_year.value + 1
  }`;
  if (BalanceSheetYear1.parentNode.classList.contains('d-none')) {
    BalanceSheetYear2.innerHTML =
      IncomeStatementYear2.innerHTML = `FY-${+start_of_fiscal_year.value}`;
  }

  if (+years_of_report.value === 2) {
    IncomeStatementForecastY1.innerHTML = `FY-${
      +start_of_fiscal_year.value + 2
    }F`;
    IncomeStatementForecastY2.innerHTML = `FY-${
      +start_of_fiscal_year.value + 3
    }F`;
  }
  if (+years_of_report.value === 1) {
    IncomeStatementForecastY1.innerHTML = `FY-${
      +start_of_fiscal_year.value + 1
    }F`;
    IncomeStatementForecastY2.innerHTML = `FY-${
      +start_of_fiscal_year.value + 2
    }F`;
  }
}
function msgShow(msgNode) {
  msgNode.classList.add('show');
  msgNode.style.display = 'block';
}

function msgClose(msgNode) {
  msgNode.classList.remove('show');
  msgNode.style.display = 'none';
}

function nodeChoiceYeasOfReport(start_of_fiscal_year, years_of_report) {
  // change all titles

  if (+years_of_report.value === 2) {
    BalanceSheetYear1.innerHTML =
      IncomeStatementYear1.innerHTML = `FY-${start_of_fiscal_year.value}`;
    BalanceSheetYear2.innerHTML = IncomeStatementYear2.innerHTML = `FY-${
      +start_of_fiscal_year.value + 1
    }`;
    IncomeStatementForecastY1.innerHTML = `FY-${
      +start_of_fiscal_year.value + 2
    }F`;
    IncomeStatementForecastY2.innerHTML = `FY-${
      +start_of_fiscal_year.value + 3
    }F`;
  }
  if (+years_of_report.value === 1) {
    IncomeStatementForecastY1.innerHTML = `FY-${
      +start_of_fiscal_year.value + 1
    }F`;
    IncomeStatementForecastY2.innerHTML = `FY-${
      +start_of_fiscal_year.value + 2
    }F`;
  }
}

function forecastIncomeValueCalc(FY) {
  if (FY === 'FY1') {
    inputsIncomeStatementY1.forEach(e => {
      e.parentNode.nextElementSibling.nextElementSibling.firstElementChild.value =
        parseTo(
          e.value *
            (1 + +FinancialInfoObjNode['Forecast Growth Rate Year1'].value)
        );
      e.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value =
        parseTo(
          e.value *
            (1 + +FinancialInfoObjNode['Forecast Growth Rate Year1'].value) *
            (1 + +FinancialInfoObjNode['Forecast Growth Rate Year2'].value)
        );
    });
  }
  if (FY === 'FY2') {
    inputsIncomeStatementY2.forEach(e => {
      e.parentNode.nextElementSibling.firstElementChild.value = parseTo(
        e.value *
          (1 + +FinancialInfoObjNode['Forecast Growth Rate Year1'].value)
      );
      e.parentNode.nextElementSibling.nextElementSibling.firstElementChild.value =
        parseTo(
          e.value *
            (1 + +FinancialInfoObjNode['Forecast Growth Rate Year1'].value) *
            (1 + +FinancialInfoObjNode['Forecast Growth Rate Year2'].value)
        );
    });
  }
}

function nodeValueCopy(node1, node2) {
  node1.forEach((node, index) => {
    node.value = node2[index].value;
    node2[index].value = 0;
  });
}

/* This function is used to flat nested object by recursively drill into the deepest level
@para obj a nested object
return a new flatened object with only the deepest key-value pair.
 */
function ObjFlatten(obj) {
  let res = {};
  for (const [key, value] of Object.entries(obj)) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
      res = { ...res, ...ObjFlatten(value) };
    } else {
      res[key] = value;
    }
  }
  return res;
}

function compareResult(el1, el2, order = '>', rate = DefaultThreshholdRate) {
  //to make sure el1 and el2 are numeric numbers
  if (typeof el1 !== 'string' && typeof el2 !== 'string') {
    //if the more the better
    if (order == '>') {
      if (el1 > el2 * (1 + rate)) return 'Better';
      else if (el1 < el2 * (1 - rate)) return 'Worse';
      else return 'In-line';
    }
    //if the less the better
    if (order == '<')
      if (el1 > el2 * (1 + rate)) return 'Worse';
      else if (el1 < el2 * (1 - rate)) return 'Better';
      else return 'In-line';
  } else return 'N/A';
}

//to style the display of numbers in the report, if it is not numbers, then return the original string
function numberStyle(str, type = 'en-US') {
  if (!+str) {
    return str;
  }
  return (
    (+(+str).toFixed(DefaultDecimalNum)).toLocaleString(type, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) ?? str
  );
}
