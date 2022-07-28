//Forda adding of User Schema
module.exports = (sequelize, Sequelize) => {
    const GradesSchema = sequelize.define("grades", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER
      },
      subjectId: {
        type: Sequelize.INTEGER
      },
      grade: {
        type: Sequelize.FLOAT
      }

    });
    return GradesSchema;
};