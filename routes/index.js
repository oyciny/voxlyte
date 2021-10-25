let router = require('express').Router()
let mailman = require('../config/nodemailer')

router.get('/', (req, res) => {
    res.render('index', { title: 'voxlyte'})
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'connect with us'})
})

router.post('/contact', (req, res) => {
    let mailOptions = {
        from: `${req.body.name} <${req.body.email}>`,
        to: 'customer.relations@voxlyte.com',
        subject: 'This is an automated message from the Voxlyte Website Contact Form',
        text: req.body.message
    }
    mailman.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.render('error')
        } else {
            console.log(info)
            res.render('success')
        }
    })
})

router.get('/coming-soon', (req, res) => {
    res.render('coming-soon')
})

module.exports = router