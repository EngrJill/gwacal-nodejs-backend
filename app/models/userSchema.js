//Forda adding of User Schema
module.exports = (sequelize, Sequelize) => {
    const UserSchema = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      course: {
        type: Sequelize.STRING,
        allowNull: false
      },
      school: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      token: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
      }

    });
    return UserSchema;
};