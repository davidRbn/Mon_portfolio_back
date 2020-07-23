'use-strict'

module.exports = (sequelize,DataTypes) =>{
    const Competence = sequelize.define('Competence',{
        name : {
            type: DataTypes.STRING
        },
        
    },{
    timestamps : false
})

return Competence
}