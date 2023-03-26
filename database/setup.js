const config = require("../config/database");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);
db.company = require("../models/company.model")(sequelize, Sequelize);
db.voucher = require("../models/voucher.model")(sequelize, Sequelize);
db.products = require("../models/product.model")(sequelize, Sequelize);
db.categories = require("../models/categories.model")(sequelize, Sequelize);
db.categories.hasMany(db.products);
db.company.hasMany(db.products);
module.exports = db;