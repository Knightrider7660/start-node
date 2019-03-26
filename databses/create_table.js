var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_test"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = 'Create Table categories (categoryID INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), created_at timestamp, updated_at timestamp )';
    con.query(sql,function (err,result,fields) {
        if (err) throw err;
        console.log('Table Created Successfully');
    });
});