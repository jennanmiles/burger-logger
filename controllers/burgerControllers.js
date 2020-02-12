let express = require('express');

let router = express.Router();

// import the model 
let burger = require('../models/burger.js');

// create routes and set up logic within these routes
router.get('', function(req,res) {

});

router.post('', function(req, res) {

});

router.put('', function(req,res) {
    burger.update({

    });
});

router.delete('', function(req,res) {

});

module.exports = router;