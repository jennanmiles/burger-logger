// import my sql connection
let connection = require('../config/connection.js');

let orm = {
    selectAll: function(burgerName, cb) {
        let queryStr = 'SELECT * FROM burgers_db';
        connection.query(queryStr, [burgerName, cb], function(err,result) {
            if (err) throw err; 
            console.log(results);
        });
    },
    insertOne: function (burgerName, cb) {
        let queryStr = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)';
        console.log(queryStr);

        connection.query(queryStr, [burgerName, cb], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(burgerName,update) {
        let queryStr = 'SELECT ? FROM burgers_db WHERE ?';

        console.log(queryStr);

        connection.query(queryStr, [burgerName, update], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}; 

module.exports = orm;