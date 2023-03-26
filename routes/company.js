var express = require('express');
var router = express.Router();
var db = require("../database/setup");
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.post('/register', async function (req, res, next) {
  try {
    const user = await db.company.create({
      name: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
      address: req.body.address,
      has_vouchers: (req.body.vouchers == 1),
    });
    res.status(200).send('respond with a resource');
  }
  catch (e) {
    console.log(e);
    res.status(500).send('fail');
  }
});

router.post('/login', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/logout', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
