DROP DATABASE IF EXISTS financial_calculator_db;

CREATE DATABASE financial_calculator_db;

USE financial_calculator_db;

CREATE TABLE `financial_calculator_db`.`table_2021` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `industry_name` VARCHAR(45) NOT NULL,
  `debt_ratio` DOUBLE NOT NULL,
  `debt_to_equity_ratio` DOUBLE NOT NULL,
  `interest_coverage_ratio` DOUBLE NOT NULL,
  `current_ratio` DOUBLE NOT NULL,
  `quick_ratio` DOUBLE NOT NULL,
  `cash_ratio` DOUBLE NOT NULL,
  `profit_margin` DOUBLE NOT NULL,
  `return_on_equity_after_tax` DOUBLE NOT NULL,
  `return_on_assets` DOUBLE NOT NULL,
  `gross_margin` DOUBLE NOT NULL,
  `operating_margin` DOUBLE NOT NULL,
  `asset_turnover_in_days` INT NOT NULL,
  `receivables_turnover_in_days` INT NOT NULL,
  `inventory_turnover_in_days` INT NOT NULL,
  `dividend_payout_ratio` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

  CREATE TABLE `financial_calculator_db`.`table_2020` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `industry_name` VARCHAR(45) NOT NULL,
  `debt_ratio` DOUBLE NOT NULL,
  `debt_to_equity_ratio` DOUBLE NOT NULL,
  `interest_coverage_ratio` DOUBLE NOT NULL,
  `current_ratio` DOUBLE NOT NULL,
  `quick_ratio` DOUBLE NOT NULL,
  `cash_ratio` DOUBLE NOT NULL,
  `profit_margin` DOUBLE NOT NULL,
  `return_on_equity_after_tax` DOUBLE NOT NULL,
  `return_on_assets` DOUBLE NOT NULL,
  `gross_margin` DOUBLE NOT NULL,
  `operating_margin` DOUBLE NOT NULL,
  `asset_turnover_in_days` INT NOT NULL,
  `receivables_turnover_in_days` INT NOT NULL,
  `inventory_turnover_in_days` INT NOT NULL,
  `dividend_payout_ratio` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);