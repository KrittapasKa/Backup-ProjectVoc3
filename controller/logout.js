const express = require('express')
const router = express.Router()
router.get('/logout', (req, res) => {
    if (req.session.username != undefined) {
        req.session.destroy((err) => {
            if (err) throw err
            console.log('ออกจากระบบ เรียบร้อย')
            res.redirect('adminManager')
        }
        )
    }else{
        res.redirect('/login')
    }
})
module.exports = router