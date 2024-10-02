module.exports = (sequelize, Sequelize) => {
    const Coffee = sequelize.define("coffee", {
        country: {
            type: Sequelize.STRING
        },
        flavor: {
            type: Sequelize.STRING
        }
    });

    return Coffee;
};