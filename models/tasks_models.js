module.exports = (sequelize, Sequelize) => {

    const Tasks = sequelize.define("task", {

        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DECIMAL(10, 2),
            unique: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
        },
        desc: {
            type: Sequelize.STRING,
        }
    }, {
        tableName: 'tasks'
    }, {
        timestamps: false
    });

    return Tasks;
};