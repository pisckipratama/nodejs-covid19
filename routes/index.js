var express = require('express');
var router = express.Router();
var moment = require('moment');
moment.locale('id');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Data Covid-19',
    jam: moment().format('LLLL')
  });
});

module.exports = router;