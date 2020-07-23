const models = require('../models')


module.exports = app => {

    app.post('/projet',(req,res) => {
   
        models
            .Projet
            .create(req.body)
            .then(resultat => res.json(resultat))
})
    app.get('/projet',(req,res) => {

        models
            .Projet
            .findAll()
            .then(resultat => res.json(resultat))
    })

}