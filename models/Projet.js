'use strict'

module.exports = (sequelize, Datatypes) => {
    const Projet = sequelize.define('Projet',{
        name : Datatypes.STRING,
        link : Datatypes.STRING,
        image : Datatypes.STRING,
        comment: Datatypes.STRING

    },{
        timestamps : false
    })
    return Projet
}