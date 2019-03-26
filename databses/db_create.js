var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

con.connect(function (err) {
    if (err) throw err;
    var sql = 'CREATE DATABASE node_test';
    con.query(sql, function (err,result) {
        if (err) throw err;
        console.log('Database Created Successfully');
    });
});