const express = require('express')
const pool = require('../config/database')
const app = express()
app.post('/login', (req, res) => {
    if (req.body.username != '' && req.body.password != '') {
        pool.query(`select * from account_data where username='${req.body.username}' and password='${req.body.password}'`, (err, result) => {
            if (err) throw err
            if (result != '') {
                username = req.body.username
                req.session.username = username;
                res.redirect('/adminManager');
            } else {
                console.log('ไม่พบผู้ใช้นี้/รหัสผ่านผิด')
            }
        })
    } else {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง')
    }
})
module.exports = app