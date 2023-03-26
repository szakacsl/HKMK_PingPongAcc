var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let coordinates = JSON.stringify(
      [
        [
          46.770439,
          23.591423
        ],
        [
          46.670439,
          23.491423
        ]
      ]
  )
  res.send(JSON.stringify(coordinates));
});

module.exports = router;
