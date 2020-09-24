const models = require('../models')
const dataCompetence = require('../dataCompetence')

module.exports = app =>  {

    app.post('/competence',(req,res) => {
   
        models
            .Competence
            .bulkCreate(dataCompetence)
            .then(resultat => res.json(resultat))
})
    app.get('/competence',(req,res) => {

        models
            .Competence
            .findAll()
            .then(resultat => res.json(resultat))
    })

}