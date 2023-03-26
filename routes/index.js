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

async function initial() {
    user1 = await db.user.create({
        username: "test",
        password: bcrypt.hashSync("test", 8),
    });
    user2 = await db.user.create({
        username: "test2",
        password: bcrypt.hashSync("test2", 8)
    });
    company1 = await db.company.create({
        name: "test",
        password: bcrypt.hashSync("test", 8),
        address: "address",
        has_vouchers: true
    });
    company2 = await db.company.create({
        name: "test2",
        password: bcrypt.hashSync("test2", 8),
        address: "address2",
        has_vouchers: false
    });
    metalc = await db.categories.create({
        name: "metal",
    });
    await db.categories.create({
        name: "food",
    });
    await db.categories.create({
        name: "clothing",
    });
    await db.categories.create({
        name: "toys",
    });
    await db.categories.create({
        name: "electronics",
    });
    await db.categories.create({
        name: "waste oil",
    });
    await db.categories.create({
        name: "furniture",
    });
    await db.products.create({
        amount: 2,
        price: 1,
        conv: 0.8,
    });
}


module.exports = router;
