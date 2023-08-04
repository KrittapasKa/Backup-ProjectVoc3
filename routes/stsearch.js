const express = require('express')
const router = express.Router()
router.get('/stsearch', async (req, res) => {
    res.render('stsearch')
})
module.exports = router