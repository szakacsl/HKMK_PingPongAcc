var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let coordinates = JSON.stringify(
      [
        {
          latitude: 46.770439,
          longitude: 23.591423,
        }
      ]
  )
  res.send(JSON.stringify(coordinates));
});

module.exports = router;
