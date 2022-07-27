//Forda adding of Schema
module.exports = (sequelize, Sequelize) => {
    const SubjectSchema = sequelize.define("subjects", {
      id: {
        type: Sequelize.INTEGER,type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      subjectName: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      yearLevel: {
        type: Sequelize.BOOLEAN
      },
      equivalentUnits: {
        type: Sequelize.FLOAT
      }
    });
    return SubjectSchema;
};