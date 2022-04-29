const { Model, DataTypes } = require('sequelize')

class Users extends Model {
    static init(sequelize) {
        super.init({
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
            
        }, {
            sequelize,
            tableName: "users"
        })
        return this
    }
}
module.exports = Users