var express = require('express');
var router = express.Router();
var db = require("../database/setup");
const bcrypt = require("bcryptjs");
const {authJwt} = require("../middleware");
const jwt = require("jsonwebtoken");
const config = require("../config/auth");

/* GET users listing. */
router.post('/register', [authJwt.verifyNoToken], async function (req, res, next) {
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

router.post('/login', [authJwt.verifyNoToken],
    async function (req, res, next) {
      try {
        console.log(req.body);
        const user = await db.user.findOne({
          where: {
            username: req.body.username,
          },
        });

        if (!user) {
          return res.status(404).send({message: "User Not found."});
        }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            message: "Invalid Password!",
          });
        }

        req.session.token = jwt.sign({id: user.id}, config.user_secret, {
          expiresIn: 86400,
        });

        return res.status(200).send({
          id: user.id
        });

      } catch (error) {
        return res.status(500).send({message: error.message});
      }
});

router.post('/logout', [authJwt.verifyUserToken], function(req, res, next) {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
});

module.exports = router;
