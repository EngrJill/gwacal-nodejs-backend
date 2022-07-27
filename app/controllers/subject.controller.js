const db = require("../models/index");
const Subject = db.subjects;
//const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    console.log("POSTING SOMETHING...")
    // Validate request
    if (!req.body.subjectName) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    // Create a Tutorial
    const subject = {
        subjectName: req.body.subjectName,
        course: req.body.course,
        yearLevel: req.body.yearLevel,
        equivalentUnits: req.body.equivalentUnits
    };
    // Save Tutorial in the database
    Subject.create(subject)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
        });
};
// // Retrieve all Tutorials from the database.
exports.filterByCourse = (req, res) => {
    // Validate request
    console.log("POINTING HERE IN FINDALL")
    if (!req.body.course) {
        res.status(400).send({
        message: "Filter cannot be empty!"
        });
        return;
    }

    const filterByCourse = {course: req.body.course}

    Subject.findAll({where: filterByCourse})
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
    
};
// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };
// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };
// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };
// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };
// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };