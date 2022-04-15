const mysql = require('mysql')
const config = require('./db.config')

module.exports = (req, res) => {
    res.write('<h1>Full Cycle Rocks!</h1>')
    res.write('<h3>Lista de nomes:</h3>')
    const connection = mysql.createConnection(config)
    connection.query('SELECT * FROM people', (err, result) => {
        if (err) throw err;
        result.forEach((row) => {
            res.write(`<p>- ${row['NAME']}</p>`)
        })
        res.end()
    });
    connection.end()
}