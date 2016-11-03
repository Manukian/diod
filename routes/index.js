var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ulichnie_displei', function(req, res, next) {
  res.render('ulichnie', { title: 'Express' });
});
router.get('/interiernie_displei', function(req, res, next) {
  res.render('interiernie', { title: 'Express' });
});
router.get('/media_fasadi', function(req, res, next) {
  res.render('media_fasadi', { title: 'Express' });
});

router.get('/proekti', function(req, res, next) {
  res.render('projects', { title: 'Express' });
});
router.get('/partneri', function(req, res, next) {
  res.render('partners', { title: 'Express' });
});
router.get('/kontakti', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/sotrudnichestvo', function(req, res, next) {
  res.render('collab', { title: 'Express' });
});
router.get('/calculator', function(req, res, next) {
  res.render('calculator', { title: 'Express' });
});
module.exports = router;
