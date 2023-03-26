var express = require('express');
var router = express.Router();
var db = require("../database/setup");
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.post('/register', async function (req, res, next) {
  try {
    const user = await db.user.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.status(200).send('success');
  }
  catch (e) {
    console.log(e);
    res.status(500).send('fail');
  }
});

module.exports = router;
