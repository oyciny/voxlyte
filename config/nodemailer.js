let nodemailer = require('nodemailer')
let mailgun = require('nodemailer-mailgun-transport')
let { mailAuth } = require('./vars')

let mailgunAuth = {
    auth: {
        api_key: mailAuth.api_key,
        domain: mailAuth.domain
    }
}

let transporter = nodemailer.createTransport(mailgun(mailgunAuth))

module.exports = transporter