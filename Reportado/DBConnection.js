const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '80Dominik80+',
  database: 'financial_calculator_db',
});
connection.connect();

module.exports = connection;
