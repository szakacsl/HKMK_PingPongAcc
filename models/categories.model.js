module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define("categories", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        units: {
            type: Sequelize.STRING,
            allowNull: false
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
    });

    return Categories;
};