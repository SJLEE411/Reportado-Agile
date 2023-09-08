//all default settings
const DefaultfiscalYears = [2020, 2021];
//in case we update the DefaultfiscalYears, we assure DefaultStart year always be a year before the last year.
const DefaultStartYear = DefaultfiscalYears.at(-2);

const unit1 = 1;
const unit2 = 1000;
const DefaultUserUnit = unit1;
//default currency
const DefaultUserCurrency = 'USD';
//default number of fiscal years
const DefaultnumOfFY = 2;
const DefaultDecimalNum = 2;
//growth rate
const DefaultGrowthRateY1 = 0.1;
const DefaultGrowthRateY2 = 0.1;

const DefaultTableNameColumnWidth = '30%';
const DefaultRatiosArr = [
  'debt_ratio',
  'debt_to_equity_ratio',
  'interest_coverage_ratio',
  'current_ratio',
  'quick_ratio',
  'cash_ratio',
  'profit_margin',
  'return_on_equity_after_tax',
  'gross_margin',
  'operating_margin',
  'return_on_assets',
  'receivables_turnover_in_days',
  'asset_turnover_in_days',
  'inventory_turnover_in_days',
];
const PositiveRatios = [
  'interest_coverage_ratio',
  'current_ratio',
  'quick_ratio',
  'cash_ratio',
  'profit_margin',
  'return_on_equity_after_tax',
  'gross_margin',
  'operating_margin',
  'return_on_assets',
];
const NegativeRatios = [
  'debt_ratio',
  'debt_to_equity_ratio',
  'receivables_turnover_in_days',
  'asset_turnover_in_days',
  'inventory_turnover_in_days',
];
const DefaultThreshholdRate = 0.1;
let uploadUserData;
let uploadBSdata;
let uploadISdata;
