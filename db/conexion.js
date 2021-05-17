const Sequelize = require ('sequelize')
var host = process.env.HOST
var por = process.env.PORT
var user = process.env.username
var pass = process.env.password

const sequelize = new Sequelize('Tienda_01', null, null, {
    dialect : 'mssql',
    server : host,
    port : por,
    dialectOptions : {
        authentication : {
            type : 'default',
            options : {
                encrypt : true,
                userName : user,
                password : pass

            }
        },
    }
})

module.exports = sequelize