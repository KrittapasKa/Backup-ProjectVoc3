const express = require('express')
const pool = require('../config/database')
const router = express.Router()
router.get('/adminManager/check/:id', async (req, res) => {
    console.log(req.params.id)
    console.log(req.session.username)
    if (req.session.username != undefined || req.session.username != null) {
        pool.query('select * from waiting_data where dataID=?', [req.params.id], (err, result, fields) => {
            if (err) throw err
            res.render('checkData', { data: result })
        })
    } else {
        res.redirect('/login')
    }

})
module.exports = router