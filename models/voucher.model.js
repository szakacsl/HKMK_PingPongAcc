const Sequelize = require("sequelize");
const config = require("../config/database");
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
User = require("../models/user.model")(sequelize, Sequelize);
Company = require("../models/company.model")(sequelize, Sequelize);
module.exports = (sequelize, Sequelize) => {
    const Voucher = sequelize.define("vouchers", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: Sequelize.STRING,
            unique: true
        },
        end_date: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        companyId: {
            type: Sequelize.INTEGER,
            references: {
                model: Company, // 'Actors' would also work
                key: 'id'
            },
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: User, // 'Actors' would also work
                key: 'id'
            },
            allowNull: false
        }
    });

    return Voucher;
};