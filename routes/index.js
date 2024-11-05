var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
