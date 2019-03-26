var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_test"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE categories SET name = 'Sukanta' WHERE categoryID = 1";
    con.query(sql,function (err,result,fields) {
        if (err) throw err;
        console.log('Data Updated Successfully');
    });
});