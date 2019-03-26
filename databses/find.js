var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_test"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = 'SELECT * FROM categories order By name DESC';
    con.query(sql,function (err, result,fields) {
        if (err) throw err;
        console.log(result);
    });
});