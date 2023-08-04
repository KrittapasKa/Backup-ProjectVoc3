const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const routes = require('./routes')
const stsearch = require('./controller/stsearch')
const login = require('./controller/login')
const stadd = require('./controller/stadd')
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
}))
app.use(express.static('views'))
app.use(express.static('public'))
app.set('view engine', 'pug')
app.use(routes)
app.use(stsearch, login, stadd)
app.use((req, res, next) => {
    res.render('notFound')
});
app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
})
