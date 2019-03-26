var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_test"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "INSERT INTO categories (name) VALUES ?";
    var values = [
        ['John'],
        ['Peter'],
        ['Amy'],
        ['Hannah'],
        ['Michael'],
        ['Sandy'],
        ['Betty'],
        ['Richard'],
        ['Susan'],
        ['Vicky'],
        ['Ben'],
        ['William'],
        ['Chuck'],
        ['Viola']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        console.log("Message: " + result.  message);
    });
});