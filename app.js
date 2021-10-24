let app = require('./config/express')
let { port } = require('./config/vars')

app.listen(port, () => {
    console.info(`Server listening [http://localhost:${port}]`)
})

module.exports = app;