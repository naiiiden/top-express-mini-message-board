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

messages.forEach(message => {
  message.added = message.added.toLocaleString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric' 
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Odin Project\'s Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add a new comment' });
});

router.post('/new', function(req, res, next) {
  messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
  res.redirect('/');
});

module.exports = router;
