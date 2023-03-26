var express = require('express');
var router = express.Router();
var db = require("../database/setup");

/* GET users listing. */
router.get('/', async function (req, res, next) {
  categories = await db.categories.findAll();
  res.json(categories);
});

module.exports = router;
