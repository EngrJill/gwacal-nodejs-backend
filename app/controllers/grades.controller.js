const db = require("../models/index");
const Grades = db.grades;
const User = db.user;
const Subject = db.subjects;

exports.postgrade = async (req, res) => {
    if (!req.body.userId && !req.body.subjectId && !req.body.grade) {

        res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
    }

    const filterSameDetails = {userId: req.body.userId, 
        subjectId: req.body.subjectId
    }

    const gradeIsExisting = await Grades.findOne({ where: filterSameDetails });

    if (gradeIsExisting) {
    res.status(400).send("Subject Detail is already existent");
    return;
    }

    const grades = {
        subjectId: req.body.subjectId,
        userId: req.body.userId,
        grade: req.body.grade
    }

    Grades.create(grades)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
        });
}



exports.showgrades = async (req, res) => {

    User.hasMany(Grades);
    Subject.hasMany(Grades)
    Grades.belongsTo(User);
    Grades.belongsTo(Subject);


    await Grades.findAll({
        attributes: ['subjectId', 'grade'],
        include: [{
            model: User,
            attributes: ['firstName', 'lastName'],
            where: {id: req.body.id}
           },
           {
            model: Subject,
            attributes: ['subjectName', 'equivalentUnits', 'yearLevel', 'course']
           }
        ],
    }).then(data => {
        const gradeDetailsMap = data.map(item => {
            item.subject.dataValues["grade"] = item.grade;
            return item.subject.dataValues
        })

        let gwagen = [0,0]
        const gwa = gradeDetailsMap.map(item => {
            gwagen[0] += (item.equivalentUnits * item.grade);
            gwagen[1] += item.equivalentUnits

            return "GWA Init"
        })
        const gwaFinal = (gwagen[0]/gwagen[1]).toFixed(2)

        const returnData = {
            "name": `${data[0].user.firstName} ${data[0].user.lastName}`,
            "gradeDetails": gradeDetailsMap,
            "gwa": gwaFinal
        }

        res.send(returnData);
      })
      .catch (err => {
        res.status(500).send({
            message: err.message || "Some error occured"
        })
      })

    //   await Grades.findAll({
    //     where: {user_id: 1}
    //   }).then(data => {
    //     res.send(data);
    //   })
    //   .catch (err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occured"
    //     })
    //   })
}