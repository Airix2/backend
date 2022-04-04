module.exports = (sequelize, Sequelize) => {

    const Cars = sequelize.define("car", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DECIMAL(10, 2),
            unique: true,
            autoIncrement: true
        },
        make: {
            type: Sequelize.STRING,
        },
        model: {
            type: Sequelize.STRING,
        },
        year: {
            type: Sequelize.DECIMAL(10, 2),
        },
        category: {
            type: Sequelize.STRING,
        },
    }, {
        tableName: 'car_models'
    }, {
        timestamps: false
    });

    return Cars;
};