const jwt = require("jsonwebtoken");
const config = require("../config/auth.js");

verifyToken = (req, res, next) => {
    let token = req.session.token;

    if (!token) {
        return res.status(403).send({
            message: "No token provided!",
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!",
            });
        }
        req.userId = decoded.id;
        next();
    });
};

verifyNoToken = (req, res, next) => {
    if (req.session.token) {
        return res.status(403).send({
            message: "Token provided!",
        });
    }

    next();
};

const authJwt = {
    verifyToken,
    verifyNoToken
};
module.exports = authJwt;