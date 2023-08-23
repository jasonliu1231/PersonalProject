var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  const { user, password } = req.body;
  if ( !!user || !!password ) {
    res.status(404).send('帳號密碼不可以為空！')
  }
  let response = { user, password }
  res.send(200).send(response)
});

module.exports = router;
