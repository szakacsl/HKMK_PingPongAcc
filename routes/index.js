var express = require('express');
const db = require("../database/setup");
const {USER} = require("../config/database");
var router = express.Router();

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
      }
  );
});

function initial() {
    db.user.create({
        username:"test",
        password:"test"
    });
    db.user.create({
        username:"test2",
        password:"test2"
    });
    db.company.create({
        name:"test",
        password:"test",
        address:"address",
        has_vouchers:true
    });
    db.company.create({
        name:"test2",
        password:"test2",
        address:"address2",
        has_vouchers:false
    });
    db.categories.create({
        name:"test2",
    });
    db.categories.create({
        name:"test2",
    });
    db.categories.create({
        name:"test2",
    });
    db.categories.create({
        name:"test2",
    });
    db.categories.create({
        name:"test2",
    });
}


module.exports = router;
