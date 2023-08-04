const express = require('express')
const router = express.Router()
router.get('/stex', async (req, res) => {
    res.render('stex')
})
module.exports = router