var express = require('express');
var router = express.Router();
var db = require("../database/setup");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', async function (req, res, next) {
  await db.sequelize.sync({force: true});
  await db.user.create(
      {
        username:"test",
        password:"test"
      }
  );
  myUser = await db.user.findAll();
  res.send(myUser);
});

module.exports = router;
