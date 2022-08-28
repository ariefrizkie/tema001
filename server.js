const express = require('express');
const mysql = require('mysql');
const BodyParser = require("body-parser")


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(BodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    database: 'u5v742tu_komentardemo',
    user: 'root',
    password: '',
});

db.connect((err) => {
    if(err) throw err
    console.log('Server terhubung')

    app.get('/', (req,res) => {
        const sql = "SELECT * FROM komentar"
        db.query(sql, (err, result) => {
        const coments = JSON.parse(JSON.stringify(result))
        res.render('index', {coments, nama: req.query.nama,});
        })
    });

    

    app.post('/add', (req, res) => {
        const insertSql = `INSERT INTO komentar (nama, telp, kehadiran, ucapan) VALUES ('${req.body.nama}', '${req.body.telp}', '${req.body.kehadiran}', '${req.body.ucapan}')`;

        db.query(insertSql, (err, result) => {
            if (err) throw err
            res.redirect("/");
        })
    })

    
})





// app.listen(3000, () => {
//     console.log('server ready....');
// });
app.listen();