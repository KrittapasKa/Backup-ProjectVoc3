const express = require('express')
const pool = require('../config/database')
const app = express()
app.post('/stadd', async (req, res) => {
    studentID = req.body.studentID
    department = req.body.department
    yearGraduation = req.body.yearGraduation
    idCard = req.body.idCard
    sex = req.body.sex
    title = req.body.title
    firstName = req.body.firstName
    lastName = req.body.lastName
    firstName_Eng = req.body.firstName_Eng
    lastName_Eng = req.body.lastName_Eng
    middleName = req.body.middleName
    nickName = req.body.nickName
    telephoneNumber = req.body.telephoneNumber
    email = req.body.email
    if (department != "" && yearGraduation != "" && idCard != "" && sex != "" && title != "" && firstName != "" && firstName_Eng != "" && telephoneNumber != "") {
            var dateObj = new Date();
            let date = dateObj.getUTCDate() + "/" + dateObj.getUTCMonth() + "/" + parseInt(dateObj.getUTCFullYear() + 543)
            pool.query('insert into waiting_data (`date`,`studentID`,`department`,`yearGraduation`,`idCard`,`sex`,`title`,`firstName`,`lastName`,`firstName_Eng`,`lastName_Eng`,`middleName`,`nickName`,`telephoneNumber`,`email`) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [date,studentID, department, yearGraduation, idCard, sex, title, firstName, lastName, firstName_Eng, lastName_Eng, middleName, nickName, telephoneNumber, email], (err, result) => {
                if (err) throw err
                console.log(result)
                res.redirect('/stadd')
            })
    } else {
        console.log('ข้อมูลไม่ครบ')
    }
})
module.exports = app