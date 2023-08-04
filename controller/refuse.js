const express = require('express')
const pool = require('../config/database')
const { render } = require('./stsearch')
const router = express.Router()
router.get('/adminManager/refuse/:id',async (req,res)=>{
    if(req.session.username != " "){
        pool.getConnection((err) => {
            if (err) throw err
            console.log('Connected Database on adminManager.js')
            pool.query('delete from waiting_data where dataID= ?',[req.params.id],(err,result)=>{
                if(err) throw err
               console.log('ลบข้อมูล นักศึกษาเรียบร้อยแล้ว')
               res.redirect('/adminManager?${ลบข้อมูลแล้ว}')
            })
        })
       
  
    }else{
        res.redirect('/login')
    }
    
})
module.exports = router