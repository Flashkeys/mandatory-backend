let express = require('express');
let router = express.Router();

const users = [];

/* GET users listing. */
router.get('/', function (req, res) {
  res.send(users);
});

router.post('/', function (req, res) {
  const user = req.body
  if (users.includes(user.firstName)) {
    return res.status(400).send({
      message: 'User already exists'
    });
  } else {
    users.push(user.firstName)
    res.end('success');
  }
});

router.post('/login', function (req, res) {
  const user = req.body
  console.log(user);
  
  if (users.includes(user.firstName)) {
    res.end('success');
  } else {
    return res.status(400).send({
      message: 'User does not exist'
    });
  }
});




module.exports = router;
