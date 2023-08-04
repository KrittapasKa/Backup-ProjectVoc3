const express = require('express')
const pool = require('../config/database')
const router = express.Router()
router.get('/adminManager/approve/:id', async (req, res) => {
    if (req.session.username != undefined || req.session.username != null) {
        pool.query('INSERT INTO alumni_data (`firstName`,`lastName`,`department`,`yearGraduation`) SELECT firstName, lastName, department,yearGraduation FROM waiting_data WHERE dataID=?', [req.params.id], (err, result) => {
            if (err) throw err
            console.log('อนุมัติเรียบร้อย')
            pool.query('select * from waiting_data'), (err, result2)=>{
                if(err) throw err
                console.log("ดึงข้อมูลเรียบร้อย")
                let idCard = result2(0).idCard
                console.log("ดึงข้อมูลเรียบร้อย")
                let password = result2(0).telephoneNumber
                pool.query('insert into account_data (`username`,`password`,`email`,`telephoneNumber`,`role`,`status` values (?,?,?,?,?,?)',[idCard,telephoneNumber,"test@gmail.com",telephoneNumber,"guess",0],(err,result3)=>{
                    if(err) throw err
                    console.log("password create")
                })
            }
        })
    }
    else {
        res.redirect('login')
    }

})
module.exports = router