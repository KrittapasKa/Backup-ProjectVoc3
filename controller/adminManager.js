const express = require('express')
const pool = require('../config/database')
const router = express.Router()
router.get('/adminManager',async (req,res)=>{
    if(req.session.username != undefined || req.session.username != null){
        pool.query('select * from waiting_data',(err,result)=>{
            if(err) throw err
            res.render('adminManager', {username : req.session.username, data : result})
        })
    }else{
        res.redirect('login')
    }
})
module.exports = router