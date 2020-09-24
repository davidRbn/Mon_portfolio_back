const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require("./models")
const cors = require('cors')

app.use(bodyParser({extended : true}))
app.use(cors())

app.get('/',(req,res)=> {
    res.send('Hello')
})

require('./routes/competence')(app)
require('./routes/projet')(app)

models
    .sequelize
    .sync()
    .then(app.listen(3002, () => {
        console.log('Server is running')
    }))

