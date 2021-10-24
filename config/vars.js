require('dotenv').config()

module.exports= {
    port: process.env.PORT,
    mailPass: process.env.MAIL_PASSWORD,
    mailAuth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
}