var express = require('express');
var router = express.Router();

const mc = require('.././public/javascripts/modelcontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Countries BB', footer: '© Copyright Mikolaj Hrycko 2019' });
});

/* GET data. */
router.get('/table', function(req, res, next) {
  	res.render('table', {title: 'Data', boundingboxes: mc.getData()});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  	res.render('about', {title: 'About', footer: '© Copyright Mikolaj Hrycko 2019' });
});

module.exports = router;
