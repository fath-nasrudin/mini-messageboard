var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages, });
});

router.get('/form', (req, res) => {
  res.render('form', {title: 'Mini MessageBoard'});
})

router.post('/form', (req, res) => {
  const { body } = req;
  const newMessage = {
    text: body.text,
    user: body.user,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect('/');
})

module.exports = router;
