const models = require('../models')
const dataProjet = require('../dataProjet')


module.exports = app => {

    app.post('/projet',(req,res) => {
   
        models
            .Projet
            .bulkCreate(dataProjet)
            .then(resultat => res.json(resultat))
})
    app.get('/projet',(req,res) => {

        models
            .Projet
            .findAll()
            .then(resultat => res.json(resultat))
    })

    app.put('/projet',(req,res) => {

        models
            .Projet
            .update(req.body,{
                where : {
                    id : 3
                }
            })
            .then(resultat => res.json(resultat))
    })

}