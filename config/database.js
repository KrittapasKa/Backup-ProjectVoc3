const mysql = require('mysql2')
const connection = mysql.createPool({
    host: 'localhost',
    user: 'win',
    password: 'adminPW',
    database: 'test_db'
})
module.exports = connection