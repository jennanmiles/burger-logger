let express = require('express');

let router = express.Router();

// import the model 
let burger = require('../models/burger.js');

// create routes and set up logic within these routes
router.get('/', function(req,res) {
    burger.all(function(data) {
        let hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.create([
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', function(req,res) {
    let condition = req.params.id;
    console.log('condition = ' + condition);
    burger.update({
        devoured: 1
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/api/burgers/:id', function(req,res) {
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

module.exports = router;