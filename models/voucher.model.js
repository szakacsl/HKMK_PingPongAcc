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
    });

    return Voucher;
};