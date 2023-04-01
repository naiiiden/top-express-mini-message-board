var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'how much would a trip to spain cost?',
    user: 'bob',
    added: new Date(),
  },
  {
    text: 'it depends where you live. for example, if you live in spain, it\'s free',
    user: 'tom',
    added: new Date(),
  },
  {
    text: 'so what do u do in ur free time?',
    user: 'bruce',
    added: new Date(),
  },
  {
    text: 'i stalk people',
    user: 'ivanka',
    added: new Date(),
  },
  {
    text: 'ok... i like to swim',
    user: 'bruce',
    added: new Date(),
  },
  {
    text: 'i know',
    user: 'ivanka',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
