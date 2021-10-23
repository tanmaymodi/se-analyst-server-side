const express = require('express');
const router = express.Router();
const Form = require('../models/form');
const Person = require('../models/person');

router.route('/')
.get(async(req, res) => {
    
    
    res.render('index.html');
});

module.exports = router;