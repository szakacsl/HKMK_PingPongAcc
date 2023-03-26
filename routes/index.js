var express = require('express');
const db = require("../database/setup");
const {USER} = require("../config/database");
var router = express.Router();
const bcrypt = require("bcryptjs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('This is json')
});

router.get('/test', function(req, res, next) {
  res.json('This is json test')
});


router.get('/start', async function (req, res, next) {
  db.sequelize.sync(
      {force: true}
  ).then(
      () => {
          initial();
          res.send("ok");
      }
  );
});

function initial() {
    db.user.create({
        username:"test",
        password:bcrypt.hashSync("test", 8),
    });
    db.user.create({
        username:"test2",
        password:bcrypt.hashSync("test2", 8)
    });
    db.company.create({
        name:"test",
        password:bcrypt.hashSync("test", 8),
        address:"address",
        has_vouchers:true
    });
    db.company.create({
        name:"test2",
        password:bcrypt.hashSync("test2", 8),
        address:"address2",
        has_vouchers:false
    });
    db.categories.create({
        name:"metal",
    });
    db.categories.create({
        name:"food",
    });
    db.categories.create({
        name:"clothing",
    });
    db.categories.create({
        name:"toys",
    });
    db.categories.create({
        name:"electronics",
    });
    db.categories.create({
        name:"waste oil",
    });
    db.categories.create({
        name:"furniture",
    });
}


module.exports = router;
