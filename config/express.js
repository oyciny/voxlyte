let express = require('express')
let createError = require('http-errors')
let path = require('path')
let stylus = require('stylus')

let app = express()

// Bring in Routes
let indexRouter = require('../routes/index')

// Setup View Engine
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(stylus.middleware(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '../public')));

// Use Routes
app.use('/', indexRouter)

// Catch 404
app.use((req, res, next) => {
    next(createError(404))
})

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app