// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'app'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
