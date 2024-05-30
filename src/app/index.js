const express = require('express')
const db = require('./db');

const app = express()

app.set('view engine', 'ejs');

app.listen(process.env.PORT, () =>{
    console.log(`Server Running on PORT: ${process.env.PORT}`);
})

app.get('/', (req, res) => {
    // Insert User
    const first_name = 'Batman'
    const last_name = 'Robin'
    const sql = 'INSERT INTO users (first_name, last_name) VALUES (?, ?)';
    db.query(sql, [first_name, last_name], (err, result) => {
        if (err) throw err;
       console.log('Error Insert Data');
       console.error(err);
    });

    db.query('SELECT first_name, last_name FROM users', (err, results) => {
        if (err) throw err;
        res.render('index', { users: results });
    });
});
