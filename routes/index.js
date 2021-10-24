let router = require('express').Router()
let mailman = require('../config/nodemailer')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.post('/contact', (req, res) => {
    let mailOptions = {
        from: 'Postmaster <postmaster@voxlyte.com>',
        to: 'customer.relations@voxlyte.com',
        subject: 'This is an automated message from the Voxlyte Website Contact Form',
        text: `Name: ${req.body.name} | Email: ${req.body.email}`
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

module.exports = router