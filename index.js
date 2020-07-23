const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require("./models")

app.use(bodyParser({extended : true}))


app.get('/',(req,res)=> {
    res.send('Hello')
})

require('./routes/competence')(app)
require('./routes/projet')(app)

models
    .sequelize
    .sync()
    .then(app.listen(3000, () => {
        console.log('Server is running')
    }))

