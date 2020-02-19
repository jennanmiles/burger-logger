// import orm
let orm = require('../config/orm.js');

let burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            console.log(res);
            cb(res);
        });
    },
    create: function(burgerName, vals, cb) {
        orm.create('burgers', burgerName, vals, function(res) {
            console.log(res);
            cb(res);
        });
    },
    update: function(burgerName, vals, cb) {
        orm.update('burgers', burgerName, vals, function(res) {
            cb(res);
        });
    },
    delete: function(burgerName, cb) {
        orm.delete('burgers', burgerName, function(res) {
            cb(res);
        })
    }
};

// export database functions for controller
module.exports = burger;