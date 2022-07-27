//Forda adding of User Schema
module.exports = (sequelize, Sequelize) => {
    const UserSchema = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }

    });
    return UserSchema;
};