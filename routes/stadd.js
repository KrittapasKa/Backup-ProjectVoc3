const express = require('express')
const router = express.Router()
router.get('/stadd', async (req, res) => {
    res.render('stadd')
})
module.exports = router