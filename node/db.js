const mysql = require('mysql')
const config = require('./db.config')

module.exports.init = () => {
    const time = new Date().getTime()
    const connection = mysql.createConnection(config)
    let sql = 'CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, NAME VARCHAR(255) NOT NULL)'
    connection.query(sql)
    sql = `INSERT INTO people(name) values('Rafael-${time}')`
    connection.query(sql)
    connection.end()
}