module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("companies", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        has_vouchers: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
    });

    return Company;
};