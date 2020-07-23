const models = require('../models')


module.exports = app =>  {

    app.post('/competence',(req,res) => {
   
        models
            .Competence
            .create(req.body)
            .then(resultat => res.json(resultat))
})
    app.get('/competence',(req,res) => {

        models
            .Competence
            .findAll()
            .then(resultat => res.json(resultat))
    })

}