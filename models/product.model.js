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
Category = require("../models/categories.model")(sequelize, Sequelize);
Company = require("../models/company.model")(sequelize, Sequelize);
module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        conv: {
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
        categoryId: {
            type: Sequelize.INTEGER,
            references: {
                model: Category, // 'Actors' would also work
                key: 'id'
            },
            allowNull: false
        }
    });

    return Products;
};