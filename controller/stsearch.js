const express = require('express')
const pool = require('../config/database')
const app = express()
app.post('/stsearch', (req, res) => {
    yearGraduation = req.body.yearGraduation
    department = req.body.department
    firstName = req.body.firstName
    if (yearGraduation != "" && department == "" && firstName == "") {
        pool.query(`select * from alumni_data where yearGraduation=${yearGraduation}`, (err, results) => {
            if (results != "") {
                res.render('studenResultsSearch', { data: results })
            }else{
                res.render('notFound');
            }
        })
    } else if (yearGraduation == "" && department != "" && firstName == "") {
        pool.query(`select * from alumni_data where department='${department}'`, (err, results) => {
            if (results != "") {
                res.render('studenResultsSearch', { data: results })
            }else{
                res.render('notFound');
            }
        })
    } else if (yearGraduation == "" && department == "" && firstName != "") {
        pool.query(`select * from alumni_data where firstName='${firstName}'`, (err, results) => {
            if (results != "") {
                res.render('studenResultsSearch', { data: results })
            }else{
                res.render('notFound');
            }
        })
    } else if (yearGraduation != "" && department != "" && firstName == "") {
        pool.query(`select * from alumni_data where yearGraduation='${yearGraduation}' and department='${department}'`, (err, results) => {
            if (results != "") {
                res.render('studenResultsSearch', { data: results })
            }else{
                res.render('notFound');
            }
        })
    } else if (yearGraduation == "" && department != "" && firstName != '') {
        pool.query(`select * from alumni_data where department='${department}' and firstName='${firstName}'`, (err, results) => {
            if (results != "") {
                res.render('studenResultsSearch', { data: results })
            }else{
                res.render('notFound');
            }
        })
    } else if (yearGraduation != "" && department == "" && firstName != '') {
        pool.query(`select * from alumni_data where yearGraduation='${yearGraduation}' and firstName='${firstName}'`, (err, results) => {
            if (results != "") {
                res.render('studenResultsSearch', { data: results })
            }else{
                res.render('notFound');
            }
        })
    } else if (yearGraduation != "" && department != "" && firstName != '') {
        pool.query(`select * from alumni_data where yearGraduation=${yearGraduation} and department='${department}' and firstName='${firstName}'`, (err, results) => {
            if (results != "") {
                res.render('studenResultsSearch', { data: data })
            }else{
                res.render('notFound');
            }
        })
    } else {
            res.render('notFound');
    }
})
module.exports = app