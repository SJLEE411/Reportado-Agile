const { response } = require('express');

const connection = require('../DBConnection');

const xlsx = require('node-xlsx');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.html', {});
    });

    app.get('/analysis', function(req, res) {
        res.render('analysis.html', {});
        // connection.query('SELECT * FROM table_2021', (err, rows, fields) => {
        //     if (err) throw err;
        //     console.log(rows);
        //     console.log(rows[0]);
        //     console.log(rows[0].industry_name);
        //     res.render('analysis.html', {});
        // })
    });

    app.post('/analysisFile', (req, res) => {
        const workSheetsFromFile = xlsx.parse(req.files.excel.data);
        console.log(workSheetsFromFile);
        console.log(workSheetsFromFile[0].data);
        console.log(workSheetsFromFile[0].data[2][1]);
        // console.log(workSheetsFromFile);
        // console.log(workSheetsFromFile[0].data);
        // console.log(workSheetsFromFile[0].data[1][1]);
        connection.query(`SELECT * FROM table_2021 LEFT JOIN table_2020 ON table_2021.industry_name=table_2020.industry_name 
        WHERE table_2021.id=${parseInt(workSheetsFromFile[0].data[2][1].slice(0, 2).trim()) + 1} 
        UNION ALL
        SELECT * FROM table_2020 LEFT JOIN table_2021 ON table_2020.industry_name=table_2021.industry_name 
        WHERE table_2020.id=${parseInt(workSheetsFromFile[0].data[2][1].slice(0, 2).trim()) + 1};`, (err, rows, fields) => {
            if (err) throw err;
            console.log(rows);
            res.send({
                user_data: workSheetsFromFile,
                industry_data: {
                    2021: rows[1],
                    2020: rows[0]
                }
            });
        })
    });

    app.post('/analysisManual', (req, res) => {
        console.log(req.body);
        connection.query(`SELECT * FROM table_2021 LEFT JOIN table_2020 ON table_2021.industry_name=table_2020.industry_name 
        WHERE table_2021.id=${parseInt(req.body.value) + 1} 
        UNION ALL
        SELECT * FROM table_2020 LEFT JOIN table_2021 ON table_2020.industry_name=table_2021.industry_name 
        WHERE table_2020.id=${parseInt(req.body.value) + 1};`, (err, rows, fields) => {
            if (err) throw err;
            console.log(rows);
            res.send({
                industry_data: {
                    2021: rows[1],
                    2020: rows[0]
                }
            });
        })
    });
}