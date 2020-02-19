// import my sql connection
let connection = require('../config/connection.js');

let orm = {
    all: function(burgerName, cb) {
        let queryStr = 'SELECT * FROM ' + burgerName + ';';
        connection.query(queryStr, function(err,result) {
            if (err) { throw err; } 
            cb(result);
        });
    },
    create: function(burgerName, vals, cb) {
        let queryStr = "INSERT INTO " + burgerName + " (burger_name, devoured) VALUES ('" + vals[0] + "', 0);"
        
        console.log(queryStr);

        connection.query(queryStr, vals, function(err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },
    update: function(burgerName, obj, condition, cb) {
        console.log('condition jenna ' + condition)
        let queryStr = "UPDATE " + burgerName + " SET devoured = 1 WHERE id = " + condition + ";";

        console.log(queryStr);

        connection.query(queryStr, function(err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },
    delete: function(burgerName, cb) {
        let queryStr = 'DELETE FROM burgers WHERE burger_name = ' + burgerName;
        connection.query(queryStr, function(err,result) {
            if (err) { throw err; } 
            cb(result);
        });
    }
}; 

module.exports = orm;