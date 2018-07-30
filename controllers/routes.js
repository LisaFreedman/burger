// setting up the functions fro the router

var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/burgers', function (req, res) {
  cat.all(function (data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/cats/create', function (req, res) {
  burger.create(['burgers', 'hungry'], [req.body.name, req.body.sleepy], function () {
    res.redirect('/burgers');
  });
});

router.put('/cats/update/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  cat.update({ sleepy: req.body.sleepy }, condition, function () {
    res.redirect('/cats');
  });
});

router.delete('/burgers/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  burgers.delete(condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;